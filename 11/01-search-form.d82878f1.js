function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("iQIUW"),s=r("fZKcF");r("iQIUW");let a=new(e(s))(".simple_light_box-js");const l={inputEl:document.querySelector("input"),formEl:document.querySelector(".search-form"),containerEl:document.querySelector(".gallery"),loadMoreButton:document.querySelector(".load-more")},c=new class{async fetchPictures(){const e=`https://pixabay.com/api/?key=17779447-e69189bbb9578e7ff1877c42f&per_page=40&image_type=photo&lang=en,ru&orientation=horizontal&safesearch=true&page=${this.page}&q=${this.searchQuery}`;return await fetch(e).then((e=>e.json())).then((e=>(this.incrementPage(),e)))}incrementPage(){this.page+=1}resetPage(){this.page=1}get query(){return this.searchQuery}set query(e){this.searchQuery=e}constructor(){this.searchQuery="",this.page=1}};function d(e){const t=e.hits.map((({user:e,webformatURL:t,largeImageURL:n,tags:o,likes:r,downloads:i})=>`<div class="photo-card">\n      <div class="info">\n\t\t\t<p class="info-item">\n          <b>${e}</b>\n        </p>\n        <p class="info-item">\n          ❤ ${r}</p>\n        </p>\n        <p class="info-item">\n          ⬇ ${i}\n        </p>\n\t\t\t\t<a href="${n}" target=”_blank”>Download</a>\n\t\t\t\t</div>\n      <a class="simple_light_box-js" href="${n}"><img src="${t}" alt="${o}" loading="lazy"/></a>\n\n    </div>\n    `)).join("");l.containerEl.insertAdjacentHTML("beforeend",t)}function u(){l.containerEl.innerHTML="",l.inputEl.value=""}c.fetchPictures().then((e=>{d(e),a.refresh()})),l.formEl.addEventListener("submit",(function(e){e.preventDefault(),c.query=e.currentTarget.elements.searchQuery.value,c.resetPage(),c.fetchPictures().then((e=>{if(0===e.total)return i.Notify.failure("Sorry, there are no images matching your search query. Please try again."),l.loadMoreButton.classList.add("is-hidden"),void u();l.loadMoreButton.classList.remove("is-hidden"),u(),d(e),a.refresh(),e.total<40&&l.loadMoreButton.classList.add("is-hidden"),i.Notify.info(`Hooray! We found ${e.totalHits} images.`)}))})),l.loadMoreButton.addEventListener("click",(function(){c.fetchPictures().then((e=>(e.hits.length<40&&(i.Notify.info("We're sorry, but you've reached the end of search results."),l.loadMoreButton.classList.add("is-hidden")),e))).then(d),a.refresh()}));let f=document.getElementById("myBtn");window.onscroll=()=>{document.body.scrollTop>1e3||document.documentElement.scrollTop>1e3?f.style.display="block":f.style.display="none"},f.addEventListener("click",(function(){document.body.scrollTop=0,document.documentElement.scrollTop=0}));
//# sourceMappingURL=01-search-form.d82878f1.js.map