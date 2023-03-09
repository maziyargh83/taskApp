import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import { Home, NotFound } from "~/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "404",
    element: <NotFound />,
  },
  {
    path: "*",
    loader: () => redirect("/404"),
  },
]);
export const Router = () => {
  return <RouterProvider router={router} />;
};
