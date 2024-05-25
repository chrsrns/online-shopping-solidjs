import type { Component } from "solid-js";

import logo from "./logo.svg";

const App: Component = () => {
  return (
    <div class="text-center">
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
