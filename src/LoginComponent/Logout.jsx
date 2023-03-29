import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Logout = () => {
  let navigate = useNavigate();
  window.localStorage.removeItem("token");

  toast.success("logout succesfull");
  window.location.assign("/");
  // navigate("/");
  return <div></div>;
};

export default Logout;
