import React from "react";
import Style from "./contactus.module.css";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { IoIosCall } from "react-icons/io";

const ContactUs = () => {
  return (
    <article>
      <h1 className={Style.contact}>Contact Us</h1>
      <section className={Style.mainContainer}>
        <aside className={Style.container1}>
          <div>
            <main className={Style.detail}>
              <h1>
                <span>
                  <CiLocationOn />
                </span>
                &nbsp; Address
              </h1>
              <p>22/1521, Vikas Nagar, Pune</p>
            </main>
            <main className={Style.detail}>
              <h1>
                <span>
                  <AiOutlineMail />
                </span>
                &nbsp; Email
              </h1>
              <p>technopromise@gamil.com</p>
            </main>
            <main className={Style.detail}>
              <h1>
                <span>
                  <IoIosCall />
                </span>
                &nbsp; Contact No.
              </h1>
              <p>+91 8888730718</p>
            </main>
          </div>
        </aside>
        <aside className={Style.container2}>
          <div className={Style.form_control}>
            <form>
              <label htmlFor="name">First Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your First Name"
                required
              />
              <label htmlFor="name">Last Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Last Name"
                required
              />
              <label htmlFor="email">Email ID</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email Id"
                required
              />
              <label htmlFor="enquiry">Enquiry</label>
              <input
                type="text"
                name="enquiry"
                placeholder="Your Enquiry"
                required
              />
              <label htmlFor="contact">Contact No.</label>
              <input
                type="tel"
                name="enquiry"
                placeholder="Your Contact No."
                required
              />
              <label htmlFor="message">Message</label>
              <textarea name="message" cols="38" rows="10"></textarea>

              <button>Submit</button>
            </form>
          </div>
        </aside>
      </section>
    </article>
  );
};

export default ContactUs;
