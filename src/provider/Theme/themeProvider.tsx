import { createContext, useContext, useState } from "react";
import type { ThemeType } from "~/core/Themes/types/types";
import type { Dispatch, SetStateAction, PropsWithChildren } from "react";
import { CONFIG } from "~/Config";
const SelectedThemeState = createContext<keyof typeof ThemeType>(
  CONFIG.baseTheme
);
const SelectedThemeSetState = createContext<
  Dispatch<SetStateAction<keyof typeof ThemeType>> | undefined
>(undefined);
function ThemeProvider({ children }: PropsWithChildren<{}>) {
  const [theme, setTheme] = useState<keyof typeof ThemeType>(CONFIG.baseTheme);

  return (
    <SelectedThemeState.Provider value={theme}>
      <SelectedThemeSetState.Provider value={setTheme}>
        {children}
      </SelectedThemeSetState.Provider>
    </SelectedThemeState.Provider>
  );
}

export function useThemeState() {
  const context = useContext(SelectedThemeState);
  if (context === undefined) {
    throw new Error("render <ThemeProvider /> at top of the tree");
  }
  return context;
}
export function useThemeDispatch() {
  const dispatch = useContext(SelectedThemeSetState);
  if (dispatch === undefined) {
    throw new Error("render <ThemeProvider /> at top of the tree");
  }
  return dispatch;
}
export default ThemeProvider;
