import { PropsWithChildren } from "react";
import { SideBar, Main } from "~/components";
import { getTheme } from "~/core/Themes/Utils/utils";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div style={getTheme()} className="flex">
      <SideBar />
      <Main children={children} />
    </div>
  );
};
