import { CONFIG } from "~/Config";
import { applyStyle, applyTheme, getTheme } from "~/core/Themes/Utils/utils";
import ThemeProvider from "~/provider/Theme/themeProvider";
import { Router } from "~/router";
function App() {
  applyTheme();

  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}

export default App;
