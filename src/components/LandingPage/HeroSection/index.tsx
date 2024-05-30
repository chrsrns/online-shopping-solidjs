const LandingHeroSection = () => {
  return (
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
  );
};
export default LandingHeroSection;
