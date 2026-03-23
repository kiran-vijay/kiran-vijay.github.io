/* ============================================================
   Portfolio Upgrade JS — Kiran Vijay
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

    /* ---- AOS (Animate On Scroll) ---- */
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 600,
            easing: 'ease-out-cubic',
            once: true,
            offset: 60
        });
    }

    /* ---- Typed.js hero tagline ---- */
    var typedEl = document.getElementById('typed-tagline');
    if (typedEl && typeof Typed !== 'undefined') {
        new Typed('#typed-tagline', {
            strings: [
                'Vice President — Finance Transformation',
                'Power BI Expert &amp; Dashboard Architect',
                'Automation &amp; Process Efficiency Leader',
                'Data Storyteller'
            ],
            typeSpeed: 45,
            backSpeed: 25,
            backDelay: 2200,
            loop: true,
            smartBackspace: true
        });
    }

    /* ---- Skill bar animation on scroll ---- */
    var skillBars = document.querySelectorAll('.skill-bar-fill');
    if (skillBars.length > 0 && 'IntersectionObserver' in window) {
        var barObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    var el = entry.target;
                    el.style.width = el.dataset.width || '80%';
                    barObserver.unobserve(el);
                }
            });
        }, { threshold: 0.3 });

        skillBars.forEach(function (bar) {
            barObserver.observe(bar);
        });
    }

    /* ---- Counter animation for stats ---- */
    var counters = document.querySelectorAll('.stat-count');
    if (counters.length > 0 && 'IntersectionObserver' in window) {
        var countObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    animateCount(entry.target);
                    countObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(function (counter) {
            countObserver.observe(counter);
        });
    }

    function animateCount(el) {
        var target = parseInt(el.dataset.target, 10);
        var suffix = el.dataset.suffix || '';
        var duration = 1600;
        var start = 0;
        var startTime = null;

        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            var progress = Math.min((timestamp - startTime) / duration, 1);
            var eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.floor(eased * target) + suffix;
            if (progress < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
    }

});
