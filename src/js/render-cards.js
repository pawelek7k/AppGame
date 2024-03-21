const API_KEY = '4688c8e2a1b74736a6eaf922561496b4';
const baseUrl = 'https://api.rawg.io/api/';
const list = document.querySelector('.main-gallery');

async function fetchPopularGames(page) {
  const url = new URL('games', baseUrl);
  url.searchParams.append('ordering', '-rating');
  url.searchParams.append('key', API_KEY);
  url.searchParams.append('page', page);

  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching popular games:', error);
  }
}

async function fetchGenres() {
  const url = new URL('https://api.rawg.io/api/genres');
  url.searchParams.append('key', API_KEY);

  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching genres:', error);
  }
}

async function renderGames() {
  const popularGames = await fetchPopularGames(1);
  const genres = await fetchGenres();

  list.innerHTML = '';

  popularGames.results.forEach(game => {
    const { id, name, background_image, genres: gameGenres, tags } = game;

    const genreNames = gameGenres.map(genre => genre.name);
    const tagNames = tags.map(tag => tag.name);

    const listItem = `
            <li class="cards-game-home-list" data-id="${id}">
                <a href="" class="cards-game-home-link" id="${id}">
                    <div class="cards-game-home-photo" data-id="${id}" data-title="${name}" data-original_title="${name}"></div>
                    <img class="cards-game-home-img" width="300" src="${background_image}" alt="Poster ${name}" />
                    <div class="cards-game-home-info">
                        <p class="cards-title"><b>${name.toUpperCase()}</b></p>
                        <p class="cards-genres">${genreNames.join(', ')}</p>
                        <p class="cards-tags">${tagNames.join(', ')}</p>
                    </div>
                </a>
            </li>
        `;

    list.insertAdjacentHTML('beforeend', listItem);
  });
}

renderGames();
