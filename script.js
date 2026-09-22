(function () {
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      var open = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  var tabs = document.querySelectorAll('.tab');
  var figs = document.querySelectorAll('#galleryGrid figure');
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (t) { t.setAttribute('aria-selected', 'false'); });
      tab.setAttribute('aria-selected', 'true');
      var f = tab.getAttribute('data-filter');
      figs.forEach(function (fig) {
        fig.hidden = !(f === 'all' || fig.getAttribute('data-cat') === f);
      });
    });
  });

  var form = document.getElementById('bookForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('f-name').value.trim();
      var phone = document.getElementById('f-phone').value.trim();
      var checkin = document.getElementById('f-checkin').value;
      var checkout = document.getElementById('f-checkout').value;
      var msg = document.getElementById('f-msg').value.trim();
      var lines = [
        'Bonjour, je souhaite réserver un séjour à Steph Residence Luxury.',
        'Nom : ' + name,
        'Téléphone : ' + phone
      ];
      if (checkin) lines.push('Arrivée : ' + checkin);
      if (checkout) lines.push('Départ : ' + checkout);
      if (msg) lines.push('Message : ' + msg);
      var text = encodeURIComponent(lines.join('\n'));
      window.open('https://wa.me/33624959089?text=' + text, '_blank', 'noopener');
    });
  }
})();
