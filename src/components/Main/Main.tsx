import { Outlet } from "react-router-dom";

export const Main = () => {
  return (
    <div className="bg-body min-h-screen flex-1">
      <Outlet />
    </div>
  );
};
