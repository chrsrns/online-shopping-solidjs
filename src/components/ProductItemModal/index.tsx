import {
  DEV,
  For,
  Match,
  Setter,
  Show,
  Switch,
  createEffect,
  createResource,
} from "solid-js";
import { ProductItem } from "../ProductsPage/ProductItem";
import { FaSolidSpinner } from "solid-icons/fa";
import toast, { Toaster } from "solid-toast";

interface ProductItemModalProps {
  productItem: ProductItem;
  onCheckoutClick: () => void;
  onCloseClick: () => void;
}

const fetchShopItemDescUrl = DEV
  ? "http://127.0.0.1:8000/api/shopitemdescs"
  : "/api/shopitemdescs";
const fetchShopItemDesc = async (id: number) => {
  const response = await fetch(`${fetchShopItemDescUrl}/${id}`);
  return response.json();
};
const fetchShopItemImgsUrl = DEV
  ? "http://127.0.0.1:8000/api/shopitemimages"
  : "/api/shopitemimages";
const fetchShopItemImgs = async (id: number) => {
  const response = await fetch(`${fetchShopItemImgsUrl}/${id}`);
  return response.json();
};
const addToCartToast = () =>
  toast("Added to cart.", {
    className: "dark:!bg-jet-500 dark:!text-white",
    duration: 15000,
    icon: (
      <div class="dark:!text-white">
        <svg
          fill="currentColor"
          stroke-width="0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          style="overflow: visible; color: currentcolor;"
          height="1em"
          width="1em"
        >
          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7l233.4-233.3c12.5-12.5 32.8-12.5 45.3 0z"></path>
        </svg>
      </div>
    ),
  });

const ProductItemModal = (props: ProductItemModalProps) => {
  const [descsFetched] = createResource(
    props.productItem.id,
    fetchShopItemDesc,
  );
  const [imagesFetched] = createResource(
    props.productItem.id,
    fetchShopItemImgs,
  );

  // TODO: Trigger close action on mobile back action
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
          props.onCloseClick();
        }}
      ></div>

      <div class="pointer-events-none fixed inset-0 z-10 h-dvh w-screen">
        <div class="flex min-h-full flex-col items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <div class="animate-fade_in_fast pointer-events-auto relative flex w-full flex-[1_1_1px] flex-grow transform flex-col overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:max-w-xl lg:max-w-2xl dark:bg-walnut_brown-400">
            <div class="w-full flex-grow overflow-auto">
              <img
                src={props.productItem.img_link}
                alt=""
                class="mb-4 h-64 w-full bg-white object-contain py-2 transition duration-500 group-hover:scale-105 sm:h-72"
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
                      {(item) => {
                        return (
                          <Show when={typeof item.content === "string"}>
                            <p class="mb-1.5 dark:text-white">{item.content}</p>
                          </Show>
                        );
                      }}
                    </For>
                  </Match>
                </Switch>
                <Switch>
                  <Match when={imagesFetched.loading}>
                    <div class="flex w-full justify-center pb-6 dark:text-white">
                      <FaSolidSpinner class="animate-fade_in_slow_loading text-lg" />
                    </div>
                  </Match>
                  <Match when={imagesFetched.error}>
                    <div class="flex w-full justify-center pb-6 dark:text-white">
                      <span>Network error. Please try again.</span>
                    </div>
                  </Match>
                  {/* TODO: Type Unsafe */}
                  <Match when={imagesFetched() && imagesFetched().length > 0}>
                    <div class="mt-3 flex h-48 snap-x snap-mandatory flex-row gap-3 overflow-x-scroll">
                      <For each={imagesFetched()}>
                        {(item) => {
                          return (
                            <img class="snap-center" src={item.img_link} />
                          );
                        }}
                      </For>
                    </div>
                  </Match>
                </Switch>
              </div>
            </div>
            <div class="bg-timberwolf-800 px-4 py-3 sm:flex sm:gap-4 sm:px-6 dark:bg-black_olive">
              <button
                class="block w-full rounded bg-yellow-400 p-2 text-sm font-medium transition hover:scale-105"
                onClick={() => {
                  props.onCheckoutClick();
                  addToCartToast();
                }}
              >
                Add to Cart
              </button>
              <button
                type="button"
                class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                onClick={() => {
                  props.onCloseClick();
                  toast.remove();
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};
export default ProductItemModal;
