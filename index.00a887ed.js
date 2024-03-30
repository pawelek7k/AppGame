document.querySelectorAll(".cards-home-movie-image").forEach((e=>{const n=window.getComputedStyle(e).backgroundColor,a=chroma(n).luminance(),s=e.querySelector(".text-element");s.style.color=a<.5?"black":"white"}));const e=document.querySelector(".main-gallery");async function n(e){const n=new URL(`games/${e}/movies`,"https://api.rawg.io/api/");n.searchParams.append("key","4688c8e2a1b74736a6eaf922561496b4");try{const e=await fetch(n);return await e.json()}catch(e){console.error("Error fetching game trailers:",e)}}function a(e){const n=`\n  <div class="modal-content">\n  <span class="close">&times;</span>\n\n  <h2>${e.name}</h2>\n  <div class="container-modal-div">\n    <img src="${e.background_image}" height="200" alt="Poster ${e.name}" />\n    <div class="stats-modal">\n      <ul class="buttons-modal">\n        <li><button>Add to <span>Wishlist</span></button></li>\n        <li><button>Add to my <span>games</span></button></li>\n      </ul>\n      <div class="stats-modal-styles">\n        <p>Rating: <span>${e.rating}</span></p>\n        <p>Added: <span>${e.added}</span></p>\n      </div>\n      <p>Genres: <span>${e.genres.map((e=>e.name)).join(", ")}</span></p>\n      <p>Tags: <span>${e.tags.map((e=>e.name)).join(", ")}</span></p>\n\n      <div class="slider" id="slider-${e.id}">\n        ${e.short_screenshots.map((e=>`<img src="${e.image}" alt="Screenshot" width="300" />`)).join("")}\n      </div>\n    </div>\n  </div>\n</div>\n  `;document.querySelector(".modal").innerHTML=n,document.querySelector(".modal").style.display="block";document.querySelector(".modal-content .close").addEventListener("click",s)}function s(){document.querySelector(".modal").style.display="none"}document.addEventListener("keydown",(function(e){"Escape"===e.key&&s()})),async function(e){const n=new URL("games","https://api.rawg.io/api/");n.searchParams.append("ordering","-rating"),n.searchParams.append("key","4688c8e2a1b74736a6eaf922561496b4"),n.searchParams.append("page",e);try{const e=await fetch(n);return await e.json()}catch(e){console.error("Error fetching popular games:",e)}}(1).then((e=>e.results)).then((async function(s){e.innerHTML="";for(const t of s){const{id:s,name:o,background_image:c,genres:i,tags:r,rating:d,added:l,released:m,parent_platforms:p}=t,g=r.some((e=>"nsfw"===e.name.toLowerCase()));if(console.log(t),g)continue;const u=new Image;u.src=c,u.onload=async function(){if(this.naturalWidth>=this.naturalHeight){const g=i.map((e=>e.name)),u=(r.map((e=>e.name)),p.map((e=>e.platform.name)).slice(0,2)),h=((await n(s)).results.map((e=>({image:e.data.max}))),`\n          <li class="card-container" data-id="${s}">\n            <div class="first-content-card" data-id="${s}" data-title="${o}" data-original_title="${o}">\n              <div class="img-content">\n                  <img class="cards-home-game-image" width="310" height="170" src="${c}" alt="Poster ${o}" />\n                <div>\n                <div class="stats-cards">\n                <p class="cards-home-game-rating">${d}</p>\n                <p class="cards-home-game-added">+ ${l}</p>\n                </div>\n                <span class="cards-home-game-title">${o.toUpperCase()}</span>\n                </div>\n              </div>\n            </div>\n            <div class="second-content-card">\n            ${g.length>0?`<div class="cards-home-game-genres"><span>Genres:</span> ${g.join(", ")}</div>`:""}\n            ${m?`<div class="cards-home-game-genres"><span>Release date:</span> ${m}</div>`:""}\n            ${u.length>0?`<div class="cards-home-game-genres"><span>Platforms:</span> ${u.join(", ")}</div>`:""}\n              <button class="view-details-btn" data-id="${s}">View Details</button>\n            </div>\n          </li>\n        `);e.insertAdjacentHTML("beforeend",h),document.querySelector(`[data-id="${s}"] .view-details-btn`).addEventListener("click",(async function(){a(t)}))}}}})).catch((e=>console.error("Error fetching popular games:",e)));const t=document.querySelector("#userModal");document.querySelector(".user-icon").addEventListener("click",(e=>{t.style.display="block"}));t.querySelector(".user-modal-close").addEventListener("click",(e=>{t.style.display="none"}));
//# sourceMappingURL=index.00a887ed.js.map