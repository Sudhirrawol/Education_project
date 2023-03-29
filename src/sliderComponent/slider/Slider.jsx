import React from "react";
import Style from "../slider.module.css";
const Slider = () => {
  return (
    <section id={Style.sliderBlock}>
      <article>
        <div className={Style.imageSlider}></div>
        <div className={Style.imagetitle}>
          <h2>Educative Accelerates Developer Productivity</h2>
          <h3>
            Explore over 500 courses on: Programming | Cloud Computing | Data
            Science | Machine Learning
          </h3>
          <h3>Get your quality Skills certificate from Techno Promise</h3>
          <button className={Style.btn}>GET STARTED NOW</button>
        </div>
      </article>
    </section>
  );
};

export default Slider;
