import { For, children } from "solid-js";
import { JSX } from "solid-js/jsx-runtime";

interface TestimonialKeenSliderProps {
  children: JSX.Element;
}
const TestimonialKeenSlider = (props: TestimonialKeenSliderProps) => {
  const cs = children(() => props.children).toArray();
  return (
    <div id="keen-slider" class="keen-slider">
      <For each={cs}>{(item) => item}</For>
    </div>
  );
};
export default TestimonialKeenSlider;
