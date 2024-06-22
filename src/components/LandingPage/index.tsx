import { createEffect, createSignal, onMount } from "solid-js";
import Topbar from "../Topbar";
import LandingHeroSection from "./HeroSection";
import LandingAnimationSection from "./LandingAnimationSection";
import LandingDirectToShop from "./LandingDirectToShop";
import LandingProductsCarousel from "./LandingProductsCarousel";
import LandingTestimonialsSection from "./LandingTestimonialsSection";
import { createMediaQuery } from "@solid-primitives/media";
import { throttle } from "@solid-primitives/scheduled";

const LandingPage = () => {
  let topBar!: HTMLDivElement;

  let myContents!: HTMLDivElement;
  let landingHero!: HTMLDivElement;
  let landingAnimation!: HTMLDivElement;
  let landingProducts!: HTMLDivElement;
  let landingTestimonials!: HTMLDivElement;
  let landingShop!: HTMLDivElement;

  const isSmall = createMediaQuery("(max-width: 767px)");

  const [animate, setAnimate] = createSignal(false);
  const throttledGetCenteredChild = throttle(
    (e: Event) => getCenteredChild(e),
    150,
  );

  onMount(() => {
    const calcedHeight = `calc(100vh - ${topBar.clientHeight}px)`;

    myContents.addEventListener("scroll", throttledGetCenteredChild);
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

  function getCenteredChild(e: Event) {
    //  can't use native elementFromPoint for better performance; it gets the topmost element
    if (e.target instanceof HTMLElement) {
      const rect = e.target.getBoundingClientRect();
      for (const cell of e.target.children) {
        if (cell instanceof HTMLElement) {
          const cellRect = cell.getBoundingClientRect();
          const bounds = [
            rect.height / 2 - cellRect.height / 2,
            rect.height / 2 + cellRect.height / 2,
          ];
          const centerScrollOffset =
            cellRect.top - rect.top + cell.offsetHeight / 2;
          if (
            bounds[0] < centerScrollOffset &&
            centerScrollOffset < bounds[1]
          ) {
            if (cell.id == "animation") {
              setAnimate(true);
              myContents.removeEventListener(
                "scroll",
                throttledGetCenteredChild,
              );
            }
          }
        }
      }
    }
  }
  return (
    <div>
      <Topbar ref={topBar} />
      <div
        ref={myContents}
        class="flex w-screen flex-shrink-0 snap-y snap-mandatory flex-col overflow-y-auto"
      >
        <LandingHeroSection ref={landingHero} />
        <LandingAnimationSection ref={landingAnimation} animate={animate()} />
        <LandingProductsCarousel ref={landingProducts} />
        <LandingTestimonialsSection ref={landingTestimonials} />
        <LandingDirectToShop ref={landingShop} />
      </div>
    </div>
  );
};
export default LandingPage;
