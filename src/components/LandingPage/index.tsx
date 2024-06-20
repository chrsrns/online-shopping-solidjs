import { createEffect, onMount } from "solid-js";
import Topbar from "../Topbar";
import LandingHeroSection from "./HeroSection";
import LandingAnimationSection from "./LandingAnimationSection";
import LandingDirectToShop from "./LandingDirectToShop";
import LandingProductsCarousel from "./LandingProductsCarousel";
import LandingTestimonialsSection from "./LandingTestimonialsSection";
import { createMediaQuery } from "@solid-primitives/media";

const LandingPage = () => {
  let topBar!: HTMLDivElement;

  let myContents!: HTMLDivElement;
  let landingHero!: HTMLDivElement;
  let landingAnimation!: HTMLDivElement;
  let landingProducts!: HTMLDivElement;
  let landingTestimonials!: HTMLDivElement;
  let landingShop!: HTMLDivElement;

  const isSmall = createMediaQuery("(max-width: 767px)");

  onMount(() => {
    const calcedHeight = `calc(100vh - ${topBar.clientHeight}px)`;

    myContents.style.setProperty("height", calcedHeight);
    landingHero.style.setProperty("height", calcedHeight);
    landingAnimation.style.setProperty("height", calcedHeight);
    landingProducts.style.setProperty("height", calcedHeight);
    landingTestimonials.style.setProperty("height", calcedHeight);
  });

  createEffect(() => {
    const calcedHeight = `calc(100vh - ${topBar.clientHeight}px)`;
    if (isSmall()) landingShop.style.setProperty("height", calcedHeight);
    else landingShop.style.removeProperty("height");
  });
  return (
    <div>
      <Topbar ref={topBar} />
      <div
        ref={myContents}
        class="flex w-screen flex-shrink-0 snap-y snap-mandatory flex-col overflow-y-auto"
      >
        <LandingHeroSection ref={landingHero} />
        <LandingAnimationSection ref={landingAnimation} />
        <LandingProductsCarousel ref={landingProducts} />
        <LandingTestimonialsSection ref={landingTestimonials} />
        <LandingDirectToShop ref={landingShop} />
      </div>
    </div>
  );
};
export default LandingPage;
