import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import { Layout } from "~/components";
import { Home, List, NotFound } from "~/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        loader: () => redirect("/inbox"),
      },
      {
        element: <Home />,
        path: "inbox",
      },
      {
        element: <List />,
        path: "list/:id",
      },
    ],
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
