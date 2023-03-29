import React from "react";
import jslogo from "../../images/javascript_logo.png";
import javalogo from "../../images/Java-Logo.png";
import python from "../../images/pthonimag1.png";
import nodejs from "../../images/nodejs-1-logo.png";
import expressjs from "../../images/download3.png";
import Card from "../Cards/cards.module.css";
const Cards = () => {
  return (
    <>
      <section id={Card.CardContainer}>
        <article>
          <main className={Card.Card}>
            <div className={Card.Cardblock}>
              <img src={jslogo} alt="" />
            </div>
            <div className={Card.content}>
              <p>
                JavaScript, often abbreviated as JS, is a programming language
                that is one of the core technologies of the World Wide Web,
                alongside HTML and CSS. As of 2022, 98% of websites use
                JavaScript on the client side for webpage behavior, often
                incorporating third-party libraries
              </p>
              <button className={Card.btn2}>view more</button>
            </div>
          </main>
          <main className={Card.Card}>
            <div className={Card.Cardblock1}>
              <img src={javalogo} alt="" />
            </div>
            <div className={Card.content2}>
              <p>
                Java is a high-level, class-based, object-oriented programming
                language that is designed to have as few implementation
                dependencies as possible.platforms that support Java without the
                need to recompile. Java applications are typically compiled.
              </p>
              <button className={Card.btn2}>view more</button>
            </div>
          </main>
          <main className={Card.Card}>
            <div className={Card.Cardblock2}>
              <img src={python} alt="" />
            </div>
            <div className={Card.content3}>
              <p>
                JavaScript, often abbreviated as JS, is a programming language
                that is one of the core technologies of the World Wide Web,
                alongside HTML and CSS. As of 2022, 98% of websites use
                JavaScript on the client side for webpage behavior, often
                incorporating third-party libraries
              </p>
              <button className={Card.btn2}>view more</button>
            </div>
          </main>
          <main className={Card.Card}>
            <div className={Card.Cardblock4}>
              <img src={nodejs} alt="" />
            </div>
            <div className={Card.content4}>
              <p>
                JavaScript, often abbreviated as JS, is a programming language
                that is one of the core technologies of the World Wide Web,
                alongside HTML and CSS. As of 2022, 98% of websites use
                JavaScript on the client side for webpage behavior, often
                incorporating third-party libraries
              </p>
              <button className={Card.btn2}>view more</button>
            </div>
          </main>
          <main className={Card.Card}>
            <div className={Card.Cardblock}>
              <img src={expressjs} alt="" />
            </div>
            <div className={Card.content4}>
              <p>
                JavaScript, often abbreviated as JS, is a programming language
                that is one of the core technologies of the World Wide Web,
                alongside HTML and CSS. As of 2022, 98% of websites use
                JavaScript on the client side for webpage behavior, often
                incorporating third-party libraries
              </p>
              <button className={Card.btn2}>view more</button>
            </div>
          </main>
        </article>
      </section>
    </>
  );
};

export default Cards;
