import React from "react";
import midimage from "../images/slidersimage.png";
import gooleplay from "../images/Google_Play-Badge-Logo.wine.svg";
import apple from "../images/AppStore.png";
import mind from "./mind.module.css";
const Mindcomponent = () => {
  return (
    <section className={mind.mindBlock}>
      <article>
        <div>
          <img
            src={midimage}
            alt=""
            style={{
              height: "35rem",
              marginTop: "1.3rem",
              marginLeft: "10rem",
            }}
          />
        </div>
        <div>
          <h1
            style={{
              color: "#fff",
              fontSize: "2.0rem",
              height: "10rem",
              marginTop: "5rem",
              width: "35rem",
              marginLeft: "3rem",
              textAlign: "justify",
              letterSpacing: "0",
              color: "#111",
            }}
          >
            Yesterday’s commute, today’s study session
          </h1>
          <h3
            style={{
              color: "#fff",
              fontSize: "1.5rem",
              height: "8rem",
              marginTop: "1rem",
              width: "30rem",
              marginLeft: "3rem",
              textAlign: "justify",
              letterSpacing: "0",
              color: "#111",
            }}
          >
            Study anywhere — even offline — with our iOS and Android apps. Your
            progress syncs across your phone and computer.
          </h3>
          <div className={midimage.div2}>
            <ul className={midimage.playstore}>
              <a href="">
                <img
                  src={gooleplay}
                  alt=""
                  style={{
                    height: "10rem",
                    marginBottom: "-11.5rem",
                    marginLeft: "2rem",
                  }}
                />
              </a>
              <a href="">
                <img
                  src={apple}
                  alt=""
                  style={{
                    height: "3.4rem",
                    width: "11rem",
                    background: "#fff",
                    marginLeft: "0.1rem",
                    marginBottom: "-8rem",
                  }}
                />
              </a>
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Mindcomponent;
