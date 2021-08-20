import React from "react";

import "../styles/main.css";
import "../styles/Home.css";

import Articles from "./Articles";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: [],
      articles: [],
      profile: [],
      isLogged: false
    };
  }
  componentDidMount() {
    fetch("http://localhost:3001/api/v1/tags")
      .then(tag => tag.json())
      .then(tag => this.setState({ tag }));
    fetch("http://localhost:3001/api/v1/articles")
      .then(articles => articles.json())
      .then(articles => this.setState({ articles }));
    fetch("http://localhost:3001/api/v1/users", {
      headers: {
        Authorization: localStorage.token
      }
    })
      .then(profile => profile.json())
      .then(profile => this.setState({ profile }));
  }

  isLogged = value => {
    this.setState({ isLogged: value });
  };

  render() {
    console.log(this.state.articles);
    return (
      <div className="home-page">
        <Articles
          users={this.state.users}
          articles={this.state.articles.articlelist}
          tag={this.state.tag.tags}
        />
      </div>
    );
  }
}
