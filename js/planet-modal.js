// Modal logic for planet details on hover
(function() {
  // Create modal element
  var modal = document.createElement('div');
  modal.className = 'planet-modal';
  document.body.appendChild(modal);

  // Expose globally for control.js
  window._planetModal = {
    show: function(html, x, y) {
      modal.innerHTML = html;
      modal.style.left = (x + 18) + 'px';
      modal.style.top = (y + 18) + 'px';
      modal.classList.add('visible');
    },
    hide: function() {
      modal.classList.remove('visible');
    }
  };
})();
