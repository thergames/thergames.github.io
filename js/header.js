;(function (undefined) {
  "use strict";

  window.Pastels = window.Pastels || {};

  window.Pastels.Header = (function (el) {
    var defaults = {
      id: "header",
      hidden: "header--hidden",
      shown: "header--shown"
    };

    var el = null;

    return {
      hide: function (el) {
        el.classList.remove(defaults.shown);
        el.classList.add(defaults.hidden);
      },

      show: function (el) {
        el.classList.add(defaults.shown);
        el.classList.remove(defaults.hidden);
      },

      toggle: function (event) {
        el = document.getElementById(defaults.id);

        try {
          if(el.classList.contains(defaults.shown)) {
            window.Pastels.Header.hide(el);
          } else {
            if(el.classList.contains(defaults.hidden)) {
              window.Pastels.Header.show(el);
            }
          }

          event.preventDefault();
        } catch (error) {
          // Falls back to internal link to #footer.
        }
      } // /toggle()
    }; // /return;
  })(); // /window.Pastels.Header()

  var menuEl = document.getElementById("js-menu-toggle--mobile");
  menuEl.addEventListener("click", window.Pastels.Header.toggle);
})();
