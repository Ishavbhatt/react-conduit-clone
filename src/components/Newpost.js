import React from "react";

import "../styles/main.css";
import "../styles/Newpost.css";

export default function Newpost() {
  return (
    <div className="newpost-page">
      <div>
        <form className="newpost-form">
          <div className="newpost-formdiv">
            <input
              className="article-title"
              type="text"
              placeholder="Article Title"
            ></input>
          </div>
          <div className="newpost-formdiv">
            <input
              className="newarticle-about"
              type="text"
              placeholder="What's this article about?"
            ></input>
          </div>
          <div className="newpost-formdiv">
            <textarea
              className="newarticle-textarea"
              type="text"
              placeholder="Write your article (in markdown"
            ></textarea>
          </div>
          <div className="newpost-formdiv">
            <input
              type="text"
              placeholder="Enter tags"
              className="newarticle-tags"
            ></input>
          </div>
          <div className="buttons">
            <button className="publish-btn">Publish Article</button>
          </div>
        </form>
      </div>
    </div>
  );
}
