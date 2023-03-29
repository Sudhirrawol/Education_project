import React from "react";
import CardCourses from "../card/CardCourses";
// import Cards from "../CardsComponent/Cards/Cards";
import Course from "../CourseComponent/coursecomp/Course";
import Review from "../Review/Review";
import Slider from "../sliderComponent/slider/Slider";
import Frontdisplay from "../frontDisplay/frontDisplay";
import Mindcomponent from "../MidComponent/Mindcomponent";
import Teachers from "../teachers/Teachers";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <section>
      <article>
        <Slider />
        <Frontdisplay />
        <Mindcomponent />
        <Teachers />
        {/* <Course /> */}
        <CardCourses />
        {/* <Cards /> */}
        <Review />
        <Footer />
      </article>
    </section>
  );
};

export default Home;
