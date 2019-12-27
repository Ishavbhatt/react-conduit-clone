import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Newpost from "./components/Newpost";
import Settings from "./components/Settings";
import Profile from "./components/Profile";
import Signinheader from "./components/Signinheader";
import Signinhome from "./components/Signinhome";

import "./styles/main.css";

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Route path="/protected" component={Signinheader} />
        <div>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
        </div>

        {/* <div>
          <Signinheader />
          <Route path="/" exact component={Signinhome} />
          <Route path="/newpost" component={Newpost} />
          <Route path="/setting" component={Settings} />
          <Route path="/profile" component={Profile} />
        </div> */}
      </Router>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("root"));
