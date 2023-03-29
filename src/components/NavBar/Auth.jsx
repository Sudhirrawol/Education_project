import React, { useState } from "react";
import Style from "./auth.module.css";
import { Link } from "react-router-dom";
import Signup from "../../LoginComponent/Login/Signup";
const Auth = () => {
  let [isAuth, setIsAuth] = useState(false);

  let token = window.localStorage.getItem("token");

  return (
    <div id={Style.AuthBlock}>
      <ul>
        {/* <li>
          <Link to="/logout">logout</Link>
        </li> */}
        {!token ? (
          <>
            {" "}
            <li>
              <Link to="/signUp">signup</Link>
            </li>
            <li>
              <Link to="/login">login</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/profile">profile</Link>
            </li>
            <li>
              <Link to="/logout">logout</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Auth;
