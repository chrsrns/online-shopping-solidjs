import { createResource, For, Match, Show, Switch } from "solid-js";
import { ComponentRefProps } from "../../../ComponentRefProps";
import { FaSolidSpinner } from "solid-icons/fa";
import { A } from "@solidjs/router";

const fetchShopItems = async () => {
  const response = await fetch("http://127.0.0.1:8000/api/shopitems");
  return response.json();
};
const fetchShopItemDesc = async (id: number) => {
  const response = await fetch(`http://127.0.0.1:8000/api/shopitemdescs/${id}`);
  return response.json();
};
const LandingProductsCarousel = (props: ComponentRefProps) => {
  const [shopItems] = createResource(fetchShopItems);
  return (
    <main class="snap-center">
      <div
        ref={props.ref}
        class="flex w-full flex-col items-center bg-timberwolf-900 pt-8 dark:bg-dim_gray"
      >
        <div class="max-w-xl px-4 text-center lg:text-left rtl:lg:text-right">
          <h2 class="mb-8 text-3xl font-bold tracking-tight text-gray-900 sm:mb-10 sm:text-4xl dark:text-white">
            Our most famous products
          </h2>
        </div>
        <div class="flex w-full flex-grow snap-x snap-mandatory items-center gap-4 overflow-x-auto px-8 pb-8 xl:gap-8 xl:px-16">
          <For each={shopItems()}>
            {(item, index) => (
              <div class="flex h-full flex-shrink-0 flex-grow basis-full snap-center flex-col items-center justify-center overflow-clip rounded-md bg-timberwolf-700 sm:basis-4/5 dark:bg-walnut_brown-400 dark:text-white">
                <div class="flex w-full flex-grow flex-col items-stretch overflow-auto sm:flex-row">
                  <div class="flex flex-col items-center rounded-lg p-6">
                    <div class="mb-4 size-48">
                      <img
                        src={item.img_link}
                        alt=""
                        class="size-full rounded-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div class="flex flex-col px-6 text-center sm:pb-4">
                      <h3 class="text-lg font-medium text-gray-900 dark:text-white">
                        {item.iname}
                      </h3>
                      <p class="mt-1.5 text-xl font-bold text-gray-700 dark:text-white">
                        {Number(item.price).toLocaleString("en", {
                          style: "currency",
                          currency: "PHP",
                        })}
                      </p>
                    </div>
                  </div>
                  <div class="flex-grow overflow-y-scroll bg-black_olive-900 p-6 dark:bg-black_olive-300">
                    {(() => {
                      const [descsFetched] = createResource(
                        item.id,
                        fetchShopItemDesc,
                      );

                      return (
                        <Switch>
                          <Match when={descsFetched.loading}>
                            <div class="flex w-full justify-center pb-6 dark:text-white">
                              <FaSolidSpinner class="animate-fade_in_slow_loading text-lg" />
                            </div>
                          </Match>
                          <Match when={descsFetched.error}>
                            <div class="flex w-full justify-center pb-6 dark:text-white">
                              <span>Network error. Please try again.</span>
                            </div>
                          </Match>
                          <Match when={descsFetched()}>
                            <h3 class="mb-1.5 text-xl font-bold text-gray-700 dark:text-white">
                              Product Description
                            </h3>
                            <For each={descsFetched()}>
                              {(descItem) => {
                                return (
                                  <Show
                                    when={typeof descItem.content === "string"}
                                  >
                                    <p class="mb-1.5 dark:text-white">
                                      {descItem.content}
                                    </p>
                                  </Show>
                                );
                              }}
                            </For>
                          </Match>
                        </Switch>
                      );
                    })()}
                  </div>
                </div>

                <A href={`/shop?product_id=${item.id}`} class="w-full">
                  <button class="w-full bg-yellow-400 pb-2.5 pt-2 text-black">
                    Go to product page
                  </button>
                </A>
              </div>
            )}
          </For>
        </div>
      </div>
    </main>
  );
};
export default LandingProductsCarousel;
