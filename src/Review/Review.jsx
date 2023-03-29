import React from "react";
import STYLE from "./Review.module.css";
import IMG1 from "./images/img1.jpeg";
import IMG2 from "./images/img2.jpg";
import IMG3 from "./images/img3.jpg";

const Review = () => {
  return (
    <section className={STYLE.mainContainer}>
      <article className={STYLE.subContainer}>
        <aside className={STYLE.left}>
          <main className={STYLE.text}>
            <h3>OUR TESTIMONIALS</h3>
            <h1>
              What they're <br />
              saying about our <br />
              courses
            </h1>
            <p>
              Quisque commodo, magna nec accu man <br />
              euismod tellus mi ornare enim.
            </p>
          </main>
        </aside>
        <aside className={STYLE.right}>
          <main className={STYLE.card}>
            <img src={IMG1} alt="" />
            <p>
              Lorem ipsum, dolor sit amet consectetur elit. Et expedita quis
              beae iste, veniam ratione incidunt a veritatis? Quia ipsam
              facilis, dolorum laudantium praesentium sint odit
            </p>
            <div className={STYLE.circle}>
              <span>//</span>
            </div>
            <div className={STYLE.profile}>
              <h1>James Steven</h1>
              <p>DIRECTOR</p>
            </div>
          </main>
          <main className={STYLE.card}>
            <img src={IMG3} alt="" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
              expedita quis iste, veniam incidunt a veritatis? Quia ipsam
              facilis, dolorum laudantium praesentium sint odit
            </p>
            <div className={STYLE.circle}>
              <span>//</span>
            </div>
            <div className={STYLE.profile}>
              <h1>James Steven</h1>
              <p>DIRECTOR</p>
            </div>
          </main>
        </aside>
      </article>
    </section>
  );
};

export default Review;
