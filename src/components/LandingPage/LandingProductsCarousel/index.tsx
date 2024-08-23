import { createResource, For, Match, Show, Switch } from "solid-js";
import { ComponentRefProps } from "../../../ComponentRefProps";
import { FaSolidSpinner } from "solid-icons/fa";

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
        class="flex w-full snap-x snap-mandatory items-center gap-4 overflow-x-auto bg-timberwolf-900 px-8 py-8 xl:gap-8 xl:px-16 dark:bg-dim_gray"
      >
        <For each={shopItems()}>
          {(item, index) => (
            <div class="flex-grow-1 flex h-full w-full flex-shrink-0 basis-full snap-center flex-col items-center justify-center overflow-clip rounded-md bg-timberwolf dark:bg-black_olive dark:text-white">
              <div class="inline-flex w-full flex-grow flex-wrap overflow-auto">
                <div class="rounded-lg bg-timberwolf p-6 dark:bg-black_olive dark:text-white">
                  <div class="aspect-square h-48 w-full sm:h-64">
                    <img
                      src={item.img_link}
                      alt=""
                      class="mb-4 size-full rounded-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div class="px-6 sm:pb-4">
                    <h3 class="text-lg font-medium text-gray-900 dark:text-white">
                      {item.iname}
                    </h3>
                    <p class="mb-5 mt-1.5 text-xl font-bold text-gray-700 dark:text-white">
                      {Number(item.price).toLocaleString("en", {
                        style: "currency",
                        currency: "PHP",
                      })}
                    </p>
                  </div>
                </div>
                <div class="w-min min-w-72 flex-grow p-6 dark:bg-black_olive-300">
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
            </div>
          )}
        </For>
      </div>
    </main>
  );
};
export default LandingProductsCarousel;
