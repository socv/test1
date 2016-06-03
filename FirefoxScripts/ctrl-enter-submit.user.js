// ==UserScript==
// @name        ctrl-enter submit
// @namespace   https://github.com/socv/test1
// @version     0.20160603.1
// @grant       none
// ==/UserScript==
// allow pasting
document.onkeydown = function (e) {
  if (e.ctrlKey && e.keyCode == 13) {
    for (e = document.activeElement; e; e = e.parentElement) {
      if (e.tagName == 'FORM') {
        var inputs = e.getElementsByTagName('input');
        for(var i = 0; i < inputs.length; ++i) {
          var s = inputs[i];
          if(s.type == 'submit') {
            s.click();
            return;
          }
        }
        alert("submit not found");
        return;
      }
    }
    alert("form not found");
  }
}

// Firefox のユーザースクリプト管理アドオン "Greasemonkey" https://addons.mozilla.org/ja/firefox/addon/greasemonkey/
// 経由で使うユーザースクリプト。
// Ctrl-Enter を押すと、カーソルがあるアクティブな要素を抱えるフォームのsubmitが押されたことになる。
