/**
 * Тренажёр упражнений: одно задание на экране, мгновенная проверка,
 * серия правильных ответов, очки и разбор ошибок в конце.
 *
 * window.ExerciseStats   — локальный прогресс по упражнениям (localStorage)
 * window.ExerciseTrainer — сам тренажёр: ExerciseTrainer.start({...})
 */
(function () {
    'use strict';

    var STORE = 'janeKoreaExercises';

    // =====================================================
    // Хранилище результатов
    // =====================================================
    function load() {
        try { return JSON.parse(localStorage.getItem(STORE)) || {}; }
        catch (e) { console.error('[ERROR] Не читается ' + STORE, e); return {}; }
    }
    function save(data) {
        try { localStorage.setItem(STORE, JSON.stringify(data)); }
        catch (e) { console.error('[ERROR] Не сохраняется ' + STORE, e); }
    }

    function exKey(unit, exId) { return (unit.src || 'book') + ':' + unit.n + ':' + exId; }

    // Упражнения, которые вообще можно тренировать (есть ключи)
    function playable(ex) {
        if (ex.kind === 'open' || ex.kind === 'read') return false;
        return (ex.items || []).some(function (it) { return !!it.a; });
    }

    var ExerciseStats = {
        all: load,
        get: function (unit, exId) { return load()[exKey(unit, exId)] || null; },

        // Записываем только улучшение результата
        setResult: function (unit, exId, ok, total) {
            if (!total) return;
            var data = load();
            var k = exKey(unit, exId);
            var pct = Math.round(ok / total * 100);
            var prev = data[k];
            if (!prev || pct >= prev.pct) {
                data[k] = { pct: pct, ok: ok, total: total, ts: new Date().toISOString() };
                save(data);
            }
        },

        xp: function () { return load()._xp || 0; },
        addXp: function (n) {
            var data = load();
            data._xp = (data._xp || 0) + n;
            save(data);
            return data._xp;
        },

        // Прогресс по уроку: доля упражнений, решённых хотя бы на 60%
        unitProgress: function (unit) {
            var data = load();
            var list = (unit.ex || []).filter(playable);
            var done = list.filter(function (e) {
                var r = data[exKey(unit, e.id)];
                return r && r.pct >= 60;
            }).length;
            return { done: done, total: list.length, pct: list.length ? Math.round(done / list.length * 100) : 0 };
        },

        // Сколько упражнений решено во всех уроках
        totalDone: function (units) {
            var data = load(), n = 0;
            units.forEach(function (u) {
                (u.ex || []).forEach(function (e) {
                    var r = data[exKey(u, e.id)];
                    if (r && r.pct >= 60) n++;
                });
            });
            return n;
        },

        playable: playable,
        reset: function () { save({}); }
    };

    // =====================================================
    // Утилиты
    // =====================================================
    function norm(s) {
        return String(s || '').toLowerCase()
            .replace(/[.,!?;:()«»"'`—–\-]/g, '')
            .replace(/\s+/g, '');
    }
    function esc(s) {
        return String(s == null ? '' : s)
            .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }
    function shuffle(arr) {
        var a = arr.slice();
        for (var i = a.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var t = a[i]; a[i] = a[j]; a[j] = t;
        }
        return a;
    }
    var HANGUL = /[가-힣]/;
    var TRANSCRIPT = /^\s*([^\[\]]+?)\s*\[([^\]]+)\]\s*$/;

    // =====================================================
    // Проверка ответа
    // =====================================================

    // Все ответы, которые считаем верными: полный ключ, эталон для сверки,
    // альтернативы через «/» и те же строки без транскрипции и пояснений
    function variants(item) {
        var out = [];
        [item.c, item.a].forEach(function (src) {
            if (!src) return;
            String(src).split('/').forEach(function (part) {
                var raw = part.trim();
                if (!raw) return;
                out.push(raw);
                var clean = raw.replace(/\[[^\]]*\]/g, '').replace(/\([^)]*\)/g, '').trim();
                if (clean) out.push(clean);
                // «오다 [ода]» — засчитываем и саму транскрипцию
                var tr = /\[([^\]]+)\]/.exec(raw);
                if (tr) out.push(tr[1].trim());
            });
        });
        return uniq(out);
    }

    // Расстояние Левенштейна — чтобы отличить опечатку от незнания
    function distance(a, b) {
        if (Math.abs(a.length - b.length) > 1) return 2;
        var prev = [], cur, i, j;
        for (j = 0; j <= b.length; j++) prev[j] = j;
        for (i = 1; i <= a.length; i++) {
            cur = [i];
            for (j = 1; j <= b.length; j++) {
                cur[j] = Math.min(
                    prev[j] + 1,
                    cur[j - 1] + 1,
                    prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
                );
            }
            prev = cur;
        }
        return prev[b.length];
    }

    // 'ok' — верно, 'near' — опечатка в одном символе, 'no' — неверно,
    // 'empty' — поле не заполнено (ошибкой не считаем)
    function match(item, value) {
        var v = norm(value);
        if (!v) return 'empty';
        var vars = uniq(variants(item).map(norm).filter(Boolean));
        if (vars.indexOf(v) !== -1) return 'ok';
        for (var i = 0; i < vars.length; i++) {
            if (vars[i].length >= 3 && distance(v, vars[i]) <= 1) return 'near';
        }
        return 'no';
    }

    // Лишние слоги-обманки для сборки ответа
    function extraTiles(pool, bare) {
        var chars = [];
        pool.forEach(function (v) {
            v.replace(/\s/g, '').split('').forEach(function (ch) {
                if (HANGUL.test(ch) && bare.indexOf(ch) === -1) chars.push(ch);
            });
        });
        return shuffle(uniq(chars)).slice(0, Math.min(3, Math.max(2, Math.round(bare.length / 2))));
    }

    function uniq(arr) {
        var seen = {}, out = [];
        arr.forEach(function (v) { if (!seen[v]) { seen[v] = 1; out.push(v); } });
        return out;
    }

    // =====================================================
    // Звук: короткие сигналы без файлов
    // =====================================================
    var audioCtx = null;
    function soundOn() { return localStorage.getItem('janeKoreaExSound') !== 'off'; }
    function toggleSound() {
        localStorage.setItem('janeKoreaExSound', soundOn() ? 'off' : 'on');
        return soundOn();
    }
    function beep(kind) {
        if (!soundOn()) return;
        try {
            var Ctx = window.AudioContext || window.webkitAudioContext;
            if (!Ctx) return;
            audioCtx = audioCtx || new Ctx();
            var seq = kind === 'good' ? [[660, 0], [880, 0.09]]
                    : kind === 'win' ? [[523, 0], [659, 0.1], [784, 0.2], [1047, 0.3]]
                    : [[220, 0], [165, 0.1]];
            seq.forEach(function (p) {
                var osc = audioCtx.createOscillator();
                var gain = audioCtx.createGain();
                osc.type = kind === 'bad' ? 'sawtooth' : 'sine';
                osc.frequency.value = p[0];
                var t = audioCtx.currentTime + p[1];
                gain.gain.setValueAtTime(0.0001, t);
                gain.gain.exponentialRampToValueAtTime(0.12, t + 0.02);
                gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.16);
                osc.connect(gain); gain.connect(audioCtx.destination);
                osc.start(t); osc.stop(t + 0.18);
            });
        } catch (e) { /* звук не критичен */ }
    }

    // =====================================================
    // Конфетти
    // =====================================================
    function confetti() {
        var cv = document.createElement('canvas');
        cv.className = 'tr-confetti';
        cv.width = window.innerWidth; cv.height = window.innerHeight;
        document.body.appendChild(cv);
        var ctx = cv.getContext('2d');
        var colors = ['#667eea', '#764ba2', '#4caf50', '#ffd54f', '#f06292', '#4dd0e1'];
        var parts = [];
        for (var i = 0; i < 110; i++) {
            parts.push({
                x: Math.random() * cv.width, y: -20 - Math.random() * cv.height * 0.5,
                w: 6 + Math.random() * 7, h: 8 + Math.random() * 9,
                vy: 2 + Math.random() * 3.5, vx: -1.4 + Math.random() * 2.8,
                rot: Math.random() * Math.PI, vr: -0.12 + Math.random() * 0.24,
                c: colors[Math.floor(Math.random() * colors.length)]
            });
        }
        var frames = 0;
        (function tick() {
            ctx.clearRect(0, 0, cv.width, cv.height);
            parts.forEach(function (p) {
                p.x += p.vx; p.y += p.vy; p.rot += p.vr;
                ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot);
                ctx.fillStyle = p.c; ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
                ctx.restore();
            });
            frames++;
            if (frames < 220) requestAnimationFrame(tick);
            else cv.remove();
        })();
    }

    function toast(msg) {
        var el = document.createElement('div');
        el.className = 'tr-toast';
        el.textContent = msg;
        document.body.appendChild(el);
        setTimeout(function () { el.remove(); }, 2200);
    }

    // =====================================================
    // Сборка очереди вопросов
    // =====================================================
    function buildQuestions(unit, exList) {
        var qs = [];

        exList.forEach(function (ex) {
            if (!playable(ex)) return;
            var items = (ex.items || []).filter(function (it) { return !!it.a; });

            // Пул коротких ответов упражнения — из него берём неверные варианты
            var pool = uniq(items.map(function (it) { return String(it.c || it.a); })
                                 .filter(function (v) { return v.length <= 24; }));

            // Отдельный пул транскрипций для заданий на чтение
            var trPool = uniq(items.map(function (it) {
                var m = TRANSCRIPT.exec(it.a || '');
                return m ? m[2] : '';
            }).filter(Boolean));

            items.forEach(function (it) {
                var answer = String(it.c || it.a);
                var base = {
                    exId: ex.id, exTitle: ex.title, kind: ex.kind,
                    unit: ex._unit || unit,          // в миксе у каждого упражнения свой урок
                    q: it.q, hint: it.h || '', full: it.a, answer: answer
                };

                if (ex.kind === 'select') {
                    qs.push(Object.assign({}, base, {
                        type: 'yesno', q: it.q, yes: it.a !== '—', full: it.a
                    }));
                    return;
                }

                if (ex.kind === 'input') {
                    var wrong = pool.filter(function (v) { return norm(v) !== norm(answer); });

                    // Ответ уже есть в перечислении самого задания — берём варианты оттуда
                    var parts = String(it.q).split(/[,;·/]|\s{2,}/)
                        .map(function (s) { return s.trim(); })
                        .filter(function (s) { return s && s.length <= 24; });
                    var inQ = parts.filter(function (p) { return norm(p) !== norm(answer); });
                    if (parts.length >= 4 && parts.length !== inQ.length && inQ.length >= 3) {
                        qs.push(Object.assign({}, base, {
                            type: 'choice',
                            options: shuffle([answer].concat(shuffle(uniq(inQ)).slice(0, 3)))
                        }));
                        return;
                    }

                    if (answer.length <= 24 && wrong.length >= 3) {
                        qs.push(Object.assign({}, base, {
                            type: 'choice',
                            options: shuffle([answer].concat(shuffle(wrong).slice(0, 3)))
                        }));
                        return;
                    }

                    // Корейский ответ без вариантов — собираем из слогов,
                    // иначе набрать его без корейской раскладки невозможно
                    var bare = answer.replace(/\s/g, '');
                    if (HANGUL.test(answer)) {
                        if (bare.length <= 12) {
                            qs.push(Object.assign({}, base, {
                                type: 'assemble',
                                tiles: shuffle(bare.split('').concat(extraTiles(pool, bare)))
                            }));
                        } else {
                            qs.push(Object.assign({}, base, { type: 'reveal' }));
                        }
                        return;
                    }

                    qs.push(Object.assign({}, base, { type: 'input' }));
                    return;
                }

                // «слово → слово [транскрипция]»: спрашиваем чтение,
                // варианты — только транскрипции, иначе ответ виден сразу
                var tr = TRANSCRIPT.exec(it.a || '');
                if (tr && norm(tr[1]) === norm(it.q) && trPool.length >= 4) {
                    var others = trPool.filter(function (v) { return norm(v) !== norm(tr[2]); });
                    if (others.length >= 3) {
                        qs.push(Object.assign({}, base, {
                            type: 'choice',
                            answer: tr[2],
                            hint: 'Как читается это слово?',
                            options: shuffle([tr[2]].concat(shuffle(others).slice(0, 3)))
                        }));
                        return;
                    }
                }

                // reveal и всё остальное — самопроверка по ключу
                qs.push(Object.assign({}, base, { type: 'reveal' }));
            });
        });

        return qs;
    }

    // =====================================================
    // Тренажёр
    // =====================================================
    function start(opts) {
        var unit = opts.unit;
        var exList = opts.exercises && opts.exercises.length ? opts.exercises : (unit.ex || []);
        var queue = buildQuestions(unit, exList);

        if (!queue.length) {
            toast('В этом упражнении нечего тренировать — ключей нет');
            return;
        }

        // Сколько вопросов у каждого упражнения — результат пишем только за полный прогон
        var sizeByEx = {};
        queue.forEach(function (q) {
            var k = q.unit.n + '|' + q.exId;
            sizeByEx[k] = (sizeByEx[k] || 0) + 1;
        });

        var idx = 0;
        var score = 0, streak = 0, bestStreak = 0, hintsUsed = 0;
        var perEx = {};      // {exId: {ok, total}} — только первая попытка
        var mistakes = [];   // вопросы на повтор
        var answered = false;
        var usedHint = false;
        var phase = 'ask';   // ask | shown (для reveal)

        var ov = document.createElement('div');
        ov.className = 'tr-overlay';
        ov.innerHTML =
            '<div class="tr-top">' +
                '<button class="tr-close" title="Выйти (Esc)">&times;</button>' +
                '<div class="tr-bar"><i></i></div>' +
                '<div class="tr-streak">🔥 0</div>' +
                '<button class="tr-sound" title="Звук"></button>' +
            '</div>' +
            '<div class="tr-body"><div class="tr-card"></div></div>';
        document.body.appendChild(ov);
        document.body.style.overflow = 'hidden';

        var elBar = ov.querySelector('.tr-bar i');
        var elStreak = ov.querySelector('.tr-streak');
        var elCard = ov.querySelector('.tr-card');
        var elSound = ov.querySelector('.tr-sound');

        function paintSound() { elSound.textContent = soundOn() ? '🔊' : '🔇'; }
        paintSound();
        elSound.addEventListener('click', function () { toggleSound(); paintSound(); });
        ov.querySelector('.tr-close').addEventListener('click', close);

        function close() {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
            ov.remove();
            if (opts.onClose) opts.onClose();
        }

        function markFirstTry(q, ok) {
            if (q._counted) return;
            q._counted = true;
            var key = q.unit.n + '|' + q.exId;
            var s = perEx[key] || (perEx[key] = { ok: 0, total: 0, unit: q.unit, exId: q.exId });
            s.total++;
            if (ok) s.ok++;
        }

        function planned() { return queue.length + mistakes.length; }

        function progress() {
            elBar.style.width = Math.round(idx / planned() * 100) + '%';
            elStreak.textContent = '🔥 ' + streak;
        }

        // ---------- отрисовка вопроса ----------
        function render() {
            var q = queue[idx];
            if (!q) { return finish(); }

            answered = false; usedHint = false; phase = 'ask'; picked = [];
            var num = idx + 1;
            var qClass = String(q.q).length > 60 ? 'tr-q small' : 'tr-q';

            var html =
                '<div class="tr-tag">Упражнение ' + esc(q.exId) + ' · ' + num + ' / ' + planned() +
                    (q._retry ? ' · 🔁 повтор' : '') + '</div>' +
                '<div class="tr-title">' + esc(q.exTitle) + '</div>';

            if (q.type === 'yesno') {
                html += '<div class="' + qClass + '">' + esc(q.q) + '</div>' +
                        '<div class="tr-hint">Подходит под условие задания?</div>' +
                        '<div class="tr-yn">' +
                            '<button data-yn="1">✅ Да</button>' +
                            '<button data-yn="0">❌ Нет</button>' +
                        '</div>';
            } else if (q.type === 'choice') {
                html += '<div class="' + qClass + '">' + esc(q.q) + '</div>' +
                        (q.hint ? '<div class="tr-hint">' + esc(q.hint) + '</div>' : '') +
                        '<div class="tr-opts">';
                q.options.forEach(function (o, i) {
                    html += '<button class="tr-opt" data-opt="' + i + '">' + (i + 1) + '. ' + esc(o) + '</button>';
                });
                html += '</div>';
            } else if (q.type === 'assemble') {
                html += '<div class="' + qClass + '">' + esc(q.q) + '</div>' +
                        (q.hint ? '<div class="tr-hint">' + esc(q.hint) + '</div>' : '') +
                        '<div class="tr-slots" id="trSlots"><span class="ph">Соберите ответ из слогов</span></div>' +
                        '<div class="tr-tiles">';
                q.tiles.forEach(function (ch, i) {
                    html += '<button class="tr-tile" data-tile="' + i + '">' + esc(ch) + '</button>';
                });
                html += '</div>' +
                        '<div class="tr-actions">' +
                            '<button class="tr-primary" data-act="check-assemble">Проверить</button>' +
                            '<button class="tr-ghost" data-act="undo">⌫ Стереть</button>' +
                            '<button class="tr-skip" data-act="giveup">Не знаю</button>' +
                        '</div>';
            } else if (q.type === 'input') {
                html += '<div class="' + qClass + '">' + esc(q.q) + '</div>' +
                        (q.hint ? '<div class="tr-hint">' + esc(q.hint) + '</div>' : '') +
                        '<input class="tr-input" type="text" placeholder="Ваш ответ" autocomplete="off" ' +
                            'autocorrect="off" autocapitalize="off" spellcheck="false"/>' +
                        '<div class="tr-actions">' +
                            '<button class="tr-primary" data-act="check">Проверить</button>' +
                            '<button class="tr-ghost" data-act="hint">💡 Подсказка</button>' +
                            '<button class="tr-skip" data-act="giveup">Не знаю</button>' +
                        '</div>';
            } else { // reveal
                html += '<div class="' + qClass + '">' + esc(q.q) + '</div>' +
                        '<div class="tr-hint">Переведите про себя, потом откройте ключ</div>' +
                        '<div class="tr-actions">' +
                            '<button class="tr-primary" data-act="reveal">Показать ключ</button>' +
                        '</div>';
            }

            elCard.className = 'tr-card';
            elCard.innerHTML = html;
            progress();

            var inp = elCard.querySelector('.tr-input');
            if (inp) inp.focus();

            elCard.addEventListener('click', onCardClick);
        }

        function onCardClick(evt) {
            var t = evt.target;
            if (!t.dataset) return;
            var q = queue[idx];

            if (t.dataset.yn !== undefined && !answered) {
                var picked = t.dataset.yn === '1';
                var ok = picked === q.yes;
                elCard.querySelectorAll('[data-yn]').forEach(function (b) { b.disabled = true; });
                t.classList.add(ok ? 'ok' : 'no');
                if (!ok) {
                    var right = elCard.querySelector('[data-yn="' + (q.yes ? '1' : '0') + '"]');
                    if (right) right.classList.add('ok');
                }
                resolve(ok, q.yes ? ('Да — ' + q.full) : 'Нет, не подходит');
                return;
            }

            if (t.dataset.opt !== undefined && !answered) {
                var val = q.options[Number(t.dataset.opt)];
                var good = norm(val) === norm(q.answer);
                elCard.querySelectorAll('.tr-opt').forEach(function (b) {
                    b.disabled = true;
                    if (norm(q.options[Number(b.dataset.opt)]) === norm(q.answer)) b.classList.add('ok');
                });
                if (!good) t.classList.add('no');
                resolve(good, q.full);
                return;
            }

            if (t.dataset.tile !== undefined && !answered) { addTile(t); return; }

            var act = t.dataset.act;
            if (act === 'check-assemble') { checkAssemble(); }
            else if (act === 'undo') { undoTile(); }
            else if (act === 'check') { checkInput(); }
            else if (act === 'hint') { showHint(); }
            else if (act === 'giveup') { giveUp(); }
            else if (act === 'reveal') { revealKey(); }
            else if (act === 'next') { next(); }
            else if (act === 'self-yes' || act === 'self-no') {
                if (answered) return;
                elCard.querySelectorAll('[data-act^="self-"]').forEach(function (b) { b.disabled = true; });
                resolve(act === 'self-yes', null);
            }
        }

        // ---------- сборка ответа из слогов ----------
        var picked = [];   // индексы нажатых слогов

        function paintSlots() {
            var slots = elCard.querySelector('#trSlots');
            if (!slots) return;
            var q = queue[idx];
            slots.innerHTML = picked.length
                ? picked.map(function (i) { return '<span>' + esc(q.tiles[i]) + '</span>'; }).join('')
                : '<span class="ph">Соберите ответ из слогов</span>';
        }

        function addTile(btn) {
            var i = Number(btn.dataset.tile);
            if (picked.indexOf(i) !== -1) return;
            picked.push(i);
            btn.disabled = true;
            btn.classList.add('used');
            paintSlots();
        }

        function undoTile() {
            if (answered || !picked.length) return;
            var i = picked.pop();
            var btn = elCard.querySelector('.tr-tile[data-tile="' + i + '"]');
            if (btn) { btn.disabled = false; btn.classList.remove('used'); }
            paintSlots();
        }

        function checkAssemble() {
            if (answered) return;
            var q = queue[idx];
            if (!picked.length) return;
            var built = picked.map(function (i) { return q.tiles[i]; }).join('');
            var ok = match({ a: q.full, c: q.answer }, built) === 'ok';
            var slots = elCard.querySelector('#trSlots');
            if (slots) slots.classList.add(ok ? 'ok' : 'no');
            elCard.querySelectorAll('.tr-tile').forEach(function (b) { b.disabled = true; });
            resolve(ok, q.full);
        }

        function checkInput() {
            if (answered) return;
            var q = queue[idx];
            var inp = elCard.querySelector('.tr-input');
            if (!inp || !norm(inp.value)) { inp && inp.focus(); return; }
            var res = match({ a: q.full, c: q.answer }, inp.value);
            inp.classList.add(res === 'ok' ? 'ok' : res === 'near' ? 'near' : 'no');
            inp.disabled = true;
            resolve(res === 'ok', q.full, res === 'near');
        }

        function showHint() {
            var q = queue[idx];
            if (answered || usedHint) return;
            usedHint = true; hintsUsed++;
            var a = String(q.answer);
            var open = a.slice(0, Math.max(1, Math.ceil(a.length / 3)));
            var hintEl = document.createElement('div');
            hintEl.className = 'tr-feedback good';
            hintEl.innerHTML = '<div class="fb-head">💡 Подсказка</div>' +
                esc(open) + '…  <span style="opacity:.7">(' + a.length + ' симв.)</span>';
            elCard.appendChild(hintEl);
            var hb = elCard.querySelector('[data-act="hint"]');
            if (hb) hb.disabled = true;
        }

        function giveUp() {
            if (answered) return;
            var inp = elCard.querySelector('.tr-input');
            if (inp) { inp.disabled = true; inp.classList.add('no'); }
            elCard.querySelectorAll('.tr-tile').forEach(function (b) { b.disabled = true; });
            resolve(false, queue[idx].full);
        }

        function revealKey() {
            var q = queue[idx];
            if (phase === 'shown') return;
            phase = 'shown';
            var box = document.createElement('div');
            box.className = 'tr-feedback good';
            box.innerHTML = '<div class="fb-head">🔑 Ключ</div>' + esc(q.full);
            elCard.appendChild(box);
            var actions = elCard.querySelector('.tr-actions');
            actions.innerHTML =
                '<button class="tr-primary" data-act="self-yes">✅ Я знал</button>' +
                '<button class="tr-ghost" data-act="self-no">🔁 Не знал</button>';
        }

        // ---------- общий результат ответа ----------
        function resolve(ok, keyText, near) {
            if (answered) return;
            answered = true;
            var q = queue[idx];
            markFirstTry(q, ok && !usedHint);

            if (ok) {
                streak++;
                bestStreak = Math.max(bestStreak, streak);
                var bonus = Math.min(streak, 5) * 2;
                score += (usedHint ? 4 : 10) + bonus;
                beep('good');
                elStreak.classList.remove('pulse');
                void elStreak.offsetWidth;
                elStreak.classList.add('pulse');
            } else {
                streak = 0;
                beep('bad');
                elCard.classList.add('shake');
                if (!q._retry) { q._retry = true; mistakes.push(q); }
            }
            progress();

            var fb = document.createElement('div');
            fb.className = 'tr-feedback ' + (ok ? 'good' : near ? 'near' : 'bad');
            var head = ok
                ? (streak >= 3 ? '🔥 Серия ' + streak + '!' : '✅ Верно')
                : near ? '📝 Почти — ошибка в одном символе' : '❌ Неверно';
            fb.innerHTML = '<div class="fb-head">' + head + '</div>' +
                (keyText ? '<b>Ключ:</b> ' + esc(keyText) : (ok ? 'Идём дальше' : 'Повторим это задание в конце'));
            elCard.appendChild(fb);

            var nextBox = document.createElement('div');
            nextBox.className = 'tr-actions';
            nextBox.innerHTML = '<button class="tr-primary" data-act="next">Дальше →</button>';
            elCard.appendChild(nextBox);
            nextBox.querySelector('button').focus();
        }

        function next() {
            elCard.removeEventListener('click', onCardClick);
            idx++;
            if (idx >= queue.length && mistakes.length) {
                // прогон ошибок
                queue = queue.concat(mistakes.map(function (m) {
                    return Object.assign({}, m, { _counted: true, _retry: true });
                }));
                mistakes = [];
                toast('🔁 Повторим то, что не получилось');
            }
            render();
        }

        // ---------- финал ----------
        function finish() {
            var ok = 0, tot = 0;
            Object.keys(perEx).forEach(function (k) {
                var s = perEx[k];
                ok += s.ok; tot += s.total;
                if (s.total >= (sizeByEx[k] || s.total)) {
                    ExerciseStats.setResult(s.unit, s.exId, s.ok, s.total);
                }
            });
            var pct = tot ? Math.round(ok / tot * 100) : 0;
            var stars = pct >= 90 ? 3 : pct >= 70 ? 2 : pct >= 40 ? 1 : 0;
            var xp = ExerciseStats.addXp(score);

            elBar.style.width = '100%';
            elCard.className = 'tr-card tr-result';
            elCard.innerHTML =
                '<div class="res-emoji">' + (pct >= 90 ? '🏆' : pct >= 70 ? '🎉' : pct >= 40 ? '👍' : '💪') + '</div>' +
                '<h2>' + (pct >= 90 ? 'Отлично!' : pct >= 70 ? 'Хорошо!' : pct >= 40 ? 'Неплохо' : 'Ещё потренируемся') + '</h2>' +
                '<div class="res-sub">' + esc(unit.name) + ' · ' + tot + ' заданий</div>' +
                '<div class="tr-stars">' +
                    '★★★'.slice(0, stars).replace(/★/g, '<span style="color:#ffc107">★</span>') +
                    '☆☆☆'.slice(0, 3 - stars).replace(/☆/g, '<span style="color:#dcd8ec">★</span>') +
                '</div>' +
                '<div class="tr-nums">' +
                    '<div><div class="n">' + pct + '%</div><div class="c">точность</div></div>' +
                    '<div><div class="n">' + ok + '/' + tot + '</div><div class="c">с первой попытки</div></div>' +
                    '<div><div class="n">' + bestStreak + '</div><div class="c">лучшая серия</div></div>' +
                '</div>' +
                '<div class="tr-xp">+' + score + ' XP · всего ' + xp + ' XP</div>' +
                '<div class="tr-actions">' +
                    '<button class="tr-primary" data-act="again">🔁 Ещё раз</button>' +
                    '<button class="tr-ghost" data-act="done">Готово</button>' +
                '</div>';

            if (pct >= 70) { confetti(); beep('win'); }

            elCard.addEventListener('click', function (e) {
                if (!e.target.dataset) return;
                if (e.target.dataset.act === 'again') {
                    close();
                    start(opts);
                } else if (e.target.dataset.act === 'done') {
                    close();
                }
            });

            console.log('[OK] Тренажёр: ' + ok + '/' + tot + ' (' + pct + '%), +' + score + ' XP');
            if (opts.onFinish) opts.onFinish({ ok: ok, total: tot, pct: pct, score: score, perEx: perEx });
        }

        // ---------- клавиатура ----------
        function onKey(e) {
            if (e.key === 'Escape') { close(); return; }
            if (e.key === 'Enter') {
                var nextBtn = elCard.querySelector('[data-act="next"]');
                if (nextBtn) { e.preventDefault(); next(); return; }
                var checkBtn = elCard.querySelector('[data-act="check"]');
                if (checkBtn) { e.preventDefault(); checkInput(); return; }
                var asmBtn = elCard.querySelector('[data-act="check-assemble"]');
                if (asmBtn) { e.preventDefault(); checkAssemble(); return; }
                var revealBtn = elCard.querySelector('[data-act="reveal"]');
                if (revealBtn) { e.preventDefault(); revealKey(); return; }
                var againBtn = elCard.querySelector('[data-act="again"]');
                if (againBtn) { e.preventDefault(); close(); start(opts); return; }
            }
            if (e.key === 'Backspace' && elCard.querySelector('.tr-tile') && !answered) {
                e.preventDefault(); undoTile(); return;
            }
            if (/^[1-4]$/.test(e.key) && !answered) {
                var opt = elCard.querySelector('.tr-opt[data-opt="' + (Number(e.key) - 1) + '"]');
                if (opt && !opt.disabled) { opt.click(); return; }
                var yn = elCard.querySelectorAll('[data-yn]');
                if (yn.length && Number(e.key) <= 2) yn[Number(e.key) - 1].click();
            }
        }
        document.addEventListener('keydown', onKey);

        render();
    }

    window.ExerciseStats = ExerciseStats;
    window.ExerciseTrainer = { start: start, build: buildQuestions, match: match, variants: variants };
    console.log('[OK] ExerciseTrainer loaded');
})();
