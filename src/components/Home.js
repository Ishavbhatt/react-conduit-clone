import React from "react";

import "../styles/main.css";
import "../styles/Home.css";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      tags: []
    };
  }
  componentDidMount() {
    // fetch("http://localhost:3000/api/v1/tags")
    //   .then(tag => tag.json())
    //   .then(tag => this.setState({ tag }));
    fetch("http://localhost:3000/api/v1/articles")
      .then(articles => articles.json())
      .then(articles => this.setState({ articles }));
  }
  render() {
    console.log(this.state.articles, this.state.tags);
    return (
      <div className="home-page">
        <div className="banner">
          <div className="banner-container">
            <h1 className="banner-heading">Conduit</h1>
            <p className="banner-title">A Place to share your knowledge</p>
          </div>
        </div>
        <div className="global-feed">
          <ul className="nav">
            <li>
              <a className="globalfeed-heading">Global Feed</a>
            </li>
          </ul>
        </div>
        <div className="articlesandtags">
          <div className="tagslist">
            <div className="sidebar">
              <p>Popular Tags</p>
              <div className="taglist-div">
                <ul>
                  {this.state.tags.map(tagText => (
                    <li>
                      <a className="tagname">{tagText}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="articleslist">
            <div>
              <div className="article-preview">
                <ul>
                  {this.state.articles.map(articles => (
                    <li>{articles}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
