document.querySelectorAll(".cards-home-movie-image").forEach((e=>{const n=window.getComputedStyle(e).backgroundColor,a=chroma(n).luminance(),t=e.querySelector(".text-element");t.style.color=a<.5?"black":"white"}));const e=document.querySelector(".main-gallery");async function n(e){const n=new URL("games","https://api.rawg.io/api/");n.searchParams.append("ordering","-rating"),n.searchParams.append("key","4688c8e2a1b74736a6eaf922561496b4"),n.searchParams.append("page",e);try{const e=await fetch(n);return await e.json()}catch(e){console.error("Error fetching popular games:",e)}}async function a(){const e=new URL("https://api.rawg.io/api/genres");e.searchParams.append("key","4688c8e2a1b74736a6eaf922561496b4");try{const n=await fetch(e);return(await n.json()).results}catch(e){console.error("Error fetching genres:",e)}}async function t(n){e.innerHTML="";for(const a of n){const{id:n,name:t,background_image:o,genres:c,tags:r,rating:d,added:i,released:l,parent_platforms:m}=a;if(r.some((e=>"nsfw"===e.name.toLowerCase())))continue;const p=new Image;p.src=o,p.onload=async function(){if(this.naturalWidth>=this.naturalHeight){const p=c.map((e=>e.name)),u=(r.map((e=>e.name)),m.map((e=>e.platform.name)).slice(0,2)),g=`\n          <li class="card-container" data-id="${n}">\n            <div class="first-content-card" data-id="${n}" data-title="${t}" data-original_title="${t}">\n              <div class="img-content">\n                  <img class="cards-home-game-image" width="310" height="170" src="${o}" alt="Poster ${t}" />\n                <div>\n                <div class="stats-cards">\n                <p class="cards-home-game-rating">${d}</p>\n                <p class="cards-home-game-added">+ ${i}</p>\n                </div>\n                <span class="cards-home-game-title">${t.toUpperCase()}</span>\n                </div>\n              </div>\n            </div>\n            <div class="second-content-card">\n            ${p.length>0?`<div class="cards-home-game-genres"><span>Genres:</span> ${p.join(", ")}</div>`:""}\n            ${l?`<div class="cards-home-game-genres"><span>Release date:</span> ${l}</div>`:""}\n            ${u.length>0?`<div class="cards-home-game-genres"><span>Platforms:</span> ${u.join(", ")}</div>`:""}\n              <button class="view-details-btn" data-id="${n}">View Details</button>\n            </div>\n          </li>\n        `;e.insertAdjacentHTML("beforeend",g),document.querySelector(`[data-id="${n}"] .view-details-btn`).addEventListener("click",(async function(){s(a)}))}}}}function s(e){const n=`\n  <div class="modal-content" style="background-image: url(${e.background_image}); background-repeat: no-repeat; background-size: cover;">\n  <div class="gradient-overlay"></div>\n  <div class="follow-us"><span>Follow us!</span></div>\n  <span class="close">&times;</span>\n  <div class="container-modal-div">\n  <h2>${e.name}</h2>\n    <div class="stats-modal">\n      <ul class="buttons-modal">\n        <li>\n          <button>\n            Add to <span>Wishlist</span>\n            <span class="stat-modal-btn">${e.added}</span>\n          </button>\n        </li>\n        <li><button>Add to my <span>games</span></button></li>\n      </ul>\n      <div class="stats-modal-styles">\n        <p>Rating: <span>${e.rating}</span></p>\n        <p>Added: <span>${e.added}</span></p>\n      </div>\n      ${e.genres.length>0?`\n        <p>Genres: <span>${e.genres.map((e=>e.name)).join(", ")}</span></p>\n      `:""}\n      ${e.tags.length>0?`\n        <p>Tags: <span>${e.tags.map((e=>e.name)).join(", ")}</span></p>\n      `:""}\n    </div>\n  </div>\n</div>\n  `;document.querySelector(".modal").innerHTML=n,document.querySelector(".modal").style.display="block";document.querySelector(".modal-content .close").addEventListener("click",o)}function o(){document.querySelector(".modal").style.display="none"}document.addEventListener("keydown",(function(e){"Escape"===e.key&&o()})),n(1).then((e=>e.results)).then(t).catch((e=>console.error("Error fetching popular games:",e)));document.querySelector(".load-more-button");let c=1;const r=document.querySelector(".prev-page-button"),d=document.querySelector(".next-page-button");r.addEventListener("click",(async()=>{if(c>1)try{t((await n(c-1)).results),c--,window.scrollTo({top:0,behavior:"smooth"})}catch(e){console.error("Error fetching and rendering games:",e)}})),d.addEventListener("click",(async()=>{try{t((await n(c+1)).results),c++,window.scrollTo({top:0,behavior:"smooth"})}catch(e){console.error("Error fetching and rendering games:",e)}})),async function(){const e=await a(),n=document.querySelector("#genre-list");e.forEach((e=>{const a=document.createElement("li"),t=document.createElement("span");a.dataset.value=e.id,t.textContent=e.name,n.appendChild(a),a.appendChild(t)}))}();const i=document.querySelector("#userModal");document.querySelector(".user-icon").addEventListener("click",(e=>{i.style.display="block"}));i.querySelector(".user-modal-close").addEventListener("click",(e=>{i.style.display="none"}));
//# sourceMappingURL=index.a4e4e2ec.js.map
