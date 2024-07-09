import { RouteSectionProps } from "@solidjs/router";
import { type Component } from "solid-js";

const App: Component<RouteSectionProps<unknown>> = (props) => {
  console.log("Initializing App component...");
  return <>{props.children}</>;
};

export default App;
