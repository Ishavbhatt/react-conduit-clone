import React from "react";

import "../styles/main.css";
import "../styles/Home.css";
import { GoHeart } from "react-icons/go";
import { GoSmiley } from "react-icons/go";

const Article = props => {
  let date = new Date().toDateString();

  return (
    <>
      <div className="banner">
        <div className="banner-container">
          <h1 className="banner-heading">Conduit</h1>
          <p className="banner-title">A Place to share your knowledge</p>
        </div>
      </div>
      <h2 className="globalfeed-heading">Global Feed</h2>

      <div className="articlesandtags">
        <div className="tagslist">
          <p>Popular Tags</p>

          <ul className="sidebar">
            {props.tag &&
              props.tag.map(tag => <li className="tagname">{tag.tagText}</li>)}
          </ul>
        </div>
        <div className="articleslist">
          {props.articles &&
            props.articles.map(article => (
              <div>
                <div className="flex">
                  <GoSmiley className="user-image" />
                  <div className="nameanddate">
                    <h3 className="user-name">Tony Varghese</h3>
                    <p className="date">{date}</p>
                  </div>
                  <span className="like-box">
                    <GoHeart className="like-button" />
                  </span>
                </div>
                <div className="article-preview">
                  <span className="article-title">{article.title}</span>
                  <p className="article">{article.body}</p>
                  <button className="read-btn">Read more...</button>
                </div>
                <hr></hr>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Article;
