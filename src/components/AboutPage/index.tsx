import Topbar from "../Topbar";

const AboutPage = () => {
  let topBar!: HTMLDivElement;

  return (
    <div class="dark:bg-walnut_brown-400">
      <Topbar ref={topBar} />
    </div>
  );
};
export default AboutPage;
