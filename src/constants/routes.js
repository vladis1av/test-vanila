import AnimeDetailPage from "../pages/AnimeDetail/AnimeDetail.js";
import ErrorPage from "../pages/Error/Error.js";
import MainPage from "../pages/Main/Main.js";

export const appRoutes = {
  '': { component: MainPage },
  '/': { component: MainPage },
  '/animeDetail/': { component: AnimeDetailPage },
  '**': { component: ErrorPage },
};