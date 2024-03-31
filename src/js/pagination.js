import { fetchPopularGames, page, renderGames } from './render-cards';
const loadMoreBtn = document.querySelector('.load-more-button');

let perPage = 40;

loadMoreBtn.addEventListener('click', async () => {
  try {
    const cards = await fetchPopularGames(page);
    renderGames(cards.results); // Renderowanie tylko danych gier, a nie całego obiektu odpowiedzi
    page++;
  } catch (error) {
    console.error('Error fetching and rendering games:', error);
  }
});
