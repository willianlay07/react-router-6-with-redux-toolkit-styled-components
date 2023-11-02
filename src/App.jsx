import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";
import About from "./ui/About";
import Posts, { loader as getPosts } from "./features/posts/Posts";
import IndividualPost, {
  loader as getPost,
} from "./features/posts/IndividualPost";
import User from "./ui/User";

const App = () => {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/posts",
          element: <Posts />,
          loader: getPosts,
        },
        {
          path: "/posts/:id",
          element: <IndividualPost />,
          loader: getPost,
        },
        {
          path: "/user",
          element: <User />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
