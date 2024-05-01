import React from "react";
import "./blog.css";
import Blog_Card from "./Blog_Card";
import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";

function Blog_main() {
  return (
    <div id="blog" className="blog-main flex-column-center">
      <div className="page-style">
        <div className="flex-row">
          <p>Get to know about us more</p>
          <div className="custom-line" style={{ width: "100px" }}></div>
        </div>

        <div className="flex-row-between">
          <h3>FROM OUR DAILY BLOG UPDATES</h3>
          <div className="flex-row">
            <button className="btn">
              <GrFormPreviousLink
                style={{ verticalAlign: "middle", color: "#f58c17" }}
              />
            </button>
            <button className="btn">
              <GrFormNextLink
                style={{ verticalAlign: "middle", color: "#f58c17" }}
              />
            </button>
          </div>
        </div>

        <div className="flex-row-between">
          <Blog_Card />
          <Blog_Card />
          <Blog_Card />
        </div>
      </div>
    </div>
  );
}

export default Blog_main;
