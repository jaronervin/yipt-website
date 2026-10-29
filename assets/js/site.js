/* ==========================================================================
   YIPT site script
   v0.2.0 (2026-10-29): mobile menu toggle

   The only JavaScript on the site. Without it, the nav simply stays open
   on phones, so nothing breaks if this fails to load.
   (Each page's <head> adds the "js" class to <html> so the menu starts
   closed without a flash.)
   ========================================================================== */

(function () {
  var toggle = document.querySelector('.nav-toggle');
  if (!toggle) return;

  function setOpen(open) {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? 'Close' : 'Menu';
  }

  toggle.addEventListener('click', function () {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  // Escape closes the menu and returns focus to the button
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });
})();
