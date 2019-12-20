import React from "react";

import "../styles/main.css";
import "../styles/Signup.css";

export default function Signup() {
  return (
    <div className="signup-page">
      <div>
        <h2 className="signup-heading">Sign Up</h2>
        <p className="signup-title">
          <a>Have an Account?</a>
        </p>
      </div>
      <div>
        <form className="signup-form">
          <div className="signup-formdiv">
            <input
              className="signup-username"
              type="text"
              placeholder="Username"
            ></input>
          </div>
          <div className="signup-formdiv">
            <input
              className="signup-email"
              type="email"
              placeholder="Email"
            ></input>
          </div>
          <div className="signup-formdiv">
            <input
              className="signup-password"
              type="password"
              placeholder="Password"
            ></input>
          </div>
          <div className="buttons">
            <button className="signup-btn">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}
