/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import App from "./App";
import { Route, Router } from "@solidjs/router";
import { lazy } from "solid-js";

const LandingPage = lazy(() => import("./components/LandingPage"));
const ProductsPage = lazy(() => import("./components/ProductsPage"));
const AboutPage = lazy(() => import("./components/AboutPage"));

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
  );
}

render(() => {
  console.log("Initializing root component...");
  return (
    <Router base="/online-shopping-solidjs/" root={App}>
      <Route path="/" component={LandingPage} />
      <Route path="/shop" component={ProductsPage} />
      <Route path="/about" component={AboutPage} />
    </Router>
  );
}, root!);
