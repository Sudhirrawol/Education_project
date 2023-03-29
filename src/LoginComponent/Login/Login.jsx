import { useState } from "react";
import axios from "axios";
import formData from "./Login.module.css";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
// import { json } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Login = () => {
  let navigates = useNavigate();
  let [state, setState] = useState({ email: "", password: "" });
  let { email, password } = state;
  let changeevent = e => {
    let { name, value } = e.target;
    console.log(name, value);
    setState({ ...state, [name]: value });
  };
  let Postdata = async e => {
    e.preventDefault();
    try {
      let payload = { email, password };
      let { data } = await axios.post(
        "http://localhost:5002/api/v1/auth/login",
        payload
      );
      window.localStorage.setItem("token", data.token);

      toast.success("login successfull");
      // navigates("/");
      window.location.assign("/");
    } catch (error) {
      toast.warning("login failed");
    }
  };
  return (
    <>
      {/* <form className={formData.form}>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="enter the email"
            value={email}
            name="email"
            onChange={changeevent}
          />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="enter the password"
            value={password}
            name="password"
            onChange={changeevent}
          />
        </div>
        <button onClick={Postdata}>Submit</button>
      </form> */}
      <section className={formData.MainLogin}>
        <article>
          <h1>Login</h1>
          <form>
            <div className={formData.formdiv}>
              <label htmlFor="email">Username Or email*</label>
              <input
                type="text"
                placeholder="Username Or email"
                value={email}
                name="email"
                onChange={changeevent}
              />
            </div>
            <div className={formData.formdiv}>
              <label htmlFor="password">Password*</label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                name="password"
                onChange={changeevent}
              />
            </div>
            <button onClick={Postdata}>
              Login <span></span>
            </button>
            <a href="#">Lost your password?</a>
          </form>
        </article>
      </section>
    </>
  );
};

export default Login;
