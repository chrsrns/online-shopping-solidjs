import { A } from "@solidjs/router";
import { createResource, DEV, For } from "solid-js";
import { ShopItemsPreview } from "./ShopItemsPreview";
import { ComponentRefProps } from "../../../ComponentRefProps";
import { createMediaQuery } from "@solid-primitives/media";

const fetchShopItemsUrl = DEV
  ? "http://127.0.0.1:8000/api/shopitems"
  : "/api/shopitems";
const fetchShopItems = async () => {
  const response = await fetch(fetchShopItemsUrl);
  return response.json();
};
const LandingDirectToShop = (props: ComponentRefProps) => {
  const isSmall = createMediaQuery("(max-width: 640px)");
  const gridChildCount = () => (isSmall() ? 3 : 5);
  const [shopItems] = createResource(fetchShopItems);

  return (
    <div class="snap-center">
      <section
        ref={props.ref}
        class="flex justify-center lg:h-auto dark:bg-walnut_brown-400"
      >
        <div class="max-w-screen-xl px-4 py-8 sm:my-auto sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div class="grid grid-cols-1 justify-items-center gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
            <div class="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
              <h2 class="text-3xl font-bold sm:text-4xl dark:text-gray-100">
                All your furniture needs...
              </h2>

              <p class="mt-4 text-gray-600 dark:text-gray-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                vero aliquid sint distinctio iure ipsum cupiditate?{" "}
                <span class="hidden sm:block">
                  Quis, odit assumenda? Deleniti quasi inventore, libero
                  reiciendis minima aliquid tempora. Obcaecati, autem.
                </span>
              </p>

              <A
                href="/shop"
                class="mt-8 inline-block rounded bg-yellow-400 px-12 py-3 text-sm font-medium text-black"
              >
                Shop now!
              </A>
            </div>

            <div class="grid w-fit grid-cols-2 justify-items-center gap-4 sm:grid-cols-3">
              <For each={shopItems()}>
                {(item, index) => {
                  if (index() > 2) return <></>;
                  return (
                    <A
                      href={`/shop?product_id=${item.id}`}
                      class="block aspect-square w-32 overflow-clip rounded-xl border shadow-sm hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring sm:w-36"
                    >
                      <img class="h-full object-cover" src={item.img_link} />

                      <h2 class="mt-2 hidden font-bold dark:text-timberwolf-800">
                        Accountant
                      </h2>
                    </A>
                  );
                }}
              </For>
              <A
                class="flex aspect-square w-32 items-center justify-center overflow-clip rounded-xl border shadow-sm hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring sm:w-36"
                href="/shop"
              >
                <h2 class="font-bold dark:text-timberwolf-800">And more...</h2>
              </A>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default LandingDirectToShop;
