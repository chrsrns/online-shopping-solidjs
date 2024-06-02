import LandingHeroSection from "./HeroSection";
import LandingAnimationSection from "./LandingAnimationSection";
import LandingDirectToShop from "./LandingDirectToShop";
import LandingProductsCarousel from "./LandingProductsCarousel";
import LandingTestimonialsSection from "./LandingTestimonialsSection";

const LandingPage = () => {
  return (
    <div class="w-screen h-screen overflow-y-auto flex flex-col flex-shrink-0 snap-y snap-mandatory">
      <LandingHeroSection />
      <LandingAnimationSection />
      <LandingProductsCarousel />
      <LandingTestimonialsSection />
      <LandingDirectToShop />
    </div>
  );
};
export default LandingPage;
