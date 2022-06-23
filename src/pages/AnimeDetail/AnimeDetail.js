import { getAnimeById } from "../../services/anime.js";

import createComponent from "../../utils/createComponent.js";
import getParameterByName from "../../utils/getParams.js";

const AnimeDetailPage = () => {
  const paramId = getParameterByName('id')

  getAnimeById(paramId).then((res) => {
    console.log('res', res);
    showAnimeDetail(res);
  });

  const showAnimeDetail = ({ image: { original: imageSource }, russian, description }) => {
    createComponent('.container', `<div class="animeDetail">
    <div>
      <img src="https://nyaa.shikimori.one/${imageSource}" class="anime-cover">
    </div>

    <div >
      <h1 class="animeDetailTitle">${russian}</h1>
    </div>
    <div>
      <p class="animeDetailDescr">${description}</p>
    </div>
    </div>`);
  }


}

export default AnimeDetailPage;
