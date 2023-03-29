import React from "react";
import carrier from "../About/images/page-title.jpg";
import CardCourses from "../card/CardCourses";
import Course from "../CourseComponent/coursecomp/Course";
import skills from "../images/skills-hero-navigate-opt.webp";
import Teachers from "../teachers/Teachers";
import car from "./carrier.module.css";
import hero from "../images/Instructure_Careers-Hero.jpg.webp";
import tabOnline from "../images/APAC-Vocational-Tab-Online-Blended.jpg.webp";
import { AiFillCheckCircle } from "react-icons/ai";
import video from "../video/video.mp4";
import Footer from "../Footer/Footer";
const Carrier = () => {
  return (
    <>
      <section id={car.content2}>
        <article>
          {/* <figure>
            <img
              src={carrier}
              alt=""
              style={{ height: "25rem", width: "100%" }}
            />
          </figure> */}
          {/* <Teachers />
          <Course /> */}
          {/* <CardCourses /> */}
          <div id={car.card1}>
            <h5>MAKE A CHANGE. MAKE AN IMPACT.</h5>
            <h2>
              Instructure <span>Careers</span>
            </h2>
            <p>
              Does helping people of all ages learn and grow (and doing some
              learning and growing of your own) sound like a nice change from
              your current gig? Then consider this page a career crossroads.
              We're Instructure, the makers of Canvas. Learn about our company,
              check out our open positions, and come join our crew of smart,
              fun, innovative people who are busy making education even more
              awesome.
            </p>
            <button>VIEW ALL POSITIONS</button>
          </div>
          <div className={car.img3}>
            <img src={hero} alt="" />
          </div>
        </article>
        <div className={car.content4}>
          <h4>
            Job offer and employment scams are becoming more and more common,
            and sadly, they are designed to prey on job seekers.
          </h4>
          <h4>
            <span className={car.span1}>
              Learn more about avoiding job scams here.
            </span>
          </h4>
          <h4>
            Instructure is committed to protecting the privacy of your personal
            information and to maintaining the integrity and security of human
            resource data. To help our prospective employees understand our
            policies on collection, use, and sharing of human resources data,
          </h4>
          <h4>
            <a href="" className={car.anchor}>
              please see our Prospective Employee Privacy Policy.
            </a>
          </h4>
        </div>
      </section>
      <section className={car.carriermid}>
        <article>
          <h2>PEOPLE MATTER MOST</h2>
          <h1>Why We Love Working Here</h1>
          <Teachers />
        </article>
      </section>
      <nav className={car.video}>
        <article>
          <div>
            <video
              className={car.videoblock}
              src={video}
              controls
              style={{ height: "27rem" }}
            ></video>
          </div>
        </article>
      </nav>
      <main className={car.midblock}>
        <article>
          <div className={car.middiv}>
            <h3>Train students all over the place.</h3>
            <h4>
              Students want to know your organisation is ready for anything.
              Whether you’re all together in person or training from home,
              Canvas keeps everyone connected, learning, and communicating with
              consistency.
            </h4>
            <ul>
              <li>
                <span className={car.icon}>
                  <AiFillCheckCircle />
                </span>
                One digital foundation for all training
              </li>
              <li>
                <span className={car.icon}>
                  <AiFillCheckCircle />
                </span>
                Mobility and accessibility
              </li>
              <li>
                <span className={car.icon}>
                  <AiFillCheckCircle />
                </span>
                Consistency between courses
              </li>
            </ul>
          </div>
          <div className={car.iconimage}>
            <img className={car.iconimage1} src={tabOnline} alt="" />
          </div>
          <nav className={car.listBlock}>
            <h2>Quizzes and grading. Within video. Without headaches.</h2>
            <ul>
              <li>
                Add questions to the timeline for students to answer as they
                watch.
              </li>
              <li>
                Set up quizzes to instantly give kids feedback on their
                answers—and submit their grades to the Gradebook.
              </li>
              <li>
                Watch videos students submit and make inline comments as you go.
              </li>
              <li>
                Use SpeedGrader to apply rubrics and provide quick, targeted
                feedback on their work.
              </li>
              <li>Assign videos based on differentiated learning paths.</li>
            </ul>
          </nav>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default Carrier;
