import React from "react";
import style from "../NavBar/Menu.module.css";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <div id={style.menuBlock}>
      <ul>
        <li>
          <Link to="/" className={style.home}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" className={style.about}>
            About
          </Link>
        </li>
        <li>
          <Link to="/cources" className={style.courses}>
            Courses
            {/* <div className={style.dropdown3}>
              <li>
                <a href="">data</a>
              </li>
              <li>
                <a href="">data</a>
              </li>
              <li>
                <a href="">data</a>
              </li>
              <li>
                <a href="">data</a>
              </li>
            </div> */}
          </Link>
        </li>
        <li>
          <Link to="/carrier" className={style.carrier}>
            Carrier
            {/* <div className={style.dropdown4}>
              <li>
                <a href="">data</a>
              </li>
              <li>
                <a href="">data</a>
              </li>
              <li>
                <a href="">data</a>
              </li>
              <li>
                <a href="">data</a>
              </li>
            </div> */}
          </Link>
        </li>
        <li>
          <Link to="/contactus" className={style.contactus}>
            Contact us
            {/* <div className={style.dropdown5}>
              <li>
                <a href="">data</a>
              </li>
              <li>
                <a href="">data</a>
              </li>
              <li>
                <a href="">data</a>
              </li>
              <li>
                <a href="">data</a>
              </li>
            </div> */}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
