import React from "react";
import { useParams } from "react-router-dom";
import { blogs } from "./blogs";
import "./blog.css";

function BlogDetails() {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <p>Blog not found!</p>;
  }

  return (
    <div className="blog-details">
      <h1>{blog.title}</h1>
      <img src={blog.imgUrl} alt="Blog" />
      <p>{blog.content}</p>
      <p>
        <strong>Published:</strong>{" "}
        {new Date(blog.timestamp).toLocaleDateString()}
      </p>
    </div>
  );
}

export default BlogDetails;
