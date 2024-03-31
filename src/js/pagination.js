import { fetchPopularGames, renderGames } from './render-cards';
const loadMoreBtn = document.querySelector('.load-more-button');

let page = 1;

let perPage = 40;

loadMoreBtn.addEventListener('click', async () => {
  try {
    const cards = await fetchPopularGames(page + 1);
    renderGames(cards.results);
    page++;
  } catch (error) {
    console.error('Error fetching and rendering games:', error);
  }
});
