const LandingAnimationSection = () => {
  return (
    <section class="flex min-h-screen snap-center flex-col items-center justify-center overflow-hidden bg-walnut_brown-800 py-8 sm:pt-16 md:pt-0 2xl:pt-16 dark:bg-walnut_brown-300">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 items-center md:grid-cols-2">
          <div>
            <h2 class="text-center text-3xl font-bold leading-tight text-black sm:text-4xl md:text-left lg:text-5xl dark:text-white">
              Elevate your most&nbsp;
              <br class="block sm:hidden" />
              important space
            </h2>
            <p class="mx-4 mt-3 text-xl leading-relaxed text-gray-600 md:mt-8 lg:mx-12 dark:text-gray-300">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>

            <p class="mb-8 mt-4 text-center text-xl text-gray-600 md:mt-8 md:text-left dark:text-gray-300">
              <span class="relative inline-block">
                <span class="absolute bottom-0.5 inline-block h-2 w-full bg-yellow-300 dark:bg-gray-900"></span>
                <span class="relative">
                  {" "}
                  We handle the heavy lifting for you{" "}
                </span>
              </span>
            </p>
          </div>

          <div class="relative">
            <img
              class="absolute inset-x-0 bottom-0 left-1/2 -translate-x-1/2 md:scale-110"
              src="src/assets/blob-floor1.svg"
              alt=""
            />

            <img
              class="relative w-full scale-90 md:scale-100 xl:mx-auto xl:max-w-lg 2xl:origin-bottom 2xl:scale-110"
              src="src/assets/separate-interior-ALL.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default LandingAnimationSection;
