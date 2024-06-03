/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import App from "./App";
import LandingPage from "./components/LandingPage";
import { Route, Router } from "@solidjs/router";
import ProductsPage from "./components/ProductsPage";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
  );
}

render(
  () => (
    <Router root={App}>
      <Route path="/" component={LandingPage} />
      <Route path="/shop" component={ProductsPage} />
    </Router>
  ),
  root!,
);
