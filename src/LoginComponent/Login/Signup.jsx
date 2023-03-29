import { useState } from "react";
import formData from "./Login.module.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
const Signup = () => {
  let navigation = useNavigate();
  let [state, setState] = useState({ name: "", email: "", password: "" });
  let { name, email, password } = state;
  let changeevent = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let Postdata = async e => {
    e.preventDefault();
    console.log(e);
    try {
      let payload = { name, email, password };
      console.log(payload);
      let data = await axios.post(
        "http://localhost:5002/api/v1/auth/register",
        payload
      );
      toast.success("registered succesfully !", {
        position: toast.POSITION.TOP_LEFT,
      });

      console.log(data);
      setState(data);
      navigation("/login");
    } catch (error) {
      // console.log(error);
      toast.warning("already registered !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  return (
    // <form className={formData.form}>
    //   <div>
    //     <label htmlFor="">Username</label>
    //     <input
    //       type="name"
    //       placeholder="enter the username"
    //       value={name}
    //       name="name"
    //       onChange={changeevent}
    //     />
    //   </div>
    //   <div>
    //     <label htmlFor="">Password</label>
    //     <input
    //       type="email"
    //       placeholder="enter the email"
    //       value={email}
    //       name="email"
    //       onChange={changeevent}
    //     />
    //   </div>
    //   <div>
    //     <label htmlFor="">Password</label>
    //     <input
    //       type="password"
    //       placeholder="enter the password"
    //       value={password}
    //       name="password"
    //       onChange={changeevent}
    //     />
    //   </div>
    //   <button onClick={Postdata}>Submit</button>
    // </form>
    <section className={formData.MainLogin}>
      <article>
        <h1>Register</h1>
        <form>
          <div className={formData.formdiv}>
            <label htmlFor="text">Username </label>
            <input
              type="text"
              placeholder="Username "
              value={name}
              name="name"
              onChange={changeevent}
            />
          </div>
          <div className={formData.formdiv}>
            <label htmlFor="email">Username Or email*</label>
            <input
              type="email"
              placeholder="Enter Or email"
              value={email}
              name="email"
              onChange={changeevent}
            />
          </div>

          <div className={formData.formdiv}>
            <label htmlFor="password">Password*</label>
            <input
              type="password"
              placeholder="enter the password"
              value={password}
              name="password"
              onChange={changeevent}
            />
          </div>
          <button onClick={Postdata}>Register</button>

          {/* <a href="#">Lost your password?</a> */}
        </form>
      </article>
    </section>
  );
};

export default Signup;
