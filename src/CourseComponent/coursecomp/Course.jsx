import React from "react";
import WebDev from "./images/Web development.jfif";
import FullDev from "./images/Full stack development.jfif";
import JavaDev from "./images/Java development.jfif";
import RectDev from "./images/react develpment.png";
import PyDev from "./images/Python development.jfif";
import AndDev from "./images/Android development.jfif";
import UXUI from "./images/UI vs UX.jfif";
import st from "../course.module.css";
const Course = () => {
  return (
    <>
      <section>
        <article className={st.courseBlock}>
          <div>
            <h1 className={st.heading1}>Course Details</h1>
            <h4 className={st.heading2}>Popular topics to learn now</h4>
          </div>
          <section className={st.coursecontainer}>
            <figure>
              <img className={st.courseimage} src={WebDev} alt="" />
            </figure>
            <figure>
              <img className={st.courseimage} src={FullDev} alt="" />
            </figure>
            <figure>
              <img className={st.courseimage} src={JavaDev} alt="" />
            </figure>
            <figure>
              <img className={st.courseimage} src={RectDev} alt="" />
            </figure>
            <figure>
              <img className={st.courseimage} src={PyDev} alt="" />
            </figure>
            <figure>
              <img className={st.courseimage} src={AndDev} alt="" />
            </figure>
          </section>
        </article>
      </section>
    </>
  );
};

export default Course;
