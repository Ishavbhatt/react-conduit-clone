import React from "react";

import "../styles/main.css";
import "../styles/Signin.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";

export default class Signin extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSignIn = event => {
    event.preventDefault();
    fetch("http://localhost:3000/api/v1/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        localStorage.setItem("token", data.token);
        this.props.history.push("/protected");
      });
  };

  render() {
    return (
      <Router>
        <div className="signin-page">
          <div>
            <h2 className="signin-heading">Sign In</h2>
            <p className="signin-title">
              <Link className="signup-title" to="/signup">
                Need An Account?
              </Link>
            </p>
          </div>
          <div>
            <form className="signin-form">
              <div className="signin-formdiv">
                <input
                  className="signin-email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleChange}
                ></input>
              </div>
              <div className="signin-formdiv">
                <input
                  className="signin-password"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                ></input>
              </div>
              <div className="buttons">
                <button
                  onClick={this.handleSignIn}
                  value="SIGN IN"
                  type="submit"
                  className="signin-btn"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </Router>
    );
  }
}
