import StarsRating from "./StarsRating";

interface TestimonialKeenSlideProps {
  slideHeader: string;
  slideContent: string;
  slideAuthor: string;
}
const TestimonialKeenSlide = (props: TestimonialKeenSlideProps) => {
  return (
    <div class="keen-slider__slide">
      <blockquote class="flex h-full flex-col justify-between rounded-md bg-white p-6 shadow-sm sm:p-8 lg:p-12">
        <div>
          <StarsRating />
          <div class="mt-4">
            <p class="text-2xl font-bold text-jet sm:text-3xl">
              {props.slideHeader}
            </p>

            <p class="mt-4 leading-relaxed text-gray-700">
              {props.slideContent}
            </p>
          </div>
        </div>

        <footer class="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
          &mdash; {props.slideAuthor}
        </footer>
      </blockquote>
    </div>
  );
};
export default TestimonialKeenSlide;
