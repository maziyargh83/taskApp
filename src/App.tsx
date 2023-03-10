import { applyStyle, getTheme } from "~/core/Themes/Utils/utils";
import { Router } from "~/router";
function App() {
  applyStyle(getTheme());

  return <Router />;
}

export default App;
