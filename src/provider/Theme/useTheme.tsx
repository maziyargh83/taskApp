import { ThemeType } from "~/core/Themes/types/types";
import { useThemeDispatch } from "~/provider/Theme/themeProvider";

export const useTheme = () => {
  const setTheme = useThemeDispatch();
  const updateTheme = (item: keyof typeof ThemeType) => {
    setTheme(item);
  };
  return { updateTheme };
};
