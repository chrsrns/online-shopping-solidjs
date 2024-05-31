import { type Component } from "solid-js";

import LandingHeroSection from "./components/LandingPage/HeroSection";
import LandingAnimationSection from "./components/LandingPage/LandingAnimationSection";
import LandingProductsCarousel from "./components/LandingPage/LandingProductsCarousel";
import LandingTestimonialsSection from "./components/LandingPage/LandingTestimonialsSection";
import LandingDirectToShop from "./components/LandingPage/LandingDirectToShop";

const App: Component = () => {
  return (
    <div class="w-screen h-screen overflow-y-auto flex flex-col flex-shrink-0 snap-y snap-mandatory">
      <LandingHeroSection />
      <LandingAnimationSection />
      <LandingProductsCarousel />
      <LandingTestimonialsSection />
      <LandingDirectToShop />
    </div>
  );
};

export default App;
