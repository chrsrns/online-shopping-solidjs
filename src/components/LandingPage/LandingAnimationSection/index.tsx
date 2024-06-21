import { ComponentRefProps } from "../../../ComponentRefProps";

interface LandingAnimationSectionProps extends ComponentRefProps {
  animate: boolean;
}

const LandingAnimationSection = (props: LandingAnimationSectionProps) => {
  let furn_chair!: HTMLImageElement;
  let furn_worktable!: HTMLImageElement;
  let furn_bed!: HTMLImageElement;
  let furn_macpc!: HTMLImageElement;
  let furn_shelfdecor!: HTMLImageElement;
  let furn_tablelamp!: HTMLImageElement;
  let furn_wallbookshelf!: HTMLImageElement;
  let furn_wallpainting!: HTMLImageElement;
  let furn_wallshelf!: HTMLImageElement;
  let furn_wallstickies!: HTMLImageElement;

  return (
    <div class="snap-center">
      <section
        ref={props.ref}
        class="flex flex-col items-center justify-center overflow-hidden bg-walnut_brown-800 py-8 sm:pt-16 md:pt-0 2xl:pt-16 dark:bg-walnut_brown-300"
      >
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 items-center md:grid-cols-2">
            <div>
              <h2 class="text-center text-3xl font-bold leading-tight text-black sm:text-4xl md:text-left lg:text-5xl dark:text-white">
                Elevate your most&nbsp;
                <br class="block sm:hidden" />
                important space
              </h2>
              <p class="mx-4 mt-3 text-xl leading-relaxed text-gray-600 md:mt-8 lg:mx-12 dark:text-gray-300">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>

              <p class="mb-8 mt-4 text-center text-xl text-gray-600 md:mt-8 md:text-left dark:text-gray-300">
                <span class="relative inline-block">
                  <span class="absolute bottom-0.5 inline-block h-2 w-full bg-yellow-300 dark:bg-gray-900"></span>
                  <span class="relative">
                    {" "}
                    We handle the heavy lifting for you{" "}
                  </span>
                </span>
              </p>
            </div>

            <div class="relative">
              <img
                class="absolute inset-x-0 bottom-0 left-1/2 -translate-x-1/2 md:scale-110"
                src="src/assets/blob-floor1.svg"
                alt=""
              />

              <div class="relative w-full scale-90 md:scale-100 xl:mx-auto xl:max-w-lg 2xl:origin-bottom 2xl:scale-110">
                <img
                  class="relative"
                  src="src/assets/photos-furniture/furn-space.png"
                  alt=""
                />
                <img
                  ref={furn_chair}
                  class="absolute left-0 top-0"
                  src="src/assets/photos-furniture/furn-chair.png"
                  alt=""
                />
                <img
                  ref={furn_worktable}
                  class="absolute left-0 top-0"
                  src="src/assets/photos-furniture/furn-worktable.png"
                  alt=""
                />
                <img
                  ref={furn_bed}
                  class="absolute left-0 top-0"
                  src="src/assets/photos-furniture/furn-bed.png"
                  alt=""
                />
                <img
                  ref={furn_macpc}
                  class="absolute left-0 top-0"
                  src="src/assets/photos-furniture/furn-macpc.png"
                  alt=""
                />
                <img
                  ref={furn_shelfdecor}
                  class="absolute left-0 top-0"
                  src="src/assets/photos-furniture/furn-shelfdecor.png"
                  alt=""
                />
                <img
                  ref={furn_tablelamp}
                  class="absolute left-0 top-0"
                  src="src/assets/photos-furniture/furn-tablelamp.png"
                  alt=""
                />
                <img
                  ref={furn_wallbookshelf}
                  class="absolute left-0 top-0"
                  src="src/assets/photos-furniture/furn-wallbookshelf.png"
                  alt=""
                />
                <img
                  ref={furn_wallpainting}
                  class="absolute left-0 top-0"
                  src="src/assets/photos-furniture/furn-wallpainting.png"
                  alt=""
                />
                <img
                  ref={furn_wallshelf}
                  class="absolute left-0 top-0"
                  src="src/assets/photos-furniture/furn-wallshelf.png"
                  alt=""
                />
                <img
                  ref={furn_wallstickies}
                  class="absolute left-0 top-0"
                  src="src/assets/photos-furniture/furn-wallstickies.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default LandingAnimationSection;
