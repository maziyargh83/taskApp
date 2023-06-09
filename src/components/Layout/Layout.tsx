import { ToastContainer } from "react-toastify";
import { SideBar, Main, Header } from "~/components";
import { getTheme } from "~/core/Themes/Utils/utils";

export const Layout = () => {
  return (
    <div className="flex">
      <SideBar />
      <Main />
      <ToastContainer />
    </div>
  );
};
