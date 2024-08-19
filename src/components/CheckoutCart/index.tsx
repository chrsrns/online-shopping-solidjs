import { TbSearch } from "solid-icons/tb";
import { RiSystemDeleteBin2Fill } from "solid-icons/ri";
import { For, Setter } from "solid-js";

interface CartOffcanvasProps {
  setShow: Setter<boolean>;
}
const CartOffcanvas = (props: CartOffcanvasProps) => {
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
          // props.setShow(false);
        }}
      ></div>

      <div class="pointer-events-none fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="relative flex min-h-full flex-row-reverse">
          <div class="pointer-events-auto relative right-0 w-full transform animate-fade_in_fast overflow-hidden bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:rounded-bl-lg sm:rounded-tl-lg dark:bg-walnut_brown-400">
            <div class="sm:flex sm:items-start">
              <div class="inline-block w-full overflow-visible p-6 pt-10 sm:p-8">
                <h1 class="mb-5 inline-block text-2xl font-bold text-gray-700 dark:text-white">
                  Your Checkout Cart
                </h1>
                <hr class="mb-5" />
                <For each={[1, 2, 3, 4]}>
                  {(item) => {
                    let buttonsRef!: HTMLDivElement;
                    let isButtonsExpanded = false;
                    return (
                      <div class="mb-3 flex flex-col overflow-hidden rounded-lg bg-black_olive-500 shadow">
                        <div
                          class="flex flex-row items-center"
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
                              src="https://img.freepik.com/free-photo/high-angle-desk-assortment-with-laptop_23-2149013922.jpg?semt=ais_hybrid"
                              alt=""
                              class="object-contain"
                            />
                          </div>
                          <div class="flex flex-col py-2 ps-4">
                            <h2 class="mb-1 inline-block text-base text-gray-700 dark:text-white">
                              Product Name
                            </h2>
                            <p class="text-base font-bold text-gray-700 dark:text-white">
                              {Number(40.99).toLocaleString("en", {
                                style: "currency",
                                currency: "PHP",
                              })}
                            </p>
                          </div>
                        </div>
                        <div
                          ref={buttonsRef}
                          class="flex h-0 w-full origin-bottom transform flex-col-reverse overflow-clip bg-jet-500 transition-all"
                        >
                          <div class="flex w-full flex-row">
                            <div class="flex h-full flex-grow flex-col-reverse items-center !p-3 text-white">
                              <TbSearch />
                            </div>
                            <div class="flex h-full flex-grow flex-col-reverse items-center bg-red-900 p-3 text-white">
                              <RiSystemDeleteBin2Fill />
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }}
                </For>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartOffcanvas;
