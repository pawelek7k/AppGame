import { fetchPopularGames, renderGames } from './render-cards';

let page = 1;

let perPage = 40;

export const prevPageBtn = document.querySelector('.prev-page-button');
export const nextPageBtn = document.querySelector('.next-page-button');

prevPageBtn.addEventListener('click', async () => {
  if (page > 1) {
    try {
      const data = await fetchPopularGames(page - 1);
      renderGames(data.results);
      page--;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Error fetching and rendering games:', error);
    }
  }
});

nextPageBtn.addEventListener('click', async () => {
  try {
    const data = await fetchPopularGames(page + 1);
    renderGames(data.results);
    page++;

    window.scrollTo({ top: 0, behavior: 'smooth' });
  } catch (error) {
    console.error('Error fetching and rendering games:', error);
  }
});
