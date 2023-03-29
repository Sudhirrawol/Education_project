import React from "react";
import CardCourses from "../card/CardCourses";
import Footer from "../Footer/Footer";
import Frontdisplay from "../frontDisplay/frontDisplay";
import STYLE from "./About.module.css";
import image from "./images/page-title.jpg";
// import Frontdisplay2 from "../HomePage/Frontdisplay2";
// import CourseDetails from "../CourseDetails/CourseDetails";
// import Teachers from "../HomePage/Teachers";

const About = () => {
  return (
    // <div className={STYLE.about_container}>
    //   <h1>About Us</h1>
    //   <p>
    //     Welcome to our programming language course website! We are a team of
    //     passionate developers and educators who are dedicated to helping
    //     students learn and master various programming languages. Our mission is
    //     to provide high-quality and comprehensive courses that are accessible to
    //     anyone, regardless of their background or skill level. We believe that
    //     everyone should have the opportunity to learn programming, and we strive
    //     to make our courses engaging, interactive, and fun.
    //   </p>
    //   <p>
    //     We are a team of experienced programmers who are passionate about
    //     teaching programming to everyone. Our mission is to make learning
    //     programming easy, fun, and accessible to everyone, regardless of their
    //     skill level or background. Our courses are designed by experts in the
    //     field, and cover a wide range of programming languages, from JavaScript
    //     to Python to Java. We believe that learning programming is not just
    //     about writing code, but also about problem-solving, critical thinking,
    //     and creativity.we believe that learning should be fun and engaging.
    //     That's why we use a variety of teaching methods, including interactive
    //     exercises, coding challenges, and quizzes, to keep you engaged and
    //     motivated throughout the course.
    //   </p>

    //   <p>
    //     At our programming language course website, we offer a wide range of
    //     courses in popular programming languages such as Python, Java,
    //     JavaScript, and more. Our courses are designed to be interactive and
    //     hands-on, with plenty of opportunities to practice coding and apply your
    //     skills to real-world projects.
    //   </p>
    //   <p>
    //     We are constantly updating and improving our courses to ensure that they
    //     stay up-to-date with the latest industry trends and best practices. We
    //     also offer personalized support and guidance to our students, with
    //     dedicated instructors who are available to answer your questions and
    //     provide feedback on your work. Our courses are designed to be flexible
    //     and accessible, so you can learn at your own pace and on your own
    //     schedule. Whether you're a beginner or an experienced programmer, our
    //     courses are tailored to meet your needs and help you achieve your goals.
    //   </p>
    //   <h2>Meet Our Team</h2>
    //   <p>
    //     Our team is made up of experienced developers and educators who are
    //     experts in their respective fields. We are committed to providing a
    //     supportive and collaborative learning environment that fosters growth
    //     and development. Whether you're a beginner or an experienced programmer,
    //     we have courses that will challenge and inspire you.
    //   </p>
    //   <p>
    //     Our team of instructors has years of experience in the field of computer
    //     science and programming languages. They are experts in their respective
    //     fields and have a passion for teaching. They have designed the courses
    //     on this website to provide a comprehensive and hands-on learning
    //     experience for students of all levels.
    //   </p>
    //   <div className={STYLE.team_container}>
    //     <div className={STYLE.team_member}>
    //       <img src={img1} alt="Team Member 1" />
    //       <h3>John Smith</h3>
    //       <p>Lead Instructor</p>
    //     </div>
    //     <div className={STYLE.team_member}>
    //       <img src={img2} alt="Team Member 2" />
    //       <h3>Jane Doe</h3>
    //       <p>Course Designer</p>
    //     </div>
    //     <div className={STYLE.team_member}>
    //       <img src={img3} alt="Team Member 3" />
    //       <h3>Mike Johnson</h3>
    //       <p>Developer</p>
    //     </div>
    //   </div>
    // </div>
    <section>
      <div className={STYLE.img_container}>
        <article>
          <img src={image} alt="" />
          <main className={STYLE.about}>
            <h1 className={STYLE.headings1}>About Us</h1>
            <Frontdisplay />
            <CardCourses />
            <Footer />
          </main>
        </article>
      </div>
    </section>
  );
};

export default About;
