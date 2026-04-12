/**
 * Jane Korea - Dictionary Inject
 * Автоматически добавляет кнопки «+ В словарь» на карточки слов
 * Работает с: .phrase-card, .verb-card, .animal-card и аналогами
 */

(function() {
    'use strict';

    // Стили кнопки
    var BUTTON_STYLES = [
        'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'color: #fff',
        'border: none',
        'padding: 6px 14px',
        'border-radius: 20px',
        'font-size: 0.8em',
        'font-weight: 600',
        'cursor: pointer',
        'transition: all 0.3s ease',
        'display: inline-block',
        'box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3)'
    ].join(';');

    var BUTTON_SAVED_STYLES = [
        'background: #4caf50',
        'color: #fff',
        'border: none',
        'padding: 6px 14px',
        'border-radius: 20px',
        'font-size: 0.8em',
        'font-weight: 600',
        'cursor: default',
        'display: inline-block',
        'opacity: 0.8'
    ].join(';');

    // Конфигурация типов карточек
    var CARD_CONFIGS = [
        {
            container: '.phrase-card',
            korean: '.korean-phrase',
            translation: '.translation',
            pronunciation: '.pronunciation'
        },
        {
            container: '.verb-card',
            korean: '.verb-korean',
            translation: '.verb-meaning',
            pronunciation: null
        },
        {
            container: '.animal-card',
            korean: '.korean-word',
            translation: '.translation',
            pronunciation: '.pronunciation'
        },
        {
            container: '.food-card',
            korean: '.korean-word',
            translation: '.translation',
            pronunciation: '.pronunciation'
        },
        {
            container: '.body-card',
            korean: '.korean-word',
            translation: '.translation',
            pronunciation: '.pronunciation'
        },
        {
            container: '.color-card',
            korean: '.korean-word',
            translation: '.translation',
            pronunciation: '.pronunciation'
        },
        {
            container: '.family-card',
            korean: '.family-korean',
            translation: '.family-meaning',
            pronunciation: '.family-romanization'
        },
        {
            container: '.weather-card',
            korean: '.korean-word',
            translation: '.translation',
            pronunciation: '.pronunciation'
        },
        {
            container: '.emotion-card',
            korean: '.korean-word',
            translation: '.translation',
            pronunciation: '.pronunciation'
        },
        {
            container: '.clothing-card',
            korean: '.korean-word',
            translation: '.translation',
            pronunciation: '.pronunciation'
        },
        {
            container: '.transport-card',
            korean: '.korean-word',
            translation: '.translation',
            pronunciation: '.pronunciation'
        },
        {
            container: '.nature-card',
            korean: '.korean-word',
            translation: '.translation',
            pronunciation: '.pronunciation'
        },
        {
            container: '.profession-card',
            korean: '.korean-word',
            translation: '.translation',
            pronunciation: '.pronunciation'
        },
        {
            container: '.hobby-card',
            korean: '.korean-word',
            translation: '.translation',
            pronunciation: '.pronunciation'
        },
        {
            container: '.house-card',
            korean: '.korean-word',
            translation: '.translation',
            pronunciation: '.pronunciation'
        },
        {
            container: '.sport-card',
            korean: '.korean-word',
            translation: '.translation',
            pronunciation: '.pronunciation'
        },
        {
            container: '.time-card',
            korean: '.korean-word',
            translation: '.translation',
            pronunciation: '.pronunciation'
        },
        // === Level 4 vocabulary cards ===
        {
            container: '.tech-card',
            korean: '.korean-word',
            translation: '.translation',
            pronunciation: '.pronunciation'
        },
        {
            container: '.eco-card',
            korean: '.korean-word',
            translation: '.translation',
            pronunciation: '.pronunciation'
        },
        {
            container: '.edu-card',
            korean: '.korean-word',
            translation: '.translation',
            pronunciation: '.pronunciation'
        },
        {
            container: '.health-card',
            korean: '.korean-word',
            translation: '.translation',
            pronunciation: '.pronunciation'
        },
        {
            container: '.society-card',
            korean: '.korean-word',
            translation: '.translation',
            pronunciation: '.pronunciation'
        },
        {
            container: '.culture-card',
            korean: '.korean-word',
            translation: '.translation',
            pronunciation: '.pronunciation'
        },
        // === Level 5 vocabulary cards ===
        {
            container: '.business-card',
            korean: '.korean-word',
            translation: '.translation',
            pronunciation: '.pronunciation'
        },
        // === Number cards (lesson_04) ===
        {
            container: '.number-card',
            korean: '.korean-number',
            translation: '.number-value',
            pronunciation: '.number-romanization'
        },
        // === Phrase situation cards (phrases.html) ===
        {
            container: '.phrase-situation-card',
            korean: '.phrase-korean',
            translation: '.phrase-translation',
            pronunciation: '.phrase-romanization'
        },
        // === Grammar lesson cards (form-card, cnt-card) ===
        {
            container: '.form-card',
            korean: '.form-title',
            translation: '.form-pattern',
            pronunciation: null
        },
        {
            container: '.cnt-card',
            korean: '.cnt-symbol',
            translation: '.cnt-meaning',
            pronunciation: '.cnt-pronunciation'
        },
        // === Time vocabulary with non-standard classes ===
        {
            container: '.time-card:has(.korean-time)',
            korean: '.korean-time',
            translation: '.time-translation',
            pronunciation: null
        },
        // === Level 6 idioms (vocab-card with korean-idiom) ===
        {
            container: '.vocab-card:has(.korean-idiom)',
            korean: '.korean-idiom',
            translation: '.idiom-meaning',
            pronunciation: null
        },
        // === word-card (vocabulary/* pages) ===
        // Вариант 1: adjectives, body, colors, house, professions, school, verbs
        {
            container: '.word-card:has(.word-korean)',
            korean: '.word-korean',
            translation: '.word-translation',
            pronunciation: '.word-romanization'
        },
        // Вариант 2: basicfood, countries, daystime, emotions, food, seasons, transport, questions
        {
            container: '.word-card',
            korean: '.korean-word',
            translation: '.translation',
            pronunciation: '.pronunciation'
        },
        // Общий fallback для карточек с .korean-word
        {
            container: '.vocab-card',
            korean: '.korean-word',
            translation: '.translation',
            pronunciation: '.pronunciation'
        }
    ];

    /**
     * Создать кнопку «+ В словарь» внутри обёртки
     * Обёртка перехватывает клик чтобы inline onclick на карточке не сработал
     */
    function createButton(korean, translation, pronunciation) {
        // Обёртка останавливает всплытие для inline onclick
        var wrapper = document.createElement('div');
        wrapper.className = 'dict-add-wrapper';
        wrapper.setAttribute('onclick', 'event.stopPropagation(); return false;');
        wrapper.style.cssText = 'display: inline-block; margin-top: 8px;';

        var btn = document.createElement('button');
        btn.className = 'dict-add-btn';

        if (window.Dictionary && window.Dictionary.isWordSaved(korean)) {
            btn.textContent = '✓ В словаре';
            btn.setAttribute('style', BUTTON_SAVED_STYLES);
            btn.disabled = true;
        } else {
            btn.textContent = '+ В словарь';
            btn.setAttribute('style', BUTTON_STYLES);
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                e.preventDefault();
                e._dictBtnClick = true;

                if (!window.Dictionary) {
                    console.error('[ERROR] Dictionary module not loaded');
                    return;
                }

                var added = window.Dictionary.addWord(korean, translation, pronunciation, getPageSource());
                if (added) {
                    btn.textContent = '✓ В словаре';
                    btn.setAttribute('style', BUTTON_SAVED_STYLES);
                    btn.disabled = true;
                    // Тост-уведомление
                    if (window.JKToast) {
                        window.JKToast.success('«' + korean + '» добавлено в словарь');
                    }
                } else {
                    if (window.JKToast) {
                        window.JKToast.info('«' + korean + '» уже есть в словаре');
                    }
                }
            });

            // Hover эффекты
            btn.addEventListener('mouseenter', function() {
                if (!btn.disabled) {
                    btn.style.transform = 'scale(1.05)';
                    btn.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.5)';
                }
            });
            btn.addEventListener('mouseleave', function() {
                if (!btn.disabled) {
                    btn.style.transform = 'scale(1)';
                    btn.style.boxShadow = '0 2px 8px rgba(102, 126, 234, 0.3)';
                }
            });
        }

        wrapper.appendChild(btn);
        return wrapper;
    }

    /**
     * Определить source текущей страницы
     */
    function getPageSource() {
        // Из URL
        var path = window.location.pathname;
        var match = path.match(/lesson_(\d+)_/);
        if (match) return 'lesson-' + match[1];

        match = path.match(/vocabulary\/([^/]+)/);
        if (match) return 'vocab-' + match[1];

        return path.replace(/.*\//, '').replace(/\.html$/, '') || 'unknown';
    }

    /**
     * Извлечь текст из элемента
     */
    function getText(el) {
        if (!el) return '';
        return el.textContent.trim();
    }

    /**
     * Обработать одну карточку
     */
    function processCard(card, config) {
        // Пропускаем если уже обработана
        if (card.querySelector('.dict-add-wrapper')) return;

        var koreanEl = card.querySelector(config.korean);
        if (!koreanEl) return;

        var korean = getText(koreanEl);
        if (!korean) return;

        var translationEl = card.querySelector(config.translation);
        var translation = getText(translationEl);

        var pronunciation = '';
        if (config.pronunciation) {
            var pronEl = card.querySelector(config.pronunciation);
            pronunciation = getText(pronEl);
        }

        // Конвертируем inline onclick в addEventListener
        // чтобы stopPropagation на кнопке корректно блокировал playAudio
        var inlineHandler = card.getAttribute('onclick');
        if (inlineHandler) {
            card.removeAttribute('onclick');
            card.addEventListener('click', function(e) {
                // Выполняем оригинальный onclick только если клик не на кнопке
                if (!e._dictBtnClick) {
                    try { new Function(inlineHandler).call(card); } catch(err) {}
                }
            });
        }

        var btn = createButton(korean, translation, pronunciation);
        card.appendChild(btn);
    }

    /**
     * Сканировать DOM и добавить кнопки
     */
    function scanAndInject() {
        var injected = 0;

        CARD_CONFIGS.forEach(function(config) {
            var cards = document.querySelectorAll(config.container);
            cards.forEach(function(card) {
                if (!card.querySelector('.dict-add-wrapper')) {
                    processCard(card, config);
                    injected++;
                }
            });
        });

        if (injected > 0) {
            console.log('[OK] Dictionary buttons injected:', injected);
        }
    }

    /**
     * MutationObserver для динамически добавляемых карточек
     */
    function observeDOM() {
        if (!window.MutationObserver) return;

        var observer = new MutationObserver(function(mutations) {
            var shouldScan = false;
            mutations.forEach(function(mutation) {
                if (mutation.addedNodes.length > 0) {
                    shouldScan = true;
                }
            });
            if (shouldScan) {
                // Debounce
                clearTimeout(observeDOM._timer);
                observeDOM._timer = setTimeout(scanAndInject, 300);
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    /**
     * Инициализация
     */
    function init() {
        scanAndInject();
        observeDOM();
    }

    // Запуск при загрузке
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Экспорт для ручного вызова
    window.DictionaryInject = {
        scan: scanAndInject
    };

    console.log('[OK] DictionaryInject loaded');
})();
