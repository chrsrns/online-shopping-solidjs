import { For, Match, Setter, Show, Switch, createResource } from "solid-js";
import { ProductItem } from "../ProductsPage/ProductItem";
import { FaSolidSpinner } from "solid-icons/fa";

interface ProductItemModalProps {
  setShow: Setter<boolean>;
  productItem: ProductItem;
}
const fetchShopItemDesc = async (id: number) => {
  const response = await fetch(`http://127.0.0.1:8000/api/shopitemdescs/${id}`);
  return response.json();
};
const ProductItemModal = (props: ProductItemModalProps) => {
  const [descsFetched] = createResource(
    props.productItem.id,
    fetchShopItemDesc,
  );
  return (
    <div
      class="relative z-20"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="fixed inset-0 animate-fade_in bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
        onClick={() => {
          props.setShow(false);
        }}
      ></div>

      <div class="pointer-events-none fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <div class="pointer-events-auto relative transform animate-fade_in_fast overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg dark:bg-walnut_brown-400">
            <div class="sm:flex sm:items-start">
              <div class="w-full">
                <img
                  src={props.productItem.img_link}
                  alt=""
                  class="mb-4 h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                />
                <div class="px-6 sm:pb-4">
                  <h3 class="text-lg font-medium text-gray-900 dark:text-white">
                    {props.productItem.iname}
                  </h3>
                  <p class="mb-5 mt-1.5 text-xl font-bold text-gray-700 dark:text-white">
                    {Number(props.productItem.price).toLocaleString("en", {
                      style: "currency",
                      currency: "PHP",
                    })}
                  </p>
                  <Switch>
                    <Match when={descsFetched.loading}>
                      <div class="flex w-full justify-center pb-6 dark:text-white">
                        <FaSolidSpinner class="animate-fade_in_loading text-lg" />
                      </div>
                    </Match>
                    <Match when={descsFetched.error}>
                      <div class="flex w-full justify-center pb-6 dark:text-white">
                        <span>Network error. Please try again.</span>
                      </div>
                    </Match>
                    <Match when={descsFetched()}>
                      <For each={descsFetched()}>
                        {(item) => {
                          return (
                            <Show when={typeof item.content === "string"}>
                              <p class="mb-1.5 dark:text-white">
                                {item.content}
                              </p>
                            </Show>
                          );
                        }}
                      </For>
                    </Match>
                  </Switch>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:flex sm:gap-4 sm:px-6 dark:bg-black_olive">
              <button class="block w-full rounded bg-yellow-400 p-2 text-sm font-medium transition hover:scale-105">
                Add to Cart
              </button>
              <button
                type="button"
                class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                onClick={() => {
                  props.setShow(false);
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductItemModal;
