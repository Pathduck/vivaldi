// ==UserScript==
// @name        Disable page close confirmation
// @description Disable page close confirmation (onBeforeUnload)
// @namespace   http://nags.must.die
// @version     2.0
// @grant       none
// @run-at      document-start
// @match       *://*/*
// ==/UserScript==

(function () {
  var spoofer = {
    enumerable: true,
    configurable: false,
    get: () => null,
    set: fn => fn,
  };
  Object.defineProperties(window, {
    onbeforeunload: spoofer,
    onunload: spoofer,
  });

  var originalAdd = EventTarget.prototype.addEventListener;
  EventTarget.prototype.addEventListener = function (type) {
    var tl;
    if (this !== window ||
        typeof type !== 'string' ||
        (tl = type.toLowerCase()) !== 'beforeunload' && tl !== 'unload') {
      originalAdd.apply(this, arguments);
    }
  };
})();
