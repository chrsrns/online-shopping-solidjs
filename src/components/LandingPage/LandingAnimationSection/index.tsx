const LandingAnimationSection = () => {
  return (
    <section class="min-h-screen flex flex-col justify-center items-center py-8 overflow-hidden bg-gray-50 dark:bg-gray-800 md:pt-0 sm:pt-16 2xl:pt-16 snap-center">
      <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="grid items-center grid-cols-1 md:grid-cols-2">
          <div>
            <h2 class="text-3xl font-bold leading-tight text-black text-center dark:text-white sm:text-4xl md:text-left lg:text-5xl">
              Elevate your most&nbsp;
              <br class="block sm:hidden" />
              important space
            </h2>
            <p class="mt-3 mx-4 lg:mx-12 text-xl leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>

            <p class="mt-4 mb-8 text-xl text-center md:text-left text-gray-600 dark:text-gray-300 md:mt-8">
              <span class="relative inline-block">
                <span class="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300 dark:bg-gray-900"></span>
                <span class="relative">
                  {" "}
                  We handle the heavy lifting for you{" "}
                </span>
              </span>
            </p>
          </div>

          <div class="relative">
            <img
              class="absolute inset-x-0 bottom-0 -translate-x-1/2 md:scale-110 left-1/2"
              src="src/assets/blob-floor1.svg"
              alt=""
            />

            <img
              class="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom scale-90 md:scale-100 2xl:scale-110"
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
