import React, { useState } from "react";
import "./blog.css";
import Blog_Card from "./Blog_Card";
import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";
import { blogs } from "./blogs";

function Blog_main() {
  const [currentIndex, setCurrentIndex] = useState(0); // State for tracking visible blogs
  const visibleBlogs = 3; // Number of blogs to show at a time
  const totalBlogs = blogs.length; // Total number of blogs

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleBlogs < totalBlogs ? prevIndex + visibleBlogs : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - visibleBlogs >= 0
        ? prevIndex - visibleBlogs
        : totalBlogs - visibleBlogs
    );
  };

  const getVisibleBlogs = () => {
    return blogs
      .slice(currentIndex, currentIndex + visibleBlogs)
      .concat(
        blogs.slice(0, Math.max(0, currentIndex + visibleBlogs - totalBlogs))
      );
  };

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
            <button className="btn" onClick={prevSlide}>
              <GrFormPreviousLink
                style={{ verticalAlign: "middle", color: "#f58c17" }}
              />
            </button>
            <button className="btn" onClick={nextSlide}>
              <GrFormNextLink
                style={{ verticalAlign: "middle", color: "#f58c17" }}
              />
            </button>
          </div>
        </div>

        <div className="flex-row-between">
          {getVisibleBlogs().map((blog) => (
            <Blog_Card
              key={blog.id}
              imgUrl={blog.imgUrl}
              title={blog.title}
              content={blog.content}
              blogId={blog.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog_main;
