var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},t=e.parcelRequire7bc7;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){r[e]=o},e.parcelRequire7bc7=t);var n=t("iQIUW");function i(e,o){return new Promise(((r,t)=>{const n=Math.random()>.3;setTimeout((()=>{n?r({position:e,delay:o}):t({position:e,delay:o})}),o)}))}({form:document.querySelector("form")}).form.addEventListener("submit",(e=>{e.preventDefault();let o=Number(e.currentTarget.delay.value);const r=Number(e.currentTarget.step.value),t=Number(e.currentTarget.amount.value);for(let e=1;e<=t;e+=1)i(e,o).then((({position:e,delay:o})=>{n.Notify.success(`Fulfilled promise ${e} in ${o}ms`),console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{n.Notify.failure(`Rejected promise ${e} in ${o}ms`),console.log(`❌ Rejected promise ${e} in ${o}ms`)})),o+=r}));
//# sourceMappingURL=03-promises.6ca74f15.js.map