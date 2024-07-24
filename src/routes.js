/** @format */

import React from "react";
import {createBrowserRouter, RouterProvider, Navigate} from "react-router-dom";
import HomePage from "./container/HomePage-container";
import Loginpage from "./Pages/login";
import {useSelector} from "react-redux";

const publicrouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <Loginpage />,
  },
]);

const privaterouter = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/private" />,
  },
]);

function Routes() {
  const {isLoogedIn} = useSelector((state) => state.profile);

  if (isLoogedIn) {
    return <RouterProvider router={privaterouter} />;
  } else {
    return <RouterProvider router={publicrouter} />;
  }
}

export default Routes;
