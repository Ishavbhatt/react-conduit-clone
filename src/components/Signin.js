import React from "react";

import "../styles/main.css";
import "../styles/Signin.css";
import { BrowserRouter as Router } from "react-router-dom";

export default function Signin() {
  return (
    <Router>
      <div className="signin-page">
        <div>
          <h2 className="signin-heading">Sign In</h2>
          <p className="signin-title">
            <a>Need an Account?</a>
          </p>
        </div>
        <div>
          <form className="signin-form">
            <div className="signin-formdiv">
              <input
                className="signin-email"
                type="email"
                placeholder="Email"
              ></input>
            </div>
            <div className="signin-formdiv">
              <input
                className="signin-password"
                type="password"
                placeholder="Password"
              ></input>
            </div>
            <div className="buttons">
              <button className="signin-btn">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </Router>
  );
}
