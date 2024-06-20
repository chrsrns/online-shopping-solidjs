import { A } from "@solidjs/router";
import { For } from "solid-js";
import { ShopItemsPreview } from "./ShopItemsPreview";
import { ComponentRefProps } from "../../../ComponentRefProps";

const LandingDirectToShop = (props: ComponentRefProps) => {
  return (
    <div class="snap-center">
      <section
        ref={props.ref}
        class="flex justify-center lg:h-auto dark:bg-walnut_brown-400"
      >
        <div class="my-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div class="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
            <div class="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
              <h2 class="text-3xl font-bold sm:text-4xl dark:text-gray-100">
                Find your career path
              </h2>

              <p class="mt-4 text-gray-600 dark:text-gray-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                vero aliquid sint distinctio iure ipsum cupiditate? Quis, odit
                assumenda? Deleniti quasi inventore, libero reiciendis minima
                aliquid tempora. Obcaecati, autem.
              </p>

              <A
                href="/shop"
                class="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400 dark:bg-timberwolf-500 dark:text-black hover:dark:bg-timberwolf-300 hover:dark:text-white"
              >
                Get Started Today
              </A>
            </div>

            <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <For each={[...Array(5).keys()]}>{() => ShopItemsPreview()}</For>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default LandingDirectToShop;
