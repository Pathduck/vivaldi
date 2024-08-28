// ==UserScript==
// @name         Unobtrusive Scrollbar
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  A better scrollbar
// @author       You
// @match        *://*/*
// @grant        GM_addStyle
// @run-at       document-start
// @noframes
// ==/UserScript==

GM_addStyle(`
::-webkit-scrollbar{width:7px;height:7px}
::-webkit-scrollbar-track-piece,::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}
::-webkit-scrollbar-thumb{height:50px;background-color:#888;border-radius:5px;--outline:1px solid rgba(0,0,0,0);--outline-offset:-1px}
::-webkit-scrollbar-thumb:hover{background-color:#666}
`);

