import {
  DEV,
  For,
  Match,
  Setter,
  Show,
  Switch,
  createEffect,
  createResource,
  createSignal,
} from "solid-js";
import Topbar from "../Topbar";
import ProductItemModal from "../ProductItemModal";
import { match } from "oxide.ts";
import { ProductItem } from "./ProductItem";
import CartOffcanvas from "../CheckoutCart";
import { CartItemEntry } from "../CheckoutCart/CartItemEntry";
import { FaSolidCartShopping } from "solid-icons/fa";
import toast, { Toaster } from "solid-toast";
import { useSearchParams } from "@solidjs/router";

const fetchShopItemsUrl = DEV
  ? "http://127.0.0.1:8000/api/shopitems"
  : "/api/shopitems";
const fetchShopItems = async () => {
  const response = await fetch(fetchShopItemsUrl);
  return response.json();
};
const addToCartToast = () =>
  toast("Added to cart.", {
    className: "dark:!bg-jet-500 dark:!text-white",
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

const ProductsPage = () => {
  let topBar!: HTMLDivElement;
  const [shopItems] = createResource(fetchShopItems);
  const [showOffCanvas, setShowOffCanvas] = createSignal(false);
  const [productItem, setProductItem] = createSignal<ProductItem>();
  const [cartItems, setCartItems] = createSignal<CartItemEntry[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const productId = () => searchParams.product_id;

  createEffect(() => {
    if (shopItems()) {
      console.log("Data: ");
      console.log(shopItems());
      if (productId()) {
        const productId_safe = productId() as string;
        let isSet = false;

        for (const item of shopItems()) {
          const productItemObj = ProductItem.fromData(item);
          match(productItemObj, {
            Some: (productItemMatched) => {
              if (productItemMatched.id === parseInt(productId_safe)) {
                setProductItem(productItemMatched);
                isSet = true;
              }
            },
            None: () => {},
          });
        }

        if (!isSet) {
          toast("Invalid product link", {
            className: "dark:!bg-jet-500 dark:!text-white",
            duration: 3000,
          });
          setProductItem(undefined);
          setSearchParams({
            ...searchParams,
            product_id: "",
          });
        }
      }
    }
  });

  // TODO: Make cards have a layout friendly to square aspect ratio image
  // This is because most images taken from the Internet are in this aspect ratio.
  return (
    <div
      class={`${productId() || showOffCanvas() ? "overflow-hidden" : "overflow-y-scroll"} flex h-screen flex-col dark:bg-walnut_brown-400`}
    >
      <Show when={productId() && productItem()}>
        <ProductItemModal
          // casted since the show element already checks for this
          productItem={productItem() as ProductItem}
          onCheckoutClick={() => {
            addToCart(cartItems(), productItem() as ProductItem, setCartItems);
          }}
          onCloseClick={() => {
            setSearchParams({
              ...searchParams,
              product_id: "",
            });
          }}
        ></ProductItemModal>
      </Show>
      <Topbar
        ref={topBar}
        children={[
          <button
            class="block rounded bg-timberwolf-600 p-2.5 text-neutral-800 transition hover:text-gray-600/75 dark:bg-jet-400 dark:text-white dark:hover:text-neutral-400"
            onClick={() => {
              setShowOffCanvas(true);
            }}
          >
            <span class="sr-only">Show Checkout Cart</span>
            <FaSolidCartShopping />
          </button>,
        ]}
      />
      <CartOffcanvas
        isShow={showOffCanvas()}
        setShow={setShowOffCanvas}
        itemsOnCart={cartItems()}
        onItemDelete={(item) => {
          let cartItemsCopy = [...cartItems()];
          for (const cartItemFromCopy of cartItemsCopy) {
            if (
              cartItemFromCopy[0].id === item[0].id &&
              cartItemFromCopy[0].iname === item[0].iname
            ) {
              const index = cartItemsCopy.indexOf(cartItemFromCopy);
              // NOTE: Should not be possible to be false, but placed for good measure.
              // Consider using a indexed for loop instead.
              if (index > -1) {
                cartItemsCopy.splice(index, 1);
                setCartItems(cartItemsCopy);
                break;
              }
            }
          }
        }}
        onItemSearch={(item) => {
          setShowOffCanvas(false);
          setSearchParams({ ...searchParams, product_id: item.id });
        }}
      />
      <div class="relative flex-grow overflow-scroll">
        <div
          class={`${productId() || showOffCanvas() ? "invisible opacity-0" : "visible opacity-100"} pointer-events-none fixed z-[15] h-full w-full transform p-4 transition-all`}
        >
          <Toaster containerStyle={{ position: "sticky", "z-index": 15 }} />
        </div>
        <h1 class="pb-10 pt-10 text-center text-4xl dark:text-white">
          All Items
        </h1>
        <div class="grid grid-cols-1 gap-4 px-8 sm:px-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <Switch>
            <Match when={shopItems.error}>
              <span>Error: {shopItems.error}</span>
            </Match>
            <Match when={shopItems()}>
              <For each={shopItems()}>
                {(item) => {
                  const productItemFromData = ProductItem.fromData(item);
                  return match(productItemFromData, {
                    Some: (productItem) => {
                      return (
                        <a
                          href="#"
                          class="group relative block overflow-hidden rounded-lg shadow-lg"
                          onClick={() => {
                            toast.remove();
                            setSearchParams({
                              ...searchParams,
                              product_id: productItem.id,
                            });
                          }}
                        >
                          <button class="absolute end-4 top-4 z-10 hidden rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
                            <span class="sr-only">Wishlist</span>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="h-4 w-4"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                              />
                            </svg>
                          </button>

                          <img
                            src={productItem.img_link}
                            alt=""
                            class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                          />

                          <div class="relative bg-white p-6 dark:bg-black_olive">
                            <h3 class="text-lg font-medium text-gray-900 dark:text-white">
                              {productItem.iname}
                            </h3>

                            <p class="mt-1.5 text-sm text-gray-700 dark:text-white">
                              {Number(productItem.price).toLocaleString("en", {
                                style: "currency",
                                currency: "PHP",
                              })}
                            </p>

                            <form class="mt-4">
                              <button
                                class="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
                                onClick={(event) => {
                                  event.stopPropagation();
                                  addToCartToast();
                                  addToCart(
                                    cartItems(),
                                    productItem,
                                    setCartItems,
                                  );
                                }}
                              >
                                Add to Cart
                              </button>
                            </form>
                          </div>
                        </a>
                      );
                    },
                    None: () => {
                      return <div>Error</div>;
                    },
                  });
                }}
              </For>
            </Match>
          </Switch>
        </div>
        <div class="py-12 text-center text-lg dark:text-timberwolf">
          End of the list
        </div>
      </div>
    </div>
  );
};
export default ProductsPage;

function addToCart(
  cartItems: CartItemEntry[],
  productItem: ProductItem,
  setCartItems: Setter<CartItemEntry[]>,
) {
  let isInCart = false;
  // NOTE: Needs to ba a structured clone, since the change
  // wont propagate to the other components if otherwise
  let cartItemsCopy = structuredClone(cartItems);
  for (const cartItem of cartItemsCopy) {
    if (
      cartItem[0].id === productItem.id &&
      cartItem[0].iname === productItem.iname
    ) {
      isInCart = true;
      cartItem[1]++;
      setCartItems(cartItemsCopy);
      break;
    }
  }
  if (!isInCart) {
    setCartItems([...cartItems, [productItem, 1]]);
  }
}
