import { Component, For, JSX, JSXElement, children, onMount } from "solid-js";
// START keen-slider imports
import KeenSlider, { KeenSliderInstance, KeenSliderPlugin } from "keen-slider";

const StarsRating = () => (
  <div class="flex gap-0.5 text-green-500">
    <svg
      class="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>

    <svg
      class="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>

    <svg
      class="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>

    <svg
      class="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>

    <svg
      class="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  </div>
);

interface TestimonialKeenSlideProps {
  slideHeader: string;
  slideContent: string;
  slideAuthor: string;
}
const TestimonialKeenSlide = (props: TestimonialKeenSlideProps) => {
  return (
    <div class="keen-slider__slide">
      <blockquote class="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
        <div>
          <StarsRating />
          <div class="mt-4">
            <p class="text-2xl font-bold text-rose-600 sm:text-3xl">
              {props.slideHeader}
            </p>

            <p class="mt-4 leading-relaxed text-gray-700">
              {props.slideContent}
            </p>
          </div>
        </div>

        <footer class="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
          &mdash; {props.slideAuthor}
        </footer>
      </blockquote>
    </div>
  );
};

interface TestimonialKeenSliderProps {
  children: JSX.Element;
}
const TestimonialKeenSlider = (props: TestimonialKeenSliderProps) => {
  const cs = children(() => props.children).toArray();
  return (
    <div id="keen-slider" class="keen-slider">
      <For each={cs}>{(item) => item}</For>
    </div>
  );
};

const LandingTestimonialsSection = () => {
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
              <TestimonialKeenSlide
                slideHeader="Testimonial 1"
                slideContent="
                  No, Rose, they are not breathing. And they have no arms
                  or legs … Where are they? You know what? If we come
                  across somebody with no arms or legs, do we bother
                  resuscitating them? I mean, what quality of life do we
                  have there?
                "
                slideAuthor="Christian Aranas"
              />
              <TestimonialKeenSlide
                slideHeader="Testimonial 2"
                slideContent="
                  No, Rose, they are not breathing. And they have no arms
                  or legs … Where are they? You know what? If we come
                  across somebody with no arms or legs, do we bother
                  resuscitating them? I mean, what quality of life do we
                  have there?
                "
                slideAuthor="Christian Aranas"
              />

              <TestimonialKeenSlide
                slideHeader="Testimonial 3"
                slideContent="
                  No, Rose, they are not breathing. And they have no arms
                  or legs … Where are they? You know what? If we come
                  across somebody with no arms or legs, do we bother
                  resuscitating them? I mean, what quality of life do we
                  have there?
                "
                slideAuthor="Christian Aranas"
              />

              <TestimonialKeenSlide
                slideHeader="Testimonial 4"
                slideContent="
                  No, Rose, they are not breathing. And they have no arms
                  or legs … Where are they? You know what? If we come
                  across somebody with no arms or legs, do we bother
                  resuscitating them? I mean, what quality of life do we
                  have there?
                "
                slideAuthor="Christian Aranas"
              />
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
