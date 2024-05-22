import type { Component } from "solid-js";

import logo from "./logo.svg";

const App: Component = () => {
  return (
    <div class="text-center">
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
