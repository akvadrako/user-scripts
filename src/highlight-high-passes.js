// ==UserScript==
// @name        Highlight high passes
// @namespace   https://doubly.so/user-scripts
// @match       https://www.n2yo.com/passes/amateur-radio.php*
// @grant       none
// @version     1.0
// @author      Devin Bayer <dev@doubly.so>
// @description 18/05/2025, 15.07.45
// @license MIT
// ==/UserScript==

//////////////////////////////////////////////////
// Common Shortcuts

n = (html) => { x = document.createElement('x'); x.innerHTML = html; return x.firstChild; }
$ = (q) => document.querySelector(q)
$$ = (q) => document.querySelectorAll(q)

//////////////////////////////////////////////////
// Explain

$('button').after(n('<b style="border: thin red solid;">Add ?me=50 to URL to set minimum elevation.</b>'))

//////////////////////////////////////////////////
// Highlight

for(let c of document.querySelectorAll("td:nth-child(8)")) {
  let h = parseInt(c.textContent) * 255 / 90;
  c.style.backgroundColor = `rgb(${h},${90-h},255)`;
}
