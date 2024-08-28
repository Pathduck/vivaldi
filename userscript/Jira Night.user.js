// ==UserScript==
// @name        Jira Night
// @namespace   https://gist.github.com/luetage/e73c132e079fb3d62675de3f4a6c29e4
// @updateURL   https://gist.github.com/luetage/e73c132e079fb3d62675de3f4a6c29e4/raw
// @description Dark color scheme for Jira.
// @version     2022.9.0
// @author      luetage
// @match       https://bugs.vivaldi.com/*
// @exclude     https://bugs.vivaldi.com/secure/attachment/*
// @run-at      document-start
// ==/UserScript==

(function () {
  "use strict";
  const css = `
    html {
      filter: invert(86%) hue-rotate(180deg) brightness(105%) contrast(105%);
    }
    img, span[role="img"], svg, #cp-header {
      filter: invert(114%) hue-rotate(180deg) brightness(105%) contrast(105%);
    }
    #header>.aui-header.aui-dropdown2-trigger-group {
      --aui-button-primary-bg-color: hsl(168, 76%, 42%);
      --aui-button-primary-hover-bg-color: hsl(168, 76%, 37%);
      border-bottom: 1px solid hsla(229, 35%, 75%, 0.4);
    }
    #header>.aui-header.aui-dropdown2-trigger-group .aui-nav>li>a {
      --aui-appheader-item-focus-bg-color: hsl(168, 76%, 42%);
      --aui-appheader-item-active-bg-color: hsl(168, 76%, 42%);
    }
    .aui-dropdown2 .aui-dropdown2-checkbox:not(.aui-dropdown2-disabled):hover,
    .aui-dropdown2 .aui-dropdown2-radio:not(.aui-dropdown2-disabled):hover,
    .aui-dropdown2 a:not(.aui-dropdown2-disabled):hover,
    .aui-dropdown2 button:not(.aui-dropdown2-disabled):hover,
    form#issue-filter .check-list-item.active,
    form.aui .check-list-item.active,
    .check-list-item.active,
    .check-list-group-footer.active
    .aui-list a.active,
    .aui-list .aui-list-item.active>a {
      background: hsl(168, 76%, 42%) !important;
      color: hsl(229, 35%, 100%) !important;
    }
    .aui-header .aui-quicksearch input,
    .aui-header .aui-quicksearch input:focus,
    .aui-header .aui-quicksearch:focus-within:before {
      background: hsla(229, 35%, 75%, 0.5);
      color: hsl(235, 19%, 26%);
    }
    #header>.aui-header.aui-dropdown2-trigger-group .aui-dropdown2-in-header,
    .aui-dropdown2.aui-layer,
    .aui-dropdown-content {
      border: 1px solid hsla(235, 19%, 13%, 0.3);
    }
  `;
  function _async() {
    return new Promise((resolve) => {
      requestAnimationFrame(resolve);
    });
  }
  async function _wait() {
    while (!document.body) {
      await _async();
    }
    return true;
  }
  function inject() {
    _wait().then(() => {
      const style = document.createElement("style");
      style.id = "usrjs-jira-night";
      style.innerHTML = css;
      document.getElementsByTagName("head")[0].appendChild(style);
    });
  }
  inject();
})();