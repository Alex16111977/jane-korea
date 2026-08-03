/* ============================================
   Miso: 한국어 수업 — UI Components (Modal + Toast)
   Версия: 1.0
   Использование:
     JKModal.alert('Сообщение')
     JKModal.success('Успех!', 'Дополнительный текст')
     JKModal.error('Ошибка')
     JKModal.quiz({ score: 5, total: 7, title: 'Результат' })
     JKModal.confirm('Вопрос?', onYes, onNo)
     JKToast.show('Слово добавлено', 'success')
     JKToast.info/success/error/warning('msg')
   ============================================ */

(function(global) {
    'use strict';

    // ---- Helpers ----
    function el(tag, className, html) {
        var e = document.createElement(tag);
        if (className) e.className = className;
        if (html != null) e.innerHTML = html;
        return e;
    }

    function escapeHtml(str) {
        if (str == null) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    // ---- Ensure styles loaded ----
    function ensureStyles() {
        if (document.getElementById('jk-ui-components-css')) return;
        var links = document.querySelectorAll('link[href*="ui-components.css"]');
        if (links.length > 0) return;
        // Try to detect relative path to css file
        var scripts = document.querySelectorAll('script[src*="ui-components.js"]');
        var base = '';
        if (scripts.length > 0) {
            var src = scripts[0].getAttribute('src') || '';
            base = src.replace(/js\/ui-components\.js.*$/, '');
        }
        var link = document.createElement('link');
        link.id = 'jk-ui-components-css';
        link.rel = 'stylesheet';
        link.href = base + 'css/ui-components.css';
        document.head.appendChild(link);
    }

    // ============================================
    // MODAL
    // ============================================
    var Modal = {
        _overlay: null,
        _currentOnClose: null,

        _ensureOverlay: function() {
            if (this._overlay) return this._overlay;
            ensureStyles();
            var overlay = el('div', 'jk-modal-overlay');
            overlay.setAttribute('role', 'dialog');
            overlay.setAttribute('aria-modal', 'true');
            var self = this;
            overlay.addEventListener('click', function(e) {
                if (e.target === overlay) self.close();
            });
            document.body.appendChild(overlay);
            this._overlay = overlay;

            // ESC close
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && self._overlay && self._overlay.classList.contains('jk-visible')) {
                    self.close();
                }
            });
            return overlay;
        },

        /**
         * options: { type, title, icon, body, score, total, buttons, html, onClose }
         *   type: 'info'|'success'|'error'|'warning'
         *   buttons: [{ text, primary, onClick }]
         */
        open: function(options) {
            options = options || {};
            var overlay = this._ensureOverlay();
            overlay.innerHTML = '';

            var modal = el('div', 'jk-modal jk-' + (options.type || 'info'));

            // Header
            var header = el('div', 'jk-modal-header');
            var closeBtn = el('button', 'jk-modal-close', '&times;');
            closeBtn.setAttribute('aria-label', 'Закрыть');
            var self = this;
            closeBtn.addEventListener('click', function() { self.close(); });
            header.appendChild(closeBtn);

            if (options.icon !== false) {
                var defaultIcons = {
                    success: '🎉', error: '❌', warning: '⚠️', info: '💬'
                };
                var iconText = options.icon || defaultIcons[options.type || 'info'];
                header.appendChild(el('span', 'jk-modal-icon', iconText));
            }
            if (options.title) {
                header.appendChild(el('h3', 'jk-modal-title', escapeHtml(options.title)));
            }
            modal.appendChild(header);

            // Body
            var body = el('div', 'jk-modal-body');
            if (options.score != null && options.total != null) {
                body.appendChild(el('div', 'jk-modal-score', options.score + ' / ' + options.total));
            }
            if (options.body) {
                var content = options.html
                    ? options.body
                    : String(options.body).split('\n').map(function(line) {
                        return '<p>' + escapeHtml(line) + '</p>';
                    }).join('');
                var bodyContent = el('div', null, content);
                body.appendChild(bodyContent);
            }
            modal.appendChild(body);

            // Footer
            var footer = el('div', 'jk-modal-footer');
            var buttons = options.buttons || [{ text: 'OK', primary: true }];
            buttons.forEach(function(btn) {
                var b = el('button',
                    'jk-modal-btn ' + (btn.primary ? 'jk-modal-btn-primary' : 'jk-modal-btn-secondary'),
                    escapeHtml(btn.text || 'OK')
                );
                b.addEventListener('click', function() {
                    if (typeof btn.onClick === 'function') btn.onClick();
                    self.close();
                });
                footer.appendChild(b);
            });
            modal.appendChild(footer);

            overlay.appendChild(modal);
            this._currentOnClose = options.onClose || null;

            // Trigger animation
            requestAnimationFrame(function() {
                overlay.classList.add('jk-visible');
            });
        },

        close: function() {
            if (!this._overlay) return;
            this._overlay.classList.remove('jk-visible');
            var cb = this._currentOnClose;
            this._currentOnClose = null;
            if (typeof cb === 'function') {
                setTimeout(cb, 260);
            }
        },

        alert: function(message, title) {
            this.open({
                type: 'info',
                title: title || 'Внимание',
                body: message
            });
        },

        success: function(message, title) {
            this.open({
                type: 'success',
                title: title || 'Отлично!',
                body: message
            });
        },

        error: function(message, title) {
            this.open({
                type: 'error',
                title: title || 'Ошибка',
                body: message
            });
        },

        warning: function(message, title) {
            this.open({
                type: 'warning',
                title: title || 'Внимание',
                body: message
            });
        },

        /**
         * quiz({ score, total, title?, onContinue? })
         */
        quiz: function(options) {
            options = options || {};
            var score = options.score || 0;
            var total = options.total || 0;
            var pct = total > 0 ? (score / total) : 0;
            var type, title, body;

            if (pct === 1) {
                type = 'success';
                title = options.title || 'Превосходно!';
                body = 'Все ответы правильные! 완벽해요!';
            } else if (pct >= 0.7) {
                type = 'success';
                title = options.title || 'Хороший результат!';
                body = 'Ещё немного практики и будет идеально.';
            } else if (pct >= 0.4) {
                type = 'warning';
                title = options.title || 'Неплохо';
                body = 'Стоит повторить материал урока.';
            } else {
                type = 'error';
                title = options.title || 'Попробуйте ещё раз';
                body = 'Рекомендуем перечитать урок внимательнее.';
            }

            var buttons = [];
            if (options.onRetry) {
                buttons.push({ text: 'Повторить', onClick: options.onRetry });
            }
            if (options.onContinue) {
                buttons.push({ text: 'Продолжить', primary: true, onClick: options.onContinue });
            }
            if (buttons.length === 0) {
                buttons.push({ text: 'OK', primary: true });
            }

            this.open({
                type: type,
                title: title,
                score: score,
                total: total,
                body: body,
                buttons: buttons
            });
        },

        confirm: function(message, onYes, onNo, title) {
            this.open({
                type: 'info',
                title: title || 'Подтверждение',
                body: message,
                icon: '❓',
                buttons: [
                    { text: 'Отмена', onClick: onNo },
                    { text: 'OK', primary: true, onClick: onYes }
                ]
            });
        }
    };

    // ============================================
    // TOAST
    // ============================================
    var Toast = {
        _container: null,

        _ensureContainer: function() {
            if (this._container && document.body.contains(this._container)) return this._container;
            ensureStyles();
            var c = document.querySelector('.jk-toast-container');
            if (!c) {
                c = el('div', 'jk-toast-container');
                document.body.appendChild(c);
            }
            this._container = c;
            return c;
        },

        show: function(message, type, duration) {
            var container = this._ensureContainer();
            type = type || 'info';
            duration = duration == null ? 3000 : duration;

            var icons = { success: '✅', error: '❌', warning: '⚠️', info: 'ℹ️' };
            var toast = el('div', 'jk-toast jk-' + type);
            toast.appendChild(el('span', 'jk-toast-icon', icons[type] || icons.info));
            toast.appendChild(el('span', 'jk-toast-message', escapeHtml(message)));
            var close = el('button', 'jk-toast-close', '&times;');
            close.setAttribute('aria-label', 'Закрыть');
            toast.appendChild(close);

            container.appendChild(toast);
            requestAnimationFrame(function() {
                toast.classList.add('jk-visible');
            });

            var timer = null;
            function remove() {
                toast.classList.remove('jk-visible');
                setTimeout(function() {
                    if (toast.parentNode) toast.parentNode.removeChild(toast);
                }, 400);
                if (timer) clearTimeout(timer);
            }
            close.addEventListener('click', remove);
            if (duration > 0) {
                timer = setTimeout(remove, duration);
            }
            return { close: remove };
        },

        info: function(msg, d) { return this.show(msg, 'info', d); },
        success: function(msg, d) { return this.show(msg, 'success', d); },
        error: function(msg, d) { return this.show(msg, 'error', d); },
        warning: function(msg, d) { return this.show(msg, 'warning', d); }
    };

    global.JKModal = Modal;
    global.JKToast = Toast;

    // Auto-load styles on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', ensureStyles);
    } else {
        ensureStyles();
    }
})(window);
