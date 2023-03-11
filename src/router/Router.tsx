import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import { Layout } from "~/components";
import { Favorite, Inbox, List, NotFound, Search, Trash } from "~/pages";

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
        element: <Inbox />,
        path: "inbox",
      },
      {
        element: <List />,
        path: "list/:id",
      },

      {
        element: <Trash />,
        path: "trash",
      },
      {
        element: <Favorite />,
        path: "favorite",
      },
      {
        element: <Search />,
        path: "search",
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
