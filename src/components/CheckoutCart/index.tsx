import { TbSearch } from "solid-icons/tb";
import { RiSystemDeleteBin2Fill } from "solid-icons/ri";
import { ImCross } from "solid-icons/im";
import {
  For,
  Match,
  Setter,
  Show,
  Switch,
  createEffect,
  createSignal,
} from "solid-js";
import { CartItemEntry } from "./CartItemEntry";
import { ProductItem } from "../ProductsPage/ProductItem";

interface CartOffcanvasProps {
  isShow: boolean;
  setShow: Setter<boolean>;
  itemsOnCart: CartItemEntry[];
  onItemDelete: (item: CartItemEntry) => void;
  onItemSearch: (item: ProductItem) => void;
}
const CartOffcanvas = (props: CartOffcanvasProps) => {
  // TODO: Themeing
  const [totalPrice, setTotalPrice] = createSignal(0);
  createEffect(() => {
    let totalPriceTmp = 0;
    for (const item of props.itemsOnCart) {
      totalPriceTmp += item[0].price * item[1];
    }
    setTotalPrice(totalPriceTmp);
  });
  return (
    <div
      class={`${props.isShow ? "" : ""} relative z-20`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class={`${props.isShow ? "opacity-1 visible" : "invisible opacity-0"} fixed inset-0 bg-gray-500 bg-opacity-75 transition-offcanvas`}
        aria-hidden="true"
        onClick={() => {
          props.setShow(false);
        }}
      ></div>

      <div
        class={`pointer-events-none fixed inset-0 z-10 h-screen w-screen overflow-y-auto transition-offcanvas`}
      >
        <div class="relative flex min-h-full flex-col items-end">
          <div
            class={`${props.isShow ? "translate-x-0" : "translate-x-full"} pointer-events-auto relative flex w-full flex-[1_1_1px] flex-grow transform flex-col overflow-hidden bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:rounded-bl-lg sm:rounded-tl-lg dark:bg-walnut_brown-400`}
          >
            <div class="flex w-full flex-grow flex-col overflow-auto px-4 pt-8 sm:px-6">
              <div class="flex flex-row items-baseline">
                <h1 class="mb-5 inline-block flex-grow text-2xl font-bold text-gray-700 dark:text-white">
                  Your Checkout Cart
                </h1>
                <button
                  onClick={() => {
                    props.setShow(false);
                  }}
                >
                  <ImCross class="dark:text-white" />
                </button>
              </div>
              <hr class={props.itemsOnCart.length !== 0 ? "mb-3.5" : "mb-5"} />
              <Switch>
                <Match when={props.itemsOnCart.length === 0}>
                  <div class="mt-1.5 text-center dark:text-white">
                    No items in cart, yet
                  </div>
                </Match>
                <Match when={props.itemsOnCart.length !== 0}>
                  <div class="flex-grow overflow-y-scroll">
                    <p class="mb-3.5 text-sm dark:text-white">
                      Click/tap on the items to show other options.
                    </p>
                    <For each={props.itemsOnCart}>
                      {(item) => {
                        if (item) {
                          let shopItem = item[0];
                          let amount = item[1];
                          let buttonsRef!: HTMLDivElement;
                          let isButtonsExpanded = false;
                          return (
                            <div class="mb-3 flex flex-col overflow-hidden rounded-lg bg-timberwolf-900 shadow dark:bg-black_olive-500">
                              <div
                                class="flex flex-row"
                                onClick={() => {
                                  if (isButtonsExpanded) {
                                    buttonsRef.classList.replace("h-10", "h-0");
                                  } else {
                                    buttonsRef.classList.replace("h-0", "h-10");
                                  }

                                  isButtonsExpanded = !isButtonsExpanded;
                                }}
                              >
                                <div class="m-2 h-full w-28 overflow-clip rounded-lg sm:m-0 sm:rounded-none xl:w-32">
                                  <img
                                    src={shopItem.img_link}
                                    alt=""
                                    class="object-contain"
                                  />
                                </div>
                                <div class="flex flex-grow flex-col py-2 ps-4">
                                  <h2 class="mb-1 inline-block text-base dark:text-white">
                                    {shopItem.iname}
                                  </h2>
                                  <p class="text-base font-bold dark:text-white">
                                    {Number(shopItem.price).toLocaleString(
                                      "en",
                                      {
                                        style: "currency",
                                        currency: "PHP",
                                      },
                                    )}
                                  </p>
                                </div>
                                <div class="flex h-full flex-col items-end px-4 py-2">
                                  <h2 class="mb-1 inline-block text-sm dark:text-white">
                                    {amount}x
                                  </h2>
                                  <p class="text-sm font-bold dark:text-white">
                                    {Number(
                                      shopItem.price * amount,
                                    ).toLocaleString("en", {
                                      style: "currency",
                                      currency: "PHP",
                                    })}
                                  </p>
                                </div>
                              </div>
                              <div
                                ref={buttonsRef}
                                class="flex h-0 w-full origin-bottom transform flex-col-reverse overflow-clip bg-jet-900 transition-all dark:bg-jet-500"
                              >
                                <div class="flex w-full flex-row">
                                  <div
                                    class="flex h-full flex-grow flex-col-reverse items-center !p-3 dark:text-white"
                                    onClick={() => {
                                      if (item) props.onItemSearch(item[0]);
                                    }}
                                  >
                                    <TbSearch />
                                  </div>
                                  <div
                                    class="flex h-full flex-grow flex-col-reverse items-center bg-red-900 p-3 text-white"
                                    onClick={() => {
                                      if (item) props.onItemDelete(item);
                                    }}
                                  >
                                    <RiSystemDeleteBin2Fill />
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        }
                      }}
                    </For>
                  </div>
                </Match>
              </Switch>
            </div>

            <Show when={props.itemsOnCart.length > 0}>
              <div class="bg-walnut_brown-900dark:bg-walnut_brown-300 flex dark:text-white">
                <div class="flex-grow p-4">Total</div>
                <div class="p-4">
                  {Number(totalPrice()).toLocaleString("en", {
                    style: "currency",
                    currency: "PHP",
                  })}
                </div>
                <button class="rounded-ss-lg bg-yellow-400 px-8 py-4 text-black">
                  Checkout
                </button>
              </div>
            </Show>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartOffcanvas;
