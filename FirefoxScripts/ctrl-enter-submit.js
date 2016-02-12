// ==UserScript==
// @name        ctrl-enter submit
// @namespace   socv
// @version     1
// @grant       none
// ==/UserScript==
document.onkeydown = function (e) {
  if (e.ctrlKey && e.keyCode == 13) {
    for (e = document.activeElement; e; e = e.parentElement) {
      if (e.tagName == 'FORM') {
        if (typeof (e.submit) == 'function') e.submit();
        else e.submit.click();
        break;
      }
    }
  }
}
// Firefox のユーザースクリプト管理アドオン "Greasemonkey" https://addons.mozilla.org/ja/firefox/addon/greasemonkey/
// 経由で使うユーザースクリプト。
// Ctrl-Enter を押すと、カーソルがあるアクティブな要素を抱えるフォームのsubmitが押されたことになる。
