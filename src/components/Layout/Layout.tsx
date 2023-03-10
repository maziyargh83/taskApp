import { ToastContainer } from "react-toastify";
import { SideBar, Main } from "~/components";
import { getTheme } from "~/core/Themes/Utils/utils";

export const Layout = () => {
  return (
    <div style={getTheme()} className="flex">
      <SideBar />
      <Main />
      <ToastContainer />
    </div>
  );
};
