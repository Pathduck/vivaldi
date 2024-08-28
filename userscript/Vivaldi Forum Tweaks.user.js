// ==UserScript==
// @name         Vivaldi Forum Tweaks
// @namespace    https://greasyfork.org/en/users/197428-pathduck
// @license      MIT
// @version      1.9
// @description  CSS tweaks for Vivaldi Forums
// @author       Pathduck
// @supportURL   https://greasyfork.org/en/scripts/457399-vivaldi-forum-tweaks
// @match        https://forum.vivaldi.net/*
// @exclude      https://forum.vivaldi.net/assets/*
// @icon         https://icons.duckduckgo.com/ip2/vivaldi.net.ico
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

GM_addStyle(`
@media (min-width: 960px) {body {padding-top: 60px;}}
hr {margin: 5px;}
pre code {padding: 5px !important;}
#communitysubmenu { padding: 0 0 0; min-height: 24px;}
#content .breadcrumb {padding-top: 0; margin-bottom: 0;}
#content .posts p {margin-top: 0; margin-bottom: .5rem;}
#content .posts>li {padding-top: 5px;}
#content.pt-3 {margin-top: 0; padding-top: 0 !important;}
#logged-in-menu {margin-top: 3px;}
#menucontent>.row { padding: 5px 12px; height: 35px;}
#search-button {display: none;}
#search-form #search-fields.hidden {max-width: unset; width: 350px;}
#search-form .btn-outline-secondary {border: none;}
#search-fields, #search-form {margin-top: 0px;}
#vivaldi-header .sublinks a {padding: 0 10px;}
#vivaldi-header { height: 40px;}
#vivaldinav li, #vivaldinav ul {margin-top: 0; margin-bottom: 0;}
.account .profile .profile-meta {font-size: 15px; margin-top: 10px;}
.button:focus, .form-control:focus, .dropdown-toggle:focus, .btn:focus-visible {outline: solid !important;}
.categories .description {padding: 0;}
.categories h2.title {margin-bottom: 0;}
.categories>li .content, .category>ul>li .content {padding: 0;}
.categories>li, .category>ul>li {padding-bottom: 5px;}
.chat-content .message-body p {line-height: initial !important;}
.chat-modal .modal-content.ui-resizable {width: 50vw; height: 80vh; right: 75%;}
.float-end.small,small.float-end {padding-bottom: 0;padding-top: 0;}
.header .chat-list .main-avatar {margin-top: 0;}
.header .chat-list>li {height: 80px;}
.header .chats.dropdown .dropdown-menu {width: 500px !important;}
.header .notification-list li { display: flex !important; padding: 5px 5px;}
.header .notification-list, .header .chat-list {max-height: 85vh;}
.navbar-vivaldi {min-height: unset; padding: 0; height: 35px;}
.topic .content {min-height: 45px;}
.topic .post-footer hr {margin: revert;}
.topic .post-signature {margin-top: 5px;}
.topic .post-tools>a, .topic .moderator-tools>a {padding: 0 10px;}
.topic .posts .content .img-fluid {max-width: 50vw; max-height: 40vh;}
.topic .posts .content blockquote {font-style: unset; font-size: 14px; margin: 5px; padding: 10px;}
.topic .posts .content pre.markdown-highlight {max-height: unset;}
.topic .topic-info>* {padding-top: 0;}
.topic [component="post/downvote"], .topic [component="post/upvote"], .topic [component="post/vote-count"] {padding: 5px 0.5rem;}
.topic h1 {line-height: 25px;}
.topic h1>span {margin-top: 0 !important;}
.topic-list-header {padding: 5px !important;}
.topic-list-header.sticky-top {top: unset !important;}
.vivaldi-nav-link {line-height: 33px;}

/* Dark skin fixes */
.skin-dark blockquote {background-color: #333; border-left: 5px solid #4c70f0;}
.skin-dark .btn-group button, .skin-dark .btn-primary, .topic-main-buttons button {background: linear-gradient(0deg,#2a3f87 0,#4c70f0 100%);}
.skin-dark .category>ul>li:not(.unread) .lastpost {border-color: #26282f !important;}
.skin-dark .category>ul>li .lastpost {border-color: #bbb !important;}
.skin-dark .category>ul>li {border-top: unset;}
.skin-dark code, .skin-dark pre {color: white; background-color: #333;}
.skin-dark .alert-warning {background-color: darkred;}
.skin-dark .alert-window .alert {background-color: #333;}
.skin-dark .alert-window .alert.alert-info {color: limegreen;}
.skin-dark .composer .preview a {color: #809cff !important}
.skin-dark .label-success {background-color: green;}
.skin-dark .navbar-vivaldi {background: linear-gradient(0deg,#2a3f87 0,#4c70f0 100%);}
.skin-dark .pagination>.active>a {background-color: #3652b0;}
.skin-dark .persona-usercard {background-color: black;}
.skin-dark .post-header a.text-uppercase.badge {color: white !important;}
.skin-dark .search .bootstrap-tagsinput input {border: 0; color: white; background-color: #272727;}
.skin-dark .search .bootstrap-tagsinput,
.skin-dark .status.offline {color: #333;}
.skin-dark .status.online {color: forestgreen;}
.skin-dark .text-muted {color: #BBB !important;}
.skin-dark .textcomplete-dropdown .textcomplete-item.active,
.skin-dark .textcomplete-dropdown .textcomplete-item:hover {outline: solid;}
.skin-dark .textcomplete-dropdown {color: white !important; background-color: #333;}
.skin-dark .tooltip {--bs-tooltip-color: lightgray;}
.skin-dark .topic .posts .dropdown-menu a {color: white !important}
.skin-dark .topic .posts a {color: #809cff !important;}
.skin-dark .userinfo button.btn {background: unset;}
.skin-dark .userinfo .nav-item:hover {background-color: #303030 !important;}

/* External link warning */
a[rel^="nofollow"]::after {content:"⚠️";}
a[href*="vivaldi." i]::after {content: unset !important;}
`);
