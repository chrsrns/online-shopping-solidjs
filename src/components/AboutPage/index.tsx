import Topbar from "../Topbar";
import {
  TbBrandSolidjs,
  TbBrandTailwind,
  TbBrandTypescript,
  TbDeviceMobileHeart,
  TbFilterPlus,
  TbShoppingBag,
  TbShoppingCartPlus,
} from "solid-icons/tb";
import { BsGearWideConnected } from "solid-icons/bs";
import { FaSolidGear } from "solid-icons/fa";

const AboutPage = () => {
  let topBar!: HTMLDivElement;

  return (
    <div class="min-h-screen overflow-auto bg-timberwolf-900 dark:bg-walnut_brown-400 dark:text-gray-100">
      <Topbar ref={topBar} />
      <div class="flex flex-col">
        <div class="bg-walnut_brown-800 dark:bg-walnut_brown-500"></div>
        <div
          class={`relative flex w-full py-28 before:absolute before:top-0 before:h-full before:w-full before:animate-[infinite-scroll_6s_infinite_linear,fadeInTranslucent_1s_ease-out] before:bg-about-hero-image before:bg-fixed before:bg-left-top before:bg-repeat before:opacity-20 before:duration-1000`}
        >
          <div class="mx-auto overflow-hidden">
            <div class="relative -left-24 mb-4 animate-[slide_0.8s_forwards_150ms]">
              <h1 class="text-center text-5xl font-bold">About</h1>
            </div>
          </div>
        </div>
        <div class="relative overflow-hidden px-12 py-8 sm:px-24 sm:py-16">
          <div class="w-auto">
            <div class="relative -left-24 mb-4 animate-[slide_0.8s_forwards_150ms] opacity-0">
              <h2 class="text-4xl font-bold dark:text-gray-100">
                What is this website?
              </h2>
            </div>
          </div>

          <div class="bg- relative w-auto dark:bg-none">
            <div class="absolute left-0 top-0 aspect-square h-[35rem] opacity-5 sm:h-[28rem]">
              <FaSolidGear class="absolute -left-1/2 -top-1/2 h-full w-full animate-[spin_8s_linear_infinite]" />
            </div>
            <div class="relative -left-24 mb-4 animate-[slide_0.8s_forwards_350ms] opacity-0">
              <p class="mb-14 text-lg text-timberwolf-100 dark:text-gray-300">
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

          <div class="relative w-auto">
            <div class="absolute right-0 top-1/2 aspect-square h-[50rem] opacity-5 sm:top-0 sm:h-[40rem]">
              <FaSolidGear class="absolute -right-1/2 -top-1/2 h-full w-full animate-[spin_16s_linear_infinite_reverse]" />
            </div>
            <div class="relative -left-24 mb-4 animate-[slide_0.8s_forwards_750ms] opacity-0">
              <div class="mb-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div class="flex flex-col border border-timberwolf p-4">
                  <div class="max-h-28 w-full pb-3 sm:px-6">
                    <TbBrandSolidjs class="h-full w-full" />
                  </div>
                  <strong class="mx-auto mb-1 text-lg">SolidJS</strong>
                  <div>
                    A React.js alternative that does NOT use a virtual DOM,
                    which should be more performant.
                  </div>
                </div>
                <div class="flex flex-col border border-timberwolf p-4">
                  <div class="max-h-28 w-full pb-3 sm:px-6">
                    <TbBrandTailwind class="h-full w-full" />
                  </div>
                  <strong class="mx-auto mb-1 text-lg">TailwindCSS</strong>
                  <div>
                    For styling and ensuring a modern, responsive design.
                  </div>
                </div>
                <div class="flex flex-col border border-timberwolf p-4">
                  <div class="max-h-28 w-full pb-3 sm:px-6">
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

          <div class="relative w-auto">
            <div class="absolute left-0 top-1/2 aspect-square h-[40rem] opacity-5 sm:h-[50rem]">
              <FaSolidGear class="absolute -left-1/2 -top-1/2 h-full w-full animate-[spin_8s_linear_infinite]" />
            </div>
            <div class="relative -left-24 mb-4 animate-[slide_0.8s_forwards_1050ms] opacity-0">
              <div class="mb-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div class="flex flex-col border border-timberwolf p-4">
                  <div class="max-h-28 w-full pb-3 sm:px-6">
                    <TbDeviceMobileHeart class="h-full w-full" />
                  </div>
                  <strong class="mx-auto mb-1 text-lg">
                    Responsive Design
                  </strong>
                  <div>
                    The website is fully responsive and looks great on all
                    devices.
                  </div>
                </div>
                <div class="flex flex-col border border-timberwolf p-4">
                  <div class="max-h-28 w-full pb-3 sm:px-6">
                    <BsGearWideConnected class="h-full w-full" />
                  </div>
                  <strong class="mx-auto mb-1 text-lg">Functional</strong>
                  <div>
                    The website allows visitors to create demo products and
                    actually see those products on the listing.
                  </div>
                </div>
                <div class="flex flex-col border border-timberwolf p-4">
                  <div class="max-h-28 w-full pb-3 sm:px-6">
                    <TbFilterPlus class="h-full w-full" />
                  </div>
                  <strong class="mx-auto mb-1 text-lg">
                    Product Listing Features
                  </strong>
                  <div>
                    The website provides filtering features on the shop to make
                    finding products easy.
                  </div>
                </div>

                <div class="flex flex-col border border-timberwolf p-4">
                  <div class="max-h-28 w-full pb-3 sm:px-6">
                    <TbShoppingCartPlus class="h-full w-full" />
                  </div>
                  <strong class="mx-auto mb-1 text-lg">Shopping Cart</strong>
                  <div>
                    The website provides a virtual shopping cart to show the
                    selected items for checkout.
                  </div>
                </div>

                <div class="flex flex-col border border-timberwolf p-4">
                  <div class="max-h-28 w-full pb-3 sm:px-6">
                    <TbShoppingBag class="h-full w-full" />
                  </div>
                  <strong class="mx-auto mb-1 text-lg">Checkout Process</strong>
                  <div>
                    The website has a basic checkout process to simulate
                    real-world e-commerce functionality.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
