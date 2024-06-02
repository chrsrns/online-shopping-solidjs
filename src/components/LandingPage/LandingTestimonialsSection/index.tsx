import { For, onMount } from "solid-js";
// START keen-slider imports
import KeenSlider, { KeenSliderInstance, KeenSliderPlugin } from "keen-slider";
import TestimonialKeenSlider from "./TestimonialKeenSlider";
import TestimonialKeenSlide from "./TestimonialKeenSlide";

const LandingTestimonialsSection = () => {
  const slidesData: { header: string; content: string; author: string }[] = [
    {
      header: "Testimonial 1",
      content: `No, Rose, they are not breathing. And they have no arms
        or legs … Where are they? You know what? If we come
        across somebody with no arms or legs, do we bother
        resuscitating them? I mean, what quality of life do we
        have there?
        `,
      author: "Christian Aranas",
    },
    {
      header: "Testimonial 2",
      content: `No, Rose, they are not breathing. And they have no arms
        or legs … Where are they? You know what? If we come
        across somebody with no arms or legs, do we bother
        resuscitating them? I mean, what quality of life do we
        have there?
        `,
      author: "Christian Aranas",
    },
    {
      header: "Testimonial 3",
      content: `No, Rose, they are not breathing. And they have no arms
        or legs … Where are they? You know what? If we come
        across somebody with no arms or legs, do we bother
        resuscitating them? I mean, what quality of life do we
        have there?
        `,
      author: "Christian Aranas",
    },
    {
      header: "Testimonial 4",
      content: `No, Rose, they are not breathing. And they have no arms
        or legs … Where are they? You know what? If we come
        across somebody with no arms or legs, do we bother
        resuscitating them? I mean, what quality of life do we
        have there?
        `,
      author: "Christian Aranas",
    },
  ];
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
    <div class="snap-center">
      <section class="h-screen bg-gray-50">
        <div class="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
          <div class="flex flex-col gap-8 items-center lg:items-start">
            <div class="max-w-xl text-center lg:text-left rtl:lg:text-right">
              <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Don't just take our word for it...
              </h2>

              <p class="mt-4 text-gray-700">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptas veritatis illo placeat harum porro optio fugit a culpa
                sunt id!
              </p>

              <div class="hidden lg:mt-8 lg:flex lg:gap-4">
                <button
                  aria-label="Previous slide"
                  id="keen-slider-previous-desktop"
                  class="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-5 rtl:rotate-180"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>

                <button
                  aria-label="Next slide"
                  id="keen-slider-next-desktop"
                  class="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                >
                  <svg
                    class="size-5 rtl:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 5l7 7-7 7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <TestimonialKeenSlider>
              <For each={slidesData}>
                {(item, index) => (
                  <TestimonialKeenSlide
                    slideHeader={item.header}
                    slideContent={item.content}
                    slideAuthor={item.author}
                  />
                )}
              </For>
            </TestimonialKeenSlider>
          </div>

          {/*
              <div class="mt-8 flex justify-center gap-4 lg:hidden">
                <button
                  aria-label="Previous slide"
                  id="keen-slider-previous"
                  class="rounded-full border border-rose-600 p-4 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                >
                  <svg
                    class="size-5 -rotate-180 transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 5l7 7-7 7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                  </svg>
                </button>

              <button
                aria-label="Next slide"
                id="keen-slider-next"
                class="rounded-full border border-rose-600 p-4 text-rose-600 transition hover:bg-rose-600 hover:text-white"
              >
                <svg
                  class="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </svg>
              </button>
            </div>
            */}
        </div>
      </section>
    </div>
  );
};
export default LandingTestimonialsSection;
