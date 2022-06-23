import { appRoutes } from "./src/constants/routes.js";

import Layout from "./src/components/Layout/Layout.js";

import createComponent from "./src/utils/createComponent.js";
import getUrl from "./src/utils/getUrl.js";

const renderRoutes = () => {
  const url = getUrl();
  const layout = document.querySelector('.container')
  let route = appRoutes[url.replace(/(?!.*\/).*/s, '')];

  if (!route) {
    route = route = appRoutes['**'];
  }

  if (!layout) {
    createComponent('#root', Layout());
  }

  return route.component();
}

window.addEventListener('hashchange', renderRoutes)

renderRoutes()
