!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(t){return t&&t.__esModule?t.default:t}var e={},o={},r=t.parcelRequired7c6;null==r&&((r=function(t){if(t in e)return e[t].exports;if(t in o){var n=o[t];delete o[t];var r={id:t,exports:{}};return e[t]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,n){o[t]=n},t.parcelRequired7c6=r),r.register("l5bVx",(function(t,n){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t}}));var i=r("h6c0i");r("h6c0i");var c={},a=r("l5bVx"),u=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,s=/^0o[0-7]+$/i,p=parseInt,d="object"==typeof t&&t&&t.Object===Object&&t,v="object"==typeof self&&self&&self.Object===Object&&self,m=d||v||Function("return this")(),y=Object.prototype.toString,g=Math.max,h=Math.min,b=function(){return m.Date.now()};function x(t){var e=void 0===t?"undefined":n(a)(t);return!!t&&("object"==e||"function"==e)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":n(a)(t))||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==y.call(t)}(t))return NaN;if(x(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=x(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(u,"");var o=l.test(t);return o||s.test(t)?p(t.slice(2),o?2:8):f.test(t)?NaN:+t}c=function(t,n,e){var o,r,i,c,a,u,f=0,l=!1,s=!1,p=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function d(n){var e=o,i=r;return o=r=void 0,f=n,c=t.apply(i,e)}function v(t){return f=t,a=setTimeout(y,n),l?d(t):c}function m(t){var e=t-u;return void 0===u||e>=n||e<0||s&&t-f>=i}function y(){var t=b();if(m(t))return w(t);a=setTimeout(y,function(t){var e=n-(t-u);return s?h(e,i-(t-f)):e}(t))}function w(t){return a=void 0,p&&o?d(t):(o=r=void 0,c)}function E(){var t=b(),e=m(t);if(o=arguments,r=this,u=t,e){if(void 0===a)return v(u);if(s)return a=setTimeout(y,n),d(u)}return void 0===a&&(a=setTimeout(y,n)),c}return n=j(n)||0,x(e)&&(l=!!e.leading,i=(s="maxWait"in e)?g(j(e.maxWait)||0,n):i,p="trailing"in e?!!e.trailing:p),E.cancel=function(){void 0!==a&&clearTimeout(a),f=0,o=u=r=a=void 0},E.flush=function(){return void 0===a?c:w(b())},E};var w={inputEl:document.getElementById("search-box"),containerEl:document.querySelector(".country-list")};function E(t){var n;t.length>10?i.Notify.info("Too many matches found. Please enter a more specific name."):t.length>=2&&t.length<=10?(n=t.map((function(t){var n=t.flags,e=t.name;return'<li class="country-item">\n\t\t\t\t<img src="'.concat(n.svg,'" width="50px">\n\t\t\t\t<p class="country-text">').concat(e.common,"</p>\n\t\t\t\t</li>")})).join(""),w.containerEl.insertAdjacentHTML("beforeend",n)):1===t.length&&function(t){var n=t.map((function(t){var n=t.flags,e=t.name,o=t.capital,r=t.population,i=t.languages;return'<li>\n\t\t\t\t<img src="'.concat(n.svg,'" width="200px">\n\t\t\t\t<p class="country-text">').concat(e.common,'</p>\n\t\t\t\t<p class="country-text">Capital: ').concat(o,'</p>\n\t\t\t\t<p class="country-text">Population: ').concat(r,'</p>\n\t\t\t\t<p class="country-text">Languages: ').concat(Object.values(i).join(", "),".</p>\n\t\t\t\t</li>")})).join("");w.containerEl.insertAdjacentHTML("beforeend",n)}(t)}w.inputEl.addEventListener("input",c((function(t){w.inputEl.innerHTML="",w.containerEl.innerHTML="";var n=t.target.value.trim();""!=n&&(e=n,fetch("https://restcountries.com/v3.1/name/".concat(e,"?fields=name,capital,population,flags,languages")).then((function(t){if(!t.ok)throw new Error(t.status);return t.json()})).catch((function(t){return console.log("error",t)}))).then(E).catch((function(t){return i.Notify.failure("Oops, there is no country with that name")}));var e}),300))}();
//# sourceMappingURL=01-countries.d94b51dc.js.map
