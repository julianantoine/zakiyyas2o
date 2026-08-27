/* Zakiyyas2.0 — nav toggle + form submit */
(function () {
  // Nav toggle
  var header = document.querySelector('.site-header');
  var navToggle = document.querySelector('.nav-toggle');
  var primaryNav = document.querySelector('.primary-nav');
  if (navToggle && primaryNav) {
    navToggle.addEventListener('click', function () {
      var open = header.classList.toggle('nav-open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.site-header')) header.classList.remove('nav-open');
    });
  }

  // Form submit (FormSubmit.co — do NOT preventDefault on valid submit)
  var forms = document.querySelectorAll('.contact-form');
  for (var i = 0; i < forms.length; i++) {
    forms[i].addEventListener('submit', function (e) {
      if (!this.checkValidity()) {
        this.reportValidity();
        e.preventDefault();
        return;
      }
      var btn = this.querySelector('button[type="submit"]');
      if (btn) setTimeout(function () { btn.disabled = true; }, 0);
    });
  }
})();
