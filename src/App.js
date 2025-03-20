import React from "react";
import ReactDOM from "react-dom/client";
import HeaderCom from "./HeaderCom";
import { BodyCom } from "./body";
import { FotterCom } from "./fotter";
import Shimmer from "./shimmer";
import About from "./about";
import restaurantList from "./constant";
import { Outlet } from "react-router-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// console.log(restaurantList);

const AppLayout = () => (
  <>
    <HeaderCom />
    {/* <BodyCom /> */}
    <Outlet />
    <FotterCom />
  </>
);

const appRouter = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <AppLayout />,
  // },
  // {
  //   path: "/about",
  //   element: <About />,
  // },

  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <BodyCom />, // Default component for "/"
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
