import { createEffect, createSignal } from "solid-js";
import { ComponentRefProps } from "../../../ComponentRefProps";
import BlobFloor from "/src/assets/blob-floor1.svg";
import BlobFurnSpace from "/src/assets/photos-furniture/furn-space.png";
import BlobFurnChair from "/src/assets/photos-furniture/furn-chair.png";
import BlobFurnWorktable from "/src/assets/photos-furniture/furn-worktable.png";
import BlobFurnBed from "/src/assets/photos-furniture/furn-bed.png";
import BlobFurnMacPc from "/src/assets/photos-furniture/furn-macpc.png";
import BlobFurnShelfDecor from "/src/assets/photos-furniture/furn-shelfdecor.png";
import BlobFurnTableLamp from "/src/assets/photos-furniture/furn-tablelamp.png";
import BlobFurnWallBookshelf from "/src/assets/photos-furniture/furn-wallbookshelf.png";
import BlobFurnWallPainting from "/src/assets/photos-furniture/furn-wallpainting.png";
import BlobFurnWallShelf from "/src/assets/photos-furniture/furn-wallshelf.png";
import BlobFurnWallStickies from "/src/assets/photos-furniture/furn-wallstickies.png";

interface LandingAnimationSectionProps extends ComponentRefProps {
  animate: boolean;
}

declare global {
  interface HTMLImageElement {
    replaceClassName(oldToken: string, newToken: string): HTMLImageElement;
  }
}

HTMLImageElement.prototype.replaceClassName = function (
  oldToken: string,
  newToken: string,
): HTMLImageElement {
  this.classList.replace(oldToken, newToken);
  return this;
};

const LandingAnimationSection = (props: LandingAnimationSectionProps) => {
  const [didAnimate, setDidAnimate] = createSignal(false);

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

  const opacity_0 = "opacity-0";
  const opacity_1 = "opacity-100";
  const translate_r_0 = "translate-x-0";
  const translate_r_52 = "translate-x-32";
  const translate_l_0 = "-translate-x-0";
  const translate_l_52 = "-translate-x-32";

  createEffect(() => {
    if (props.animate && !didAnimate()) {
      setDidAnimate(true);
      console.log("animate now");

      const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
      (async () => {
        furn_chair
          .replaceClassName(opacity_0, opacity_1)
          .replaceClassName(translate_r_52, translate_r_0)
          .replaceClassName(translate_l_52, translate_l_0);
        await delay(150);
        furn_worktable
          .replaceClassName(opacity_0, opacity_1)
          .replaceClassName(translate_r_52, translate_r_0)
          .replaceClassName(translate_l_52, translate_l_0);
        await delay(150);
        furn_bed
          .replaceClassName(opacity_0, opacity_1)
          .replaceClassName(translate_r_52, translate_r_0)
          .replaceClassName(translate_l_52, translate_l_0);
        await delay(150);
        furn_macpc
          .replaceClassName(opacity_0, opacity_1)
          .replaceClassName(translate_r_52, translate_r_0)
          .replaceClassName(translate_l_52, translate_l_0);
        await delay(150);
        furn_shelfdecor
          .replaceClassName(opacity_0, opacity_1)
          .replaceClassName(translate_r_52, translate_r_0)
          .replaceClassName(translate_l_52, translate_l_0);
        await delay(150);
        furn_tablelamp
          .replaceClassName(opacity_0, opacity_1)
          .replaceClassName(translate_r_52, translate_r_0)
          .replaceClassName(translate_l_52, translate_l_0);
        await delay(150);
        furn_wallbookshelf
          .replaceClassName(opacity_0, opacity_1)
          .replaceClassName(translate_r_52, translate_r_0)
          .replaceClassName(translate_l_52, translate_l_0);
        await delay(150);
        furn_wallpainting
          .replaceClassName(opacity_0, opacity_1)
          .replaceClassName(translate_r_52, translate_r_0)
          .replaceClassName(translate_l_52, translate_l_0);
        await delay(150);
        furn_wallshelf
          .replaceClassName(opacity_0, opacity_1)
          .replaceClassName(translate_r_52, translate_r_0)
          .replaceClassName(translate_l_52, translate_l_0);
        await delay(150);
        furn_wallstickies
          .replaceClassName(opacity_0, opacity_1)
          .replaceClassName(translate_r_52, translate_r_0)
          .replaceClassName(translate_l_52, translate_l_0);
        await delay(150);
      })();
    }
  });

  return (
    <div class="snap-center" id="animation">
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
              <p class="text-md mx-4 mt-3 leading-relaxed text-gray-600 sm:text-xl md:mt-8 lg:mx-12 dark:text-gray-300">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>

              <p class="text-md mb-8 mt-4 text-center text-gray-600 sm:text-xl md:mt-8 md:text-left dark:text-gray-300">
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
                src={BlobFloor}
                alt=""
              />

              <div class="relative w-full scale-90 md:scale-100 xl:mx-auto xl:max-w-lg 2xl:origin-bottom 2xl:scale-110">
                <img class="relative" src={BlobFurnSpace} alt="" />
                <img
                  ref={furn_chair}
                  class={`absolute ${translate_l_52} top-0 opacity-0 transition duration-1000`}
                  src={BlobFurnChair}
                  alt=""
                />
                <img
                  ref={furn_worktable}
                  class={`absolute ${translate_r_52} top-0 opacity-0 transition duration-1000`}
                  src={BlobFurnWorktable}
                  alt=""
                />
                <img
                  ref={furn_bed}
                  class={`absolute ${translate_r_52} top-0 opacity-0 transition duration-1000`}
                  src={BlobFurnBed}
                  alt=""
                />
                <img
                  ref={furn_macpc}
                  class={`absolute ${translate_r_52} top-0 opacity-0 transition duration-1000`}
                  src={BlobFurnMacPc}
                  alt=""
                />
                <img
                  ref={furn_shelfdecor}
                  class={`absolute ${translate_l_52} top-0 opacity-0 transition duration-1000`}
                  src={BlobFurnShelfDecor}
                  alt=""
                />
                <img
                  ref={furn_tablelamp}
                  class={`absolute ${translate_r_52} top-0 opacity-0 transition duration-1000`}
                  src={BlobFurnTableLamp}
                  alt=""
                />
                <img
                  ref={furn_wallbookshelf}
                  class={`absolute ${translate_l_52} top-0 opacity-0 transition duration-1000`}
                  src={BlobFurnWallBookshelf}
                  alt=""
                />
                <img
                  ref={furn_wallpainting}
                  class={`absolute ${translate_r_52} top-0 opacity-0 transition duration-1000`}
                  src={BlobFurnWallPainting}
                  alt=""
                />
                <img
                  ref={furn_wallshelf}
                  class={`absolute ${translate_l_52} top-0 opacity-0 transition duration-1000`}
                  src={BlobFurnWallShelf}
                  alt=""
                />
                <img
                  ref={furn_wallstickies}
                  class={`absolute ${translate_r_52} top-0 opacity-0 transition duration-1000`}
                  src={BlobFurnWallStickies}
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
