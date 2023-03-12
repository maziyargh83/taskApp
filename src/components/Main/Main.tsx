import { Outlet } from "react-router-dom";
import { Header } from "~/components/Header";

export const Main = () => {
  return (
    <div className="bg-body min-h-screen flex-1">
      <Header />
      <Outlet />
    </div>
  );
};
