const AnimeCard = ({
  id,
  title,
  studio,
  imageSource
}) => `<a href="#/animeDetail/?id=${id}">
<div class="anime">
  <div>
    <img src="https://nyaa.shikimori.one/${imageSource}" class="anime-cover">
  </div>

  <div class="anime-name">${title}</div>

  <span class="anime-studio">${studio}</span>
</div>
</a>
`;

export default AnimeCard;