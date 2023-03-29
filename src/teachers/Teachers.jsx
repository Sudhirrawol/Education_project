import React from "react";
import teacher from "./teachers.module.css";
import Img1 from "./images/team-1.png";
import Img2 from "./images/team-2.png";
import Img3 from "./images/team-3.png";
import Img4 from "./images/team-4.png";
const Teachers = () => {
  return (
    <div className={teacher.main_container}>
      <aside className={teacher.aside1}>
        <h2>QUALIFIED TEACHERS</h2>
        <p>Meet the teacher who teaches you online</p>
      </aside>
      <aside className={teacher.aside2}>
        <span>
          <figure>
            <img src={Img1} alt="" />
            <h1>Akshay</h1>
            <p>Devloper</p>
          </figure>
        </span>
        <span>
          <figure>
            <img src={Img2} alt="" />
            <h1>Rohini</h1>
            <p>Tester</p>
          </figure>
        </span>
        <span>
          <figure>
            <img src={Img3} alt="" />
            <h1>Sudhir</h1>
            <p>Devops</p>
          </figure>
        </span>
        <span>
          <figure>
            <img src={Img4} alt="" />
            <h1>Girishma</h1>
            <p>Fullstack Devloper</p>
          </figure>
        </span>
      </aside>
    </div>
  );
};

export default Teachers;
