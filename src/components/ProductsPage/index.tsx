import Topbar from "../Topbar";

const ProductsPage = () => {
  return (
    <div>
      <Topbar />
      <h1 class="text-4xl text-center py-20">All Items</h1>
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 px-16">
        <a href="#" class="group relative block overflow-hidden">
          <button class="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
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
            src="https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80"
            alt=""
            class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
          />

          <div class="relative border border-gray-100 bg-white p-6">
            <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
              {" "}
              New{" "}
            </span>

            <h3 class="mt-4 text-lg font-medium text-gray-900">Robot Toy</h3>

            <p class="mt-1.5 text-sm text-gray-700">$14.99</p>

            <form class="mt-4">
              <button class="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105">
                Add to Cart
              </button>
            </form>
          </div>
        </a>

        <a href="#" class="group relative block overflow-hidden">
          <button class="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
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
            src="https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80"
            alt=""
            class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
          />

          <div class="relative border border-gray-100 bg-white p-6">
            <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
              {" "}
              New{" "}
            </span>

            <h3 class="mt-4 text-lg font-medium text-gray-900">Robot Toy</h3>

            <p class="mt-1.5 text-sm text-gray-700">$14.99</p>

            <form class="mt-4">
              <button class="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105">
                Add to Cart
              </button>
            </form>
          </div>
        </a>

        <a href="#" class="group relative block overflow-hidden">
          <button class="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
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
            src="https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80"
            alt=""
            class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
          />

          <div class="relative border border-gray-100 bg-white p-6">
            <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
              {" "}
              New{" "}
            </span>

            <h3 class="mt-4 text-lg font-medium text-gray-900">Robot Toy</h3>

            <p class="mt-1.5 text-sm text-gray-700">$14.99</p>

            <form class="mt-4">
              <button class="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105">
                Add to Cart
              </button>
            </form>
          </div>
        </a>
      </div>
    </div>
  );
};
export default ProductsPage;
