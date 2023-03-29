import React from "react";
import front from "./frontdisplay.module.css";
import Aroplane from "../images/aroplane.png";
import CrossImg from "../images/crossimg.png";
import rightImg from "../images/rightimg.png";
import Tag from "../images/tag.png";
const Frontdisplay = () => {
  return (
    <section id={Tag.sectioncon}>
      <div className={front.maincontener}>
        <figure className={front.figA}>
          <img
            className={front.areo}
            src={Aroplane}
            alt=""
            style={{ marginLeft: "8rem", height: "19rem" }}
          />
        </figure>
        <aside className={front.aside1}>
          <figure className={front.fig1}>
            <img
              className={front.cross}
              src={CrossImg}
              alt=""
              style={{ height: "25rem" }}
            />
          </figure>
          <figure className={front.fig2}>
            <img src={rightImg} alt="" />
          </figure>
          <figure className={front.tag}>
            <img
              src={Tag}
              alt=""
              style={{
                height: "5rem",
                width: "22rem",
                marginTop: "2rem",
                marginLeft: "1rem",
              }}
            />
            <p>16 Years Of Experience</p>
          </figure>
        </aside>
        <aside className={front.aside2}>
          <h2>GET TO KNOW US</h2>
          <h1>Grow your skills learn with us from anywhere</h1>
          <p>
            Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod
            tempor incididunt labore dolore magna aliquaenim ad minim. Sed risus
            augue, commodo ornare felis non, eleifend molestie metus pharetra
            eleifend.
          </p>
          <button>Discovery More</button>
        </aside>
      </div>
    </section>
  );
};

export default Frontdisplay;
