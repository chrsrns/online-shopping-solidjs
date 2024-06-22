import { For } from "solid-js";
import { ComponentRefProps } from "../../../ComponentRefProps";

const LandingProductsCarousel = (props: ComponentRefProps) => {
  return (
    <main class="snap-center">
      <div
        ref={props.ref}
        class="flex w-full snap-x snap-mandatory items-center gap-4 overflow-x-auto bg-timberwolf-900 px-8 py-8 xl:gap-8 xl:px-16 dark:bg-dim_gray"
      >
        <For each={[...Array(10).keys()]}>
          {(item, index) => (
            <div class="flex-grow-1 flex h-full w-full flex-shrink-0 basis-full snap-center flex-col items-center justify-center rounded-md bg-timberwolf dark:bg-black_olive dark:text-white">
              {item}
            </div>
          )}
        </For>
      </div>
    </main>
  );
};
export default LandingProductsCarousel;
