import React from "react";
import Auth from "./Auth";
import Logo from "./Logo";
import Menu from "./Menu";
import Style from "../NavBar/navbar.module.css";
import { TopNav } from "./TopNav";
import topStyle from "./topnav.module.css";
const Navbar = () => {
  return (
    <>
      <section id={topStyle.topBlock}>
        <article>
          <TopNav />
        </article>
      </section>
      <nav id={Style.navBlock}>
        <article>
          <Logo />
          <Menu />
          <Auth />
        </article>
      </nav>
    </>
  );
};

export default Navbar;
