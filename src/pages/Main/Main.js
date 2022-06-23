import { getAnimes } from "../../services/anime.js";

import createComponent from "../../utils/createComponent.js";

import AnimeCard from "../../components/AnimeCard/AnimeCard.js";

const MainPage = () => {
  createComponent('.container', `<div class="animes">
  </div>`);

  getAnimes({
    order: 'popularity',
    limit: 8,
  }).then((res) => {
    showPopularAnime(res);
  });

  const showPopularAnime = (data) => {
    const animeCards = data.map(({
      id,
      russian: title,
      studio,
      image: { original: imageSource },
    }) => AnimeCard({
      id,
      title,
      studio,
      imageSource,
    }));

    createComponent('.animes', animeCards.join(''));
  };
}

export default MainPage;
