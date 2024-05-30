import { onMount, type Component } from "solid-js";

// START keen-slider imports
import KeenSlider, { KeenSliderInstance, KeenSliderPlugin } from "keen-slider";
import "keen-slider/keen-slider.min.css";

import LandingHeroSection from "./components/LandingPage/HeroSection";
import LandingAnimationSection from "./components/LandingPage/LandingAnimationSection";
import LandingProductsCarousel from "./components/LandingPage/LandingProductsCarousel";
import LandingTestimonialsSection from "./components/LandingPage/LandingTestimonialsSection";
import LandingDirectToShop from "./components/LandingPage/LandingDirectToShop";

const App: Component = () => {
  onMount(() => {
    const WheelControls: KeenSliderPlugin = (slider: KeenSliderInstance) => {
      let touchTimeout: ReturnType<typeof setTimeout>;
      let position: {
        x: number;
        y: number;
      };
      let wheelActive: boolean;

      function dispatch(e: WheelEvent, name: string) {
        position.x -= e.deltaX;
        position.y -= e.deltaY;
        slider.container.dispatchEvent(
          new CustomEvent(name, {
            detail: {
              x: position.x,
              y: position.y,
            },
          }),
        );
      }

      function wheelStart(e: WheelEvent) {
        position = {
          x: e.pageX,
          y: e.pageY,
        };
        dispatch(e, "ksDragStart");
      }

      function wheel(e: WheelEvent) {
        dispatch(e, "ksDrag");
      }

      function wheelEnd(e: WheelEvent) {
        dispatch(e, "ksDragEnd");
      }

      function eventWheel(e: WheelEvent) {
        e.preventDefault();
        if (!wheelActive) {
          wheelStart(e);
          wheelActive = true;
        }
        wheel(e);
        clearTimeout(touchTimeout);
        touchTimeout = setTimeout(() => {
          wheelActive = false;
          wheelEnd(e);
        }, 50);
      }

      slider.on("created", () => {
        slider.container.addEventListener("wheel", eventWheel, {
          passive: false,
        });
      });
    };
    const keenSlider = new KeenSlider(
      "#keen-slider",
      {
        loop: true,
        slides: {
          origin: "center",
          perView: 1.25,
          spacing: 16,
        },
        breakpoints: {
          "(min-width: 1024px)": {
            slides: {
              origin: "auto",
              perView: 1.5,
              spacing: 32,
            },
          },
        },
      },
      [WheelControls],
    );

    const keenSliderPrevious = document.getElementById("keen-slider-previous");
    const keenSliderNext = document.getElementById("keen-slider-next");

    const keenSliderPreviousDesktop = document.getElementById(
      "keen-slider-previous-desktop",
    );
    const keenSliderNextDesktop = document.getElementById(
      "keen-slider-next-desktop",
    );

    keenSliderPrevious?.addEventListener("click", () => keenSlider.prev());
    keenSliderNext?.addEventListener("click", () => keenSlider.next());

    keenSliderPreviousDesktop?.addEventListener("click", () =>
      keenSlider.prev(),
    );
    keenSliderNextDesktop?.addEventListener("click", () => keenSlider.next());
  });
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
