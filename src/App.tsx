import type { Component } from "solid-js";

import logo from "./logo.svg";

const App: Component = () => {
  return (
    <div class="w-screen h-screen overflow-y-auto flex flex-col flex-shrink-0 snap-y snap-mandatory">
      <div class="snap-center">
        <div class="relative h-screen w-full">
          <img
            src="https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg"
            alt="Background Image"
            class="object-cover object-center w-full h-full"
          />
          <img
            src=""
            alt="Background Image"
            class="absolute inset-0 w-full h-full object-cover filter blur-sm"
          />
          <div class="absolute inset-0 bg-black bg-opacity-50"></div>
          <div class="absolute inset-0 flex flex-col items-center justify-center">
            <h1 class="text-4xl text-white font-bold">Hello, World!</h1>
            <p class="text-xl text-white mt-4">This is a text</p>
          </div>
        </div>
      </div>
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
      <main class="snap-center">
        <div class="w-full h-screen py-8 px-8 overflow-x-auto flex gap-2 items-center snap-x snap-mandatory">
          <div class="h-full w-full flex-grow-1 basis-full flex-shrink-0 flex flex-col justify-center items-center bg-[#bae] snap-center">
            1
          </div>
          <div class="h-full w-full flex-grow-1 basis-full flex-shrink-0 flex flex-col justify-center items-center bg-[#bae] snap-center">
            2
          </div>
          <div class="h-full w-full flex-grow-1 basis-full flex-shrink-0 flex flex-col justify-center items-center bg-[#bae] snap-center">
            3
          </div>
          <div class="h-full w-full flex-grow-1 basis-full flex-shrink-0 flex flex-col justify-center items-center bg-[#bae] snap-center">
            4
          </div>
          <div class="h-full w-full flex-grow-1 basis-full flex-shrink-0 flex flex-col justify-center items-center bg-[#bae] snap-center">
            5
          </div>
          <div class="h-full w-full flex-grow-1 basis-full flex-shrink-0 flex flex-col justify-center items-center bg-[#bae] snap-center">
            6
          </div>
          <div class="h-full w-full flex-grow-1 basis-full flex-shrink-0 flex flex-col justify-center items-center bg-[#bae] snap-center">
            7
          </div>
          <div class="h-full w-full flex-grow-1 basis-full flex-shrink-0 flex flex-col justify-center items-center bg-[#bae] snap-center">
            8
          </div>
        </div>
      </main>
      <header class="bg-[#282c34] min-h-screen flex flex-col items-center justify-center text-[calc(10px+2vmin)] text-white">
        <img
          src={logo}
          class="animate-[spin_20s_linear_infinite] h-[40vmin] pointer-events-none"
          alt="logo"
        />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class="text-[#b318f0]"
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  );
};

export default App;
