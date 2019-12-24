import React from "react";

import "../styles/main.css";
import "../styles/Signup.css";
import { BrowserRouter as Router } from "react-router-dom";
import { withRouter } from "react-router-dom";

import { Link } from "react-router-dom";

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSignUp = event => {
    event.preventDefault();
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.user) {
          this.props.history.push("/signin");
        }
      });
  };

  render() {
    return (
      <div className="signup-page">
        <div>
          <h2 className="signup-heading">Sign Up</h2>
          <p className="signup-title">
            <Link className="signup-title" to="/signin">
              Have an Account?
            </Link>
          </p>
        </div>
        <div>
          <form className="signup-form">
            <div className="signup-formdiv">
              <input
                className="signup-username"
                type="text"
                name="username"
                onChange={this.handleChange}
                value={this.state.username}
                placeholder="Username"
              ></input>
            </div>
            <div className="signup-formdiv">
              <input
                className="signup-email"
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                placeholder="Email"
              ></input>
            </div>
            <div className="signup-formdiv">
              <input
                className="signup-password"
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
                name="password"
                placeholder="Password"
              ></input>
            </div>
            <div className="buttons">
              <button
                onClick={this.handleSignUp}
                value="SIGN UP"
                type="submit"
                className="signup-btn"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default withRouter(Signup);
