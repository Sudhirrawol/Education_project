import React from "react";
import Style from "./Courcess.module.css";
import Img1 from "./accerts/images/page-title.png";
import Img2 from "./accerts/images/course-details.png";
import onlinelearning from "./accerts/images/offlinelearning.png";
import nondegree from "./accerts/images/nondegree.png";
import offcampus from "./accerts/images/offline.png";
import { BiTimeFive } from "react-icons/bi";
import { VscFileSubmodule } from "react-icons/vsc";
import { CiUser } from "react-icons/ci";
import { CiFlag1 } from "react-icons/ci";
import { MdNotificationsNone } from "react-icons/md";
import Newcourse1 from "./accerts/images/course-1.png";
import Newcourse2 from "./accerts/images/course-2.png";
import Newcourse3 from "./accerts/images/course-3.png";
import Footer from "../Footer/Footer";

const Corces = () => {
  return (
    <section className={Style.main_container}>
      <div className={Style.img_container}>
        <img src={Img1} alt="" />
        <main className={Style.about}>
          <h1>Courses Details</h1>
        </main>
      </div>
      <main className={Style.sub_container2}>
        <aside className={Style.aside1}>
          <ul>
            <li className={Style.li1}>
              <figure>
                <BiTimeFive />
              </figure>
              <h1>Durations:</h1>
              <h2>10 hours</h2>
            </li>
            <li className={Style.li2}>
              <figure>
                <MdNotificationsNone />
              </figure>
              <h1>Language:</h1>
              <h2>English</h2>
            </li>
            <li className={Style.li3}>
              <figure>
                <VscFileSubmodule />
              </figure>
              <h1>Lectures:</h1>
              <h2>15</h2>
            </li>
            <li className={Style.li4}>
              <figure>
                <CiUser />
              </figure>
              <h1>Students:</h1>
              <h2>Max 50</h2>
            </li>
            <li className={Style.li5}>
              <figure>
                <CiFlag1 />
              </figure>
              <h1>Skill Level:</h1>
              <h2>Advanced</h2>
            </li>
          </ul>
        </aside>

        <aside className={Style.aside2}>
          <figure>
            <img src={Img2} alt="" />
          </figure>
          <h1>Course Overview</h1>
          <p>
            Lorem ipsum is simply free text used by copytyping refreshing. Neque
            porro est qui dolorem ipsum quia quaed inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo. Aelltes port lacus
            quis enim var sed efficitur turpis gilla sed sit amet finibus eros.
            Lorem Ipsum is simply dummy text of the printing. When an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
          </p>
          <h1>What You Will Learn?</h1>
          <p>
            Lorem ipsum is simply free text used by copytyping refreshing. Neque
            porro est qui dolorem ipsum quia quaed inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo.
          </p>
          <span className={Style.sub_container3}>
            <div>
              <figure>
                <img src={onlinelearning} alt="" />
              </figure>
              <h1>Online Degree Programs 35</h1>
            </div>
            <div>
              <figure>
                <img src={nondegree} alt="" />
              </figure>
              <h1>Non-Degree Programs 25</h1>
            </div>
            <div>
              <figure>
                <img src={offcampus} alt="" />
              </figure>
              <h1>Off Campus Programs 30</h1>
            </div>
          </span>
        </aside>
      </main>
      <article className={Style.card}>
        <main className={Style.price}>
          <h2>COURSE PRICE</h2>
          <h3>500 &#8377;</h3>
          <button>BUY THIS COURSE</button>
        </main>
      </article>

      <article className={Style.newCourse}>
        <h1>New Courses</h1>
        <aside>
          <figure>
            <img src={Newcourse1} alt="" />
          </figure>
          <div>
            <h2>Advanced</h2>
            <h3>Modern Languages</h3>
            <h4>
              &#11088;&#11088;&#11088;&#11088;
              <br />
              (4.9 Rating)
            </h4>
          </div>
        </aside>
        <aside>
          <figure>
            <img src={Newcourse2} alt="" />
          </figure>
          <div>
            <h2>Advanced</h2>
            <h3>Modern Languages</h3>
            <h4>
              &#11088;&#11088;&#11088;&#11088;
              <br />
              (4.8 Rating)
            </h4>
          </div>
        </aside>
        <aside>
          <figure>
            <img src={Newcourse3} alt="" />
          </figure>
          <div>
            <h2>Advanced</h2>
            <h3>Modern Technology</h3>
            <h4>
              &#11088;&#11088;&#11088;&#11088;
              <br />
              (4.7 Rating)
            </h4>
          </div>
        </aside>
        <button className={Style.seeMore}>See More</button>
      </article>
      <Footer />
    </section>
  );
};

export default Corces;
