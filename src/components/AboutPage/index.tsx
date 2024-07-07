import Topbar from "../Topbar";
import {
  TbBrandSolidjs,
  TbBrandTailwind,
  TbBrandTypescript,
} from "solid-icons/tb";

const AboutPage = () => {
  let topBar!: HTMLDivElement;

  return (
    <div class="min-h-screen overflow-auto dark:bg-walnut_brown-400 dark:text-gray-100">
      <Topbar ref={topBar} />
      <div class="flex flex-col">
        <div class="bg-walnut_brown-800 dark:bg-walnut_brown-500">
          <div class="relative w-full py-28 before:absolute before:top-0 before:h-full before:w-full before:animate-[infinite-scroll_6s_infinite_linear] before:bg-about-hero-image before:bg-fixed before:bg-left-top before:bg-repeat before:opacity-20">
            <h1 class="relative text-center text-5xl font-bold">About</h1>
          </div>
        </div>
        <div class="px-24 py-16">
          <div class="w-auto">
            <div class="relative -left-24 mb-4 animate-[slide_0.8s_forwards_150ms] opacity-0">
              <h2 class="text-4xl font-bold dark:text-gray-100">
                What is this website?
              </h2>
            </div>
          </div>

          <div class="w-auto">
            <div class="relative -left-24 mb-4 animate-[slide_0.8s_forwards_350ms] opacity-0">
              <p class="mb-14 text-lg text-timberwolf-600 dark:text-gray-300">
                Welcome! This website is a personal project that I wrote to
                practice primarily using SolidJS, TailwindCSS, and TypeScript on
                a project. It's also a practice on creating a somewhat
                aesthetically pleasing and functional web applications that
                people who are visiting the demo can try out to some extent.
              </p>
            </div>
          </div>

          <div class="w-auto">
            <div class="relative -left-24 mb-4 animate-[slide_0.8s_forwards_550ms] opacity-0">
              <h3 class="mb-4 text-3xl font-semibold">Technologies Used</h3>
            </div>
          </div>

          <div class="w-auto">
            <div class="relative -left-24 mb-4 animate-[slide_0.8s_forwards_750ms] opacity-0">
              <div class="mb-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div class="flex flex-col border border-timberwolf p-4">
                  <div class="max-h-28 w-full px-36 pb-3 sm:px-6">
                    <TbBrandSolidjs class="h-full w-full" />
                  </div>
                  <strong class="mx-auto mb-1 text-lg">SolidJS</strong>
                  <div>
                    A React.js alternative that does NOT use a virtual DOM,
                    which should be more performant.
                  </div>
                </div>
                <div class="flex flex-col border border-timberwolf p-4">
                  <div class="max-h-28 w-full px-36 pb-3 sm:px-6">
                    <TbBrandTailwind class="h-full w-full" />
                  </div>
                  <strong class="mx-auto mb-1 text-lg">TailwindCSS</strong>
                  <div>
                    For styling and ensuring a modern, responsive design.
                  </div>
                </div>
                <div class="flex flex-col border border-timberwolf p-4">
                  <div class="max-h-28 w-full px-36 pb-3 sm:px-6">
                    <TbBrandTypescript class="h-full w-full" />
                  </div>
                  <strong class="mx-auto mb-1 text-lg">TypeScript</strong>
                  <div>
                    For type safety and better maintainability of the code.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="w-auto">
            <div class="relative -left-24 mb-4 animate-[slide_0.8s_forwards_950ms] opacity-0">
              <h3 class="mb-4 text-3xl font-semibold">Focus</h3>
            </div>
          </div>

          <div class="w-auto">
            <div class="relative -left-24 mb-4 animate-[slide_0.8s_forwards_1050ms] opacity-0">
              <p class="mb-8 text-lg">
                - <strong>Responsive Design</strong>: The website is fully
                responsive and looks great on all devices.
                <br />- <strong>Semi-Functional</strong>: The website allows
                visitors to create demo products and actually see those products
                on the listing.
                <br />- <strong>Product Listing Features</strong>: The website
                provides filtering features on the shop to make finding products
                easy.
                <br />- <strong>Shopping Cart</strong>: The website provides a
                virtual shopping cart to show the selected items for checkout.
                <br />- <strong>Checkout Process</strong>: The website has a
                basic checkout process to simulate real-world e-commerce
                functionality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
