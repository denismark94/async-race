(()=>{"use strict";var e={219:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,"button {\r\n    background-color: lightgreen;\r\n    border: 1px solid black;\r\n    border-radius: 3px;\r\n    height: 25px;\r\n    margin: 3px;\r\n}\r\n\r\nbutton:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.generate_button {\r\n    background-color: lightblue;\r\n}\r\n\r\n.update_wrapper {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n.create_wrapper {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.control_panel_wrapper input {\r\n    height: 20px;\r\n    margin: 3px;\r\n}\r\n\r\n.control_panel_wrapper input[type=color] {\r\n    height: 25px;\r\n    cursor: pointer;\r\n}",""]);const o=a},605:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,".track_wrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.car_wrapper {\r\n    width: 100%;\r\n    border-top: 2px dashed white;\r\n    border-bottom: 2px dashed white;\r\n}\r\n\r\n.car_wrapper span {\r\n    color: #ffffff ;\r\n}\r\n\r\n.car_wrapper button {\r\n    margin: 5px;\r\n}\r\n.line_wrapper {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n}\r\n\r\nsvg {\r\n    position: relative;\r\n}\r\n\r\n.moving {\r\n    animation-name: drive;\r\n    animation-duration: 1s;\r\n}\r\n\r\n@keyframes drive {\r\n    0% {\r\n        left: 0;\r\n    }\r\n\r\n    100% {\r\n        left: calc(100% - 120px);\r\n    }\r\n}\r\n\r\n.pagination_buttons_wrapper {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin: 10px;\r\n}\r\n",""]);const o=a},281:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,"nav {\r\n    margin: 5px 0 5px auto;\r\n}\r\n",""]);const o=a},236:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,".winners_table th {\r\n    background-color: lightblue;\r\n    font-weight: normal;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    padding: 20px;\r\n}\r\n\r\n.winners_table td {\r\n    color: white;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}",""]);const o=a},767:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,"body {\r\n    background-color: #505050;\r\n}\r\n\r\n.disabled {\r\n    display: none;\r\n}\r\n\r\n\r\nh2, h3  {\r\n    color: white;\r\n}",""]);const o=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var s=this[o][0];null!=s&&(a[s]=!0)}for(var c=0;c<e.length;c++){var i=[].concat(e[c]);r&&a[i[0]]||(n&&(i[2]?i[2]="".concat(n," and ").concat(i[2]):i[2]=n),t.push(i))}},t}},103:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var r=n(379),a=n.n(r),o=n(219);a()(o.Z,{insert:"head",singleton:!1});const s=o.Z.locals||{}},228:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var r=n(379),a=n.n(r),o=n(605);a()(o.Z,{insert:"head",singleton:!1});const s=o.Z.locals||{}},42:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var r=n(379),a=n.n(r),o=n(281);a()(o.Z,{insert:"head",singleton:!1});const s=o.Z.locals||{}},12:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var r=n(379),a=n.n(r),o=n(236);a()(o.Z,{insert:"head",singleton:!1});const s=o.Z.locals||{}},427:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var r=n(379),a=n.n(r),o=n(767);a()(o.Z,{insert:"head",singleton:!1});const s=o.Z.locals||{}},379:(e,t,n)=>{var r,a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function s(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],a=0;a<e.length;a++){var c=e[a],i=t.base?c[0]+t.base:c[0],l=n[i]||0,d="".concat(i," ").concat(l);n[i]=l+1;var u=s(d),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(o[u].references++,o[u].updater(p)):o.push({identifier:d,updater:f(p,t),references:1}),r.push(d)}return r}function i(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var s=a(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function u(e,t,n,r){var a=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,a);else{var o=document.createTextNode(a),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function p(e,t,n){var r=n.css,a=n.media,o=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,h=0;function f(e,t){var n,r,a;if(t.singleton){var o=h++;n=m||(m=i(t)),r=u.bind(null,n,o,!1),a=u.bind(null,n,o,!0)}else n=i(t),r=p.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var a=s(n[r]);o[a].references--}for(var i=c(e,t),l=0;l<n.length;l++){var d=s(n[l]);0===o[d].references&&(o[d].updater(),o.splice(d,1))}n=i}}}},871:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{constructor(){this.baseURL="http://localhost:3000",this.cars=[],this.winners=[]}getCars(e){fetch(`${this.baseURL}/garage`).then((e=>e.json())).then((t=>{this.cars=[];for(const e of t)this.cars.push(e);e(this.cars)})).catch((e=>console.error(e)))}getWinners(e){this.winners=[],fetch(`${this.baseURL}/winners`).then((e=>e.json())).then((t=>{const n=[],r=new Map;for(const e of t){const t=e.id;n.push(fetch(`${this.baseURL}/garage/${t}`).then((e=>e.json()))),r.set(t,e)}Promise.all(n).then((t=>{for(const e of t)this.winners.push(Object.assign(Object.assign({},e),r.get(e.id)));e(this.winners)})).catch((e=>console.error(e)))})).catch((e=>console.error(e)))}addCar(e){return fetch(`${this.baseURL}/garage`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}updateCar(e){return fetch(`${this.baseURL}/garage/${e.id}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}deleteCar(e){return fetch(`${this.baseURL}/garage/${e}`,{method:"DELETE"})}getCar(e){fetch(`${this.baseURL}/garage/${e}`).then((e=>e.json())).then((e=>(console.log(e),e))).catch((e=>{console.log(e)}))}}},629:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=r(n(541)),o=r(n(871));t.default=class{constructor(){this.view=new a.default,this.controller=new o.default}start(){this.controller.getWinners((e=>this.view.winners.fillTable(e))),this.controller.getCars((e=>this.view.track.drawCars(e,(e=>this.assignCarListeners(e))))),this.addListeners()}addListeners(){document.querySelector(".garage").addEventListener("click",(()=>{this.view.state="garage"})),document.querySelector(".winners").addEventListener("click",(()=>{this.view.state="winners"})),document.querySelector(".create_button").addEventListener("click",(()=>{const e={name:document.querySelector(".create_name_input").value,color:document.querySelector(".create_color_input").value,id:this.view.track.amount+1};this.controller.addCar(e).then((()=>{this.controller.getCars((e=>this.view.track.drawCars(e,(e=>this.assignCarListeners(e))))),this.view.controlPanel.clearFields("create")})).catch((e=>console.error(e)))})),document.querySelector(".update_button").addEventListener("click",(()=>{const e={name:document.querySelector(".update_name_input").value,color:document.querySelector(".update_color_input").value,id:this.view.track.selectedID};this.controller.updateCar(e).then((()=>{this.controller.getCars((e=>this.view.track.drawCars(e,(e=>this.assignCarListeners(e))))),this.view.controlPanel.clearFields("update"),this.view.controlPanel.disableUpdateFields()})).catch((e=>console.error(e)))})),document.querySelector(".generate_button").addEventListener("click",(()=>{const e=["BMW","Audi","Mersedes","Lada","VolksWagen","Jeep","Toyota","Ford"],t=["X6","X7","SLK","Wrangler","2106","Vantage","Q7","Mark II","F150"];let n=this.view.track.amount+1;const r=[];for(let a=0;a<2;a+=1){const a=`#${Math.floor(16777215*Math.random()).toString(16)}`,o={name:`${e[Math.floor(Math.random()*e.length)]} ${t[Math.floor(Math.random()*t.length)]}`,color:a,id:n+=1};r.push(this.controller.addCar(o))}Promise.all(r).then((()=>{this.controller.getCars((e=>this.view.track.drawCars(e,(e=>this.assignCarListeners(e)))))})).catch((e=>console.error(e)))})),document.querySelectorAll(".car_wrapper").forEach((e=>{this.assignCarListeners(e)})),document.querySelector(".next_btn").addEventListener("click",(()=>{this.view.track.page+=1})),document.querySelector(".prev_btn").addEventListener("click",(()=>{this.view.track.page-=1}))}assignCarListeners(e){e.querySelector(".remove_btn").addEventListener("click",(()=>{this.controller.deleteCar(Number(e.id)).then((()=>{this.controller.getCars((e=>this.view.track.drawCars(e,(e=>this.assignCarListeners(e)))))})).catch((e=>console.error(e)))})),e.querySelector(".select_btn").addEventListener("click",(()=>{const t=e.querySelector("span").textContent,n=e.querySelector(".paintable").getAttribute("fill");this.view.track.selectedID=Number(e.id),this.view.controlPanel.enableUpdateFields(),document.querySelector(".update_color_input").value=n,document.querySelector(".update_name_input").value=t}))}}},756:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),n(103),t.default=class{constructor(){const e=document.getElementById("app"),t=document.createElement("div");t.className="control_panel_wrapper";const n=document.createElement("div");n.className="create_wrapper";const r=document.createElement("input");r.className="create_name_input";const a=document.createElement("input");a.type="color",a.value="#FFFFFF",a.className="create_color_input";const o=document.createElement("button");o.textContent="CREATE",o.className="create_button",n.append(r,a,o),t.append(n);const s=document.createElement("div");s.className="update_wrapper";const c=document.createElement("input");c.className="update_name_input";const i=document.createElement("input");i.type="color",i.value="#FFFFFF",i.className="update_color_input";const l=document.createElement("button");l.textContent="UPDATE",l.className="update_button",s.append(c,i,l),t.append(s);const d=document.createElement("button"),u=document.createElement("button"),p=document.createElement("button");d.textContent="RACE",d.className="race",u.textContent="RESET",u.className="reset",p.textContent="GENERATE CARS",p.className="generate_button",t.append(d),t.append(u),t.append(p),null==e||e.append(t),this.disableUpdateFields()}clearFields(e){document.querySelector(`.${e}_name_input`).value="",document.querySelector(`.${e}_color_input`).value="#ffffff"}enableUpdateFields(){document.querySelector(".update_name_input").disabled=!1,document.querySelector(".update_color_input").disabled=!1,document.querySelector(".update_button").disabled=!1}disableUpdateFields(){document.querySelector(".update_name_input").disabled=!0,document.querySelector(".update_color_input").disabled=!0,document.querySelector(".update_button").disabled=!0}}},349:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),n(228),t.default=class{constructor(){const e=document.getElementById("app"),t=document.createElement("div");t.className="garage_wrapper";const n=document.createElement("h2");n.textContent="Garage (num)";const r=document.createElement("h3");r.textContent="Page #num";const a=document.createElement("div");a.className="track_wrapper";const o=document.createElement("div");o.className="pagination_buttons_wrapper";const s=document.createElement("button");s.className="prev_btn",s.textContent="PREV";const c=document.createElement("button");c.className="next_btn",c.textContent="NEXT",o.append(s),o.append(c),t.append(n),t.append(r),t.append(a),t.append(o),e.append(t),this.amountOfCars=0,this.amountOfPages=0,this.garage=[],this.currentPage=0,this.selectedID=-1}drawCars(e,t){this.garage=e,this.amount=e.length;const n=document.querySelector(".track_wrapper");for(n.innerHTML="",e.forEach((e=>{const r=this.generateCar(e);t(r),n.append(r)}));7*this.currentPage>=this.amount;)this.page-=1;this.showCurrentPage()}showCurrentPage(){document.querySelector(".track_wrapper").querySelectorAll(".car_wrapper").forEach((e=>e.classList.add("disabled")));for(let e=7*this.currentPage;e<Math.min(7*(this.currentPage+1),this.garage.length);e+=1)document.getElementById(`${this.garage[e].id}`).classList.remove("disabled");document.querySelector("h3").textContent=`Page #${this.currentPage+1}`}set page(e){7*e>=this.amount||e<0||(this.currentPage=e,this.showCurrentPage())}get page(){return this.currentPage}generateCar(e){const t=document.createElement("div");t.id=e.id.toString(),t.className="car_wrapper";const n=document.createElement("div");n.className="line-controls";const r=document.createElement("button");r.textContent="SELECT",r.className="select_btn";const a=document.createElement("button");a.textContent="REMOVE",a.className="remove_btn";const o=document.createElement("span");o.textContent=e.name,n.append(r),n.append(a),n.append(o);const s=document.createElement("div");s.className="engine_control_wrapper";const c=document.createElement("button");c.textContent="START",c.className="start_btn";const i=document.createElement("button");i.textContent="RESET",s.append(c),s.append(i);const l=document.createElement("div");l.className="line_wrapper";const d=document.getElementById("car_svg").content.cloneNode(!0);this.paint(d,e.color);const u=document.getElementById("finish").content.cloneNode(!0);return l.append(d),l.append(u),t.append(n),t.append(l),t.append(s),t}drawCar(e,t){const n=document.querySelector(".track_wrapper"),r=this.generateCar(e);t(r),n.appendChild(r),this.amount+=1}removeCar(e){document.querySelector(".track_wrapper").removeChild(document.getElementById(`${e}`)),this.amount-=1}updateCar(e,t){var n;const r=this.generateCar(e);t(r),null===(n=document.getElementById(`${e.id}`))||void 0===n||n.replaceWith(r)}paint(e,t){e.querySelectorAll(".paintable").forEach((e=>e.setAttribute("fill",t)))}set amount(e){this.amountOfCars=e,document.querySelector("h2").textContent=`Garage (${e})`}get amount(){return this.amountOfCars}}},494:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),n(42),t.default=class{constructor(){const e=document.getElementById("app"),t=document.createElement("nav");t.className="navigation";const n=document.createElement("button"),r=document.createElement("button");n.textContent="TO GARAGE",n.className="garage",r.textContent="TO WINNERS",r.className="winners",t.append(n),t.append(r),null==e||e.append(t)}}},781:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),n(12),t.default=class{constructor(){const e=document.getElementById("app"),t=document.createElement("div");t.className="winners_wrapper";const n=document.createElement("h2");n.textContent="Winners (num)";const r=document.createElement("h3");r.textContent="Page #num",t.append(n),t.append(r),t.append(this.createTable()),e.append(t)}createTable(){const e=document.createElement("table"),t=e.createTHead();return["Number","Car","Name","Wins","Best time (seconds)"].forEach((e=>{const n=document.createElement("th");n.textContent=e,t.appendChild(n)})),e.createTBody(),e.className="winners_table",e}fillTable(e){const t=document.querySelector(".winners_table").tBodies[0],n=document.getElementById("car_svg");e.forEach((e=>{const r=t.insertRow();r.insertCell().textContent=`${t.rows.length}`;const a=n.content.cloneNode(!0);this.adjustCar(a,e.color),r.insertCell().appendChild(a),r.insertCell().textContent=`${e.name}`,r.insertCell().textContent=`${e.wins}`,r.insertCell().textContent=`${e.time}`}))}adjustCar(e,t){e.querySelectorAll(".paintable").forEach((e=>e.setAttribute("fill",t)))}}},541:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=r(n(494)),o=r(n(756)),s=r(n(349)),c=r(n(781));t.default=class{constructor(){this.currentState="garage",this.nav=new a.default,this.controlPanel=new o.default,this.track=new s.default,this.winners=new c.default,this.state="garage"}set state(e){switch(this.currentState=e,this.currentState){case"garage":document.querySelector(".control_panel_wrapper").classList.remove("disabled"),document.querySelector(".garage_wrapper").classList.remove("disabled"),document.querySelector(".winners_wrapper").classList.add("disabled"),document.querySelector(".garage").disabled=!0,document.querySelector(".winners").disabled=!1;break;case"winners":document.querySelector(".control_panel_wrapper").classList.add("disabled"),document.querySelector(".garage_wrapper").classList.add("disabled"),document.querySelector(".winners_wrapper").classList.remove("disabled"),document.querySelector(".garage").disabled=!1,document.querySelector(".winners").disabled=!0}}}},341:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=r(n(629));n(427),(new a.default).start()}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0,n(341)})();