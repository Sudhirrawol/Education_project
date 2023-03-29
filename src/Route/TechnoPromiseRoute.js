import React from "react";
import { useRoutes } from "react-router-dom";
import About from "../About/About";
import Carrier from "../Carrier/Carrier";
import Admin from "../components/Admin";
import ContactUs from "../Contactus/ContactUs";
import Corces from "../Cources/Corces";
import Home from "../homeComponent/Home";
import Login from "../LoginComponent/Login/Login";
import Signup from "../LoginComponent/Login/Signup";
import Logout from "../LoginComponent/Logout";

const TechnoPromiseRoute = () => {
  let techno = useRoutes([
    { path: "/", element: <Home /> },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signUp",
      element: <Signup />,
    },
    { path: "/about", element: <About /> },
    { path: "/cources", element: <Corces /> },
    {
      path: "/carrier",
      element: <Carrier />,
    },
    { path: "/contactus", element: <ContactUs /> },
    { path: "/logout", element: <Logout /> },
    { path: "/profile", element: <Admin /> },
  ]);
  return techno;
};

export default TechnoPromiseRoute;
