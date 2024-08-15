import { Setter, Show, onMount } from "solid-js";
import { ProductItem } from "../ProductsPage/ProductItem";
import { Option, match } from "oxide.ts";

interface ProductItemModalProps {
  setShow: Setter<boolean>;
  productItem: Option<ProductItem>;
}
const ProductItemModal = (props: ProductItemModalProps) => {
  return (
    <div
      class="relative z-20"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg dark:bg-walnut_brown-400">
            <div class="sm:flex sm:items-start">
              {match(props.productItem, {
                Some: (productItem) => {
                  return (
                    <div class="w-full">
                      <img
                        src={productItem.img_link}
                        alt=""
                        class="mb-4 h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                      />
                      <div class="px-6 sm:pb-4">
                        <h3 class="text-lg font-medium text-gray-900 dark:text-white">
                          {productItem.iname}
                        </h3>
                        <p class="mt-1.5 text-xl font-bold text-gray-700 dark:text-white">
                          {Number(productItem.price).toLocaleString("en", {
                            style: "currency",
                            currency: "PHP",
                          })}
                        </p>
                      </div>
                    </div>
                  );
                },
                None: () => {
                  return <div>Error</div>;
                },
              })}
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 dark:bg-black_olive">
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
