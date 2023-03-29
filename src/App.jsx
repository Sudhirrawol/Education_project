import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import TechnoPromiseRoute from "./Route/TechnoPromiseRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <section>
      <article>
        <Router>
          <Navbar theme="dark" />
          <ToastContainer />
          <TechnoPromiseRoute />
        </Router>
      </article>
    </section>
  );
};

export default App;
