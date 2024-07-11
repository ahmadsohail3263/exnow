import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./Layout";

import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./container/Login";
import SignUp from "./container/SignUp";
import Home from "./container/Home";
import Profile from "./container/Profile";
import MarketPlace from "./container/MarketPlace";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="profile" element={<Profile />} />
      <Route path="marketplace" element={<MarketPlace/>} />
      
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
