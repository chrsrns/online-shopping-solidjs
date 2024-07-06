import Topbar from "../Topbar";

const AboutPage = () => {
  let topBar!: HTMLDivElement;

  return (
    <div class="min-h-screen dark:bg-walnut_brown-400 dark:text-gray-100">
      <Topbar ref={topBar} />
      <div class="mx-24 my-16 flex flex-col">
        <div class="w-auto">
          <div class="relative -left-24 mb-4 animate-[slide_0.8s_forwards_150ms] opacity-0">
            <h1 class="text-4xl font-bold dark:text-gray-100">
              What is this website?
            </h1>
          </div>
        </div>

        <div class="w-auto">
          <div class="relative -left-24 mb-4 animate-[slide_0.8s_forwards_350ms] opacity-0">
            <p class="mb-14 text-lg text-timberwolf-600 dark:text-gray-300">
              Welcome! This website is a personal project that I wrote to
              practice primarily using SolidJS, TailwindCSS, and TypeScript on a
              project. It's also a practice on creating a somewhat aesthetically
              pleasing and functional web applications that people who are
              visiting the demo can try out to some extent.
            </p>
          </div>
        </div>

        <div class="w-auto">
          <div class="relative -left-24 mb-4 animate-[slide_0.8s_forwards_550ms] opacity-0">
            <h2 class="mb-4 text-3xl font-semibold">Technologies Used</h2>
          </div>
        </div>

        <div class="w-auto">
          <div class="relative -left-24 mb-4 animate-[slide_0.8s_forwards_750ms] opacity-0">
            <p class="mb-8 text-lg">
              - <strong>SolidJS</strong>: A React.js alternative that does NOT
              use a virtual DOM, which should be more performant.
              <br />- <strong>TailwindCSS</strong>: For styling and ensuring a
              modern, responsive design.
              <br />- <strong>TypeScript</strong>: For type safety and better
              maintainability of the code.
            </p>
          </div>
        </div>

        <div class="w-auto">
          <div class="relative -left-24 mb-4 animate-[slide_0.8s_forwards_950ms] opacity-0">
            <h2 class="mb-4 text-3xl font-semibold">Focus</h2>
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
              <br />- <strong>Checkout Process</strong>: The website has a basic
              checkout process to simulate real-world e-commerce functionality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
