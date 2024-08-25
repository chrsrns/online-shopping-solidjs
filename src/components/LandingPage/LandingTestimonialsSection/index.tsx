import { For, onMount } from "solid-js";
// START keen-slider imports
import KeenSlider, { KeenSliderInstance, KeenSliderPlugin } from "keen-slider";
import TestimonialKeenSlider from "./TestimonialKeenSlider";
import TestimonialKeenSlide from "./TestimonialKeenSlide";
import { ComponentRefProps } from "../../../ComponentRefProps";
import { createMediaQuery } from "@solid-primitives/media";

const LandingTestimonialsSection = (props: ComponentRefProps) => {
  const slidesData: { header: string; content: string; author: string }[] = [
    {
      header: "My go-to place for stylish furniture",
      content: `But I must explain to you how all this 
        mistaken idea of denouncing pleasure and praising
        pain was born and I will give you a complete account
        of the system, and expound the actual teachings
        of the great explorer of the truth, the master-builder
        of human happiness.
        `,
      author: "Emma Johnson",
    },
    {
      header: "Exceptional quality at an affordable price",
      content: `No one rejects, dislikes, or avoids pleasure
        itself, because it is pleasure, but because those
        who do not know how to pursue pleasure rationally
        encounter consequences that are extremely painful.
        Nor again is there anyone who loves or pursues or desires.
        `,
      author: "Liam Davis",
    },
    {
      header: "Best furnitures for the money",
      content: `
        Nor again is there anyone who loves or pursues or desires
        to obtain pain of itself, because it is pain, but
        because occasionally circumstances occur in which
        toil and pain can procure him some great pleasure.
        To take a trivial example, which of us ever undertakes
        laborious physical exercise, except to obtain some
        advantage from it?
        `,
      author: "Ethan Taylor",
    },
    {
      header: "Great customer service for a furniture store",
      content: `
        But who has any right to find fault with a man who
        chooses to enjoy a pleasure that has no annoying
        consequences, or one who avoids a pain that produces
        no resultant pleasure?"
        `,
      author: "Mason Thomas",
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
      <section
        ref={props.ref}
        class="bg-walnut_brown-900 dark:bg-walnut_brown-300"
      >
        <div class="mx-auto max-w-[1340px] py-8 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
          <div class="flex flex-col items-center gap-8 lg:items-start">
            <div class="max-w-xl px-4 text-center lg:text-left rtl:lg:text-right">
              <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                Don't just take our word for it...
              </h2>

              <p class="mt-4 text-gray-700 dark:text-walnut_brown-900">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptas veritatis illo placeat harum porro optio fugit a culpa
                sunt id!
              </p>

              <div class="hidden lg:mt-8 lg:flex lg:gap-4">
                <button
                  aria-label="Previous slide"
                  id="keen-slider-previous-desktop"
                  class="rounded-full border border-jet p-3 text-jet transition hover:bg-jet hover:text-white dark:border-walnut_brown-900 dark:text-walnut_brown-900 dark:hover:bg-walnut_brown-900 dark:hover:text-black"
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
                  class="rounded-full border border-jet p-3 text-jet transition hover:bg-jet hover:text-white dark:border-walnut_brown-900 dark:text-walnut_brown-900 dark:hover:bg-walnut_brown-900 dark:hover:text-black"
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
        </div>
      </section>
    </div>
  );
};
export default LandingTestimonialsSection;
