document.querySelectorAll(".cards-home-movie-image").forEach((e=>{const a=window.getComputedStyle(e).backgroundColor,n=chroma(a).luminance(),t=e.querySelector(".text-element");t.style.color=n<.5?"black":"white"}));const e=document.querySelector(".main-gallery");async function a(e){const a=new URL(`games/${e}/movies`,"https://api.rawg.io/api/");a.searchParams.append("key","4688c8e2a1b74736a6eaf922561496b4");try{const e=await fetch(a);return await e.json()}catch(e){console.error("Error fetching game trailers:",e)}}function n(e){const a=`\n    <div class="modal-content">\n      <span class="close">&times;</span>\n      <h2>${e.name}</h2>\n      <img src="${e.background_image}" width="300" alt="Poster ${e.name}" />\n      <p>Rating: ${e.rating}</p>\n      <p>Genres: ${e.genres.map((e=>e.name)).join(", ")}</p>\n      <p>Tags: ${e.tags.map((e=>e.name)).join(", ")}</p>\n      <p>Added: ${e.added}</p>\n      <div class="slider" id="slider-${e.id}">\n        ${e.short_screenshots.map((e=>`<img src="${e.image}" alt="Screenshot" width="300" />`)).join("")}\n      </div>\n    </div>\n  `;document.querySelector(".modal").innerHTML=a,document.querySelector(".modal").style.display="block";document.querySelector(".modal-content .close").addEventListener("click",t)}function t(){document.querySelector(".modal").style.display="none"}(async function(e){const a=new URL("games","https://api.rawg.io/api/");a.searchParams.append("ordering","-rating"),a.searchParams.append("key","4688c8e2a1b74736a6eaf922561496b4"),a.searchParams.append("page",e);try{const e=await fetch(a);return await e.json()}catch(e){console.error("Error fetching popular games:",e)}})(1).then((e=>e.results)).then((async function(t){e.innerHTML="";for(const s of t){const{id:t,name:r,background_image:c,genres:o,tags:i,rating:d,added:l,released:m,parent_platforms:p}=s,g=new Image;g.src=c,g.onload=async function(){if(this.naturalWidth>=this.naturalHeight){const g=o.map((e=>e.name)),u=(i.map((e=>e.name)),p.map((e=>e.platform.name)).slice(0,2)),h=((await a(t)).results.map((e=>({image:e.data.max}))),`\n          <li class="card-container" data-id="${t}">\n            <div class="first-content-card" data-id="${t}" data-title="${r}" data-original_title="${r}">\n              <div class="img-content">\n                  <img class="cards-home-game-image" width="310" height="170" src="${c}" alt="Poster ${r}" />\n                <div>\n                <div class="stats-cards">\n                <p class="cards-home-game-rating">${d}</p>\n                <p class="cards-home-game-added">+ ${l}</p>\n                </div>\n                <span class="cards-home-game-title">${r.toUpperCase()}</span>\n                </div>\n              </div>\n            </div>\n            <div class="second-content-card">\n            ${g.length>0?`<div class="cards-home-game-genres"><span>Genres:</span> ${g.join(", ")}</div>`:""}\n            ${m?`<div class="cards-home-game-genres"><span>Release date:</span> ${m}</div>`:""}\n            ${u.length>0?`<div class="cards-home-game-genres"><span>Platforms:</span> ${u.join(", ")}</div>`:""}\n              <button class="view-details-btn" data-id="${t}">View Details</button>\n            </div>\n          </li>\n        `);e.insertAdjacentHTML("beforeend",h),document.querySelector(`[data-id="${t}"] .view-details-btn`).addEventListener("click",(async function(){n(s)}))}}}})).catch((e=>console.error("Error fetching popular games:",e)));const s=document.querySelector("#userModal");document.querySelector(".user-icon").addEventListener("click",(e=>{s.style.display="block"}));s.querySelector(".user-modal-close").addEventListener("click",(e=>{s.style.display="none"}));
//# sourceMappingURL=index.2d128a5d.js.map
