import { For } from "solid-js";

const LandingProductsCarousel = () => {
  return (
    <main class="snap-center">
      <div class="flex h-screen w-full snap-x snap-mandatory items-center gap-8 overflow-x-auto bg-timberwolf-900 px-16 py-8 dark:bg-dim_gray">
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
