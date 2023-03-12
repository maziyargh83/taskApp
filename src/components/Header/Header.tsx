import { FiMoon, FiSun } from "react-icons/fi";
import { applyTheme } from "~/core/Themes/Utils/utils";
import { useThemeState } from "~/provider";
import { useTheme } from "~/provider/Theme/useTheme";

export const Header = () => {
  const theme = useThemeState();
  const { updateTheme } = useTheme();
  const change = () => {
    if (theme === "dark") {
      updateTheme("base");
      applyTheme("base");
    } else {
      updateTheme("dark");

      applyTheme("dark");
    }
  };
  return (
    <div className="h-14 w-full border-b border-b-light items-center justify-end flex px-6 text-reverse">
      <div onClick={change}>{theme === "dark" ? <FiMoon /> : <FiSun />}</div>
    </div>
  );
};
