import React from "react";
import topstyle from "./topnav.module.css";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
export const TopNav = () => {
  return (
    <div id={topstyle.topNav}>
      <article>
        <aside className={topstyle.leftTopNav}>
          <ul>
            <li>
              <a href="">technopromise@gmail.com</a>
            </li>
          </ul>
        </aside>
        <aside className={topstyle.rightTopNav}>
          <ul>
            <li>
              <a href="">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="">
                <BsInstagram />
              </a>
            </li>
            <li>
              <a href="">
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a href="">
                <AiFillLinkedin />
              </a>
            </li>
          </ul>
        </aside>
      </article>
    </div>
  );
};
