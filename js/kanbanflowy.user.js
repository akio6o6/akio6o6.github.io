// ==UserScript==
// @name         kanbanflowy
// @namespace    http://akio6o6.github.io/portal.html
// @version      0.1
// @description  kanban for workflowy カンバン的なものを左側に表示。中身はHTMLで自由に書ける。
// @author       akio6o6
// @match        https://workflowy.com/*
// @grant        none
// ==/UserScript==

(function() {
	if (!document.createElement) return;
  var elemkan = document.createElement('div');
  elemkan.innerHTML = '<style>.kanban{min-height:50%;max-height:85%;width:200px;position:fixed;top:50px;left:4px;overflow-y:auto;padding:8px;background:white;border:1px solid #d6d6d6;font-family:sans-serif;opacity:0.2;transition:all 0.3s;}.kanban:hover{opacity:1;}@media (max-width: 1200px){.kanban{opacity:0;}}.kanbody{margin-bottom:16px;}.kanban a{color:#999;}.kanban h2{margin-bottom:4px;padding:0 0 4px;border-bottom:1px solid #eee;}.kanban hr{border:none;border-bottom:1px solid #eee;}.kanban ul{list-style:disc;padding-left:16px;}.kanban li{margin:4px 0;}</style><div class="kanban"><h2>shortcuts</h2><div class="kanbody"><ul><li><a href="https://workflowy.com/#">Home</a></li><li><a href="https://workflowy.com/#/?q=last-changed%3A6h">last-changed:6h</a></li><li><a href="https://workflowy.com/#/?q=last-changed%3A1d">last-changed:1d</a></li></ul></div><h2>external</h2><div class="kanbody"><ul><li><a href="http://akio6o6.github.io/calmeditor" target="_blank">calm editor</a></li><li><a href="https://www.noisli.com/" target="_blank">Noisli</a></li></ul></div></div>';
  document.getElementById('header').appendChild(elemkan);
})();
