"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[826],{7885:(e,t,n)=>{n(2077),n(1203),n(2410),n(3238),n(3352),n(5610),n(7460),n(5901),n(2189),n(1047),n(5769),n(4078);function r(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return u=e.done,e},e:function(e){c=!0,a=e},f:function(){try{u||null==n.return||n.return()}finally{if(c)throw a}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}window.onload=function(){var e={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return e.Android()||e.BlackBerry()||e.iOS()||e.Opera()||e.Windows()}};if(window.innerWidth<840){var t=document.querySelector(".menu-toggle");t.addEventListener("click",(function(e){e.preventDefault(),t.classList.toggle("menu-toggle--opened"),document.querySelector(".menu").classList.toggle("menu--visible")}))}function n(){if(window.innerWidth>840&&!e.any()){var t=document.querySelector(".menu"),n=t.offsetTop;window.addEventListener("scroll",(function(e){window.pageYOffset>=n+30?t.classList.add("fixed"):t.classList.remove("fixed")}))}}n(),window.addEventListener("resize",n);var o=document.querySelector(".donation__id-copy"),i=document.querySelector(".donation__id-copy-tooltip"),a=document.querySelector(".donation__id-val").textContent;function u(e){e.nextSibling.firstChild.textContent=e.value}o.addEventListener("click",(function(e){var t;e.preventDefault(),this.classList.add("copied"),t=a,void 0!==navigator.clipboard?navigator.clipboard.writeText(t):window.clipboardData&&window.clipboardData.setData("Text",t),i.textContent="Copied!"})),o.addEventListener("mouseout",(function(){var e=this;setTimeout((function(){e.classList.remove("copied"),i.textContent="Copy to clipboard"}),1e3)}));var c=document.querySelector("[name=border_size]"),d=document.querySelector("[name=border_radius]");u(c),u(d),c.addEventListener("input",(function(){return u(c)})),d.addEventListener("input",(function(){return u(d)})),document.querySelector("select[name=currency]").addEventListener("change",(function(){document.querySelector(".form-currency-val").textContent=this.value}));var l,s=document.querySelectorAll(".settings__tabs .tabs__lnk"),f=document.querySelectorAll(".settings__tabs-entry"),y=r(s);try{var v=function(){var e=l.value;e.addEventListener("click",(function(t){t.preventDefault(),document.querySelector(".tabs__entry--current").classList.remove("tabs__entry--current"),e.parentNode.classList.add("tabs__entry--current");var n,o=this.getAttribute("href"),i=r(f);try{for(i.s();!(n=i.n()).done;){n.value.style.display="none"}}catch(e){i.e(e)}finally{i.f()}document.querySelector(o).style.display="block"}))};for(y.s();!(l=y.n()).done;)v()}catch(e){y.e(e)}finally{y.f()}}}},e=>{e.O(0,[988],(()=>{return t=7885,e(e.s=t);var t}));e.O()}]);