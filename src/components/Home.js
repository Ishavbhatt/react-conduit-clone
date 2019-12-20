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
    fetch("https://conduit.productionready.io/api/tags")
      .then(res => res.json())
      .then(({ tags }) => this.setState({ tags }));
    fetch("https://localhost:3001/api/v1/articles")
      .then(res => res.json())
      .then(articles => this.setState({ articles }));
  }
  render() {
    console.log(this.state.articles);
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
              {/* <p>Popular Tags</p>
              <div className="taglist-div">
                <a className="tagname">html</a>
                <a className="tagname">css</a>
                <a className="tagname">js</a>
                <a className="tagname">react</a>
                <a className="tagname">node</a>

                <a className="tagname">html</a>
                <a className="tagname">css</a>
                <a className="tagname">js</a>
                <a className="tagname">react</a>
                <a className="tagname">node</a>
              </div> */}
              {/* <ul>
                {this.state.tags.map(tag => (
                  <li>{tag}</li>
                ))}
              </ul> */}
            </div>
          </div>

          <div className="articleslist">
            <div>
              <div className="article-preview"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
