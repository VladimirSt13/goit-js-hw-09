!function(){var t=null,n={body:document.querySelector("body"),startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")};n.startBtn.addEventListener("click",(function(){t=setInterval((function(){n.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),n.startBtn.disabled=!0,n.stopBtn.disabled=!1})),n.stopBtn.addEventListener("click",(function(){clearInterval(t),n.startBtn.disabled=!1,n.stopBtn.disabled=!0})),n.stopBtn.disabled=!0}();
//# sourceMappingURL=01-color-switcher.177e6f31.js.map
