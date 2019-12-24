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
      profiles: []
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/api/v1/tags")
      .then(tag => tag.json())
      .then(tag => this.setState({ tag }));
    fetch("http://localhost:3000/api/v1/articles")
      .then(articles => articles.json())
      .then(articles => this.setState({ articles }));
    fetch("http://localhost:3000/api/v1/profiles")
      .then(profiles => profiles.json())
      .then(profiles => this.setState({ profiles }));
  }
  render() {
    console.log(this.state.articles);
    return (
      <div className="home-page">
        <Articles
          articles={this.state.articles.articlelist}
          tag={this.state.tag.tags}
        />
      </div>
    );
  }
}
