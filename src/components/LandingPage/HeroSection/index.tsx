import { ComponentRefProps } from "../../../ComponentRefProps";

const LandingHeroSection = (props: ComponentRefProps) => {
  return (
    <div class="snap-center">
      <div ref={props.ref} class="relative w-full">
        <img
          src="https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg"
          alt="Background Image"
          class="h-full w-full object-cover object-center"
        />
        <img
          src=""
          alt="Background Image"
          class="absolute inset-0 h-full w-full object-cover blur-sm filter"
        />
        <div class="absolute inset-0 bg-black bg-opacity-50"></div>
        <div class="absolute inset-0 flex flex-col items-center justify-center">
          <h1 class="text-4xl font-bold text-white">Hello, World!</h1>
          <p class="mt-4 text-xl text-white">This is a text</p>
        </div>
      </div>
    </div>
  );
};
export default LandingHeroSection;
