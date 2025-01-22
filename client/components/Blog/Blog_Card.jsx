import React from "react";
import { useNavigate } from "react-router-dom";

function Blog_Card({ imgUrl, title, content, blogId }) {
  const navigate = useNavigate();

  // Truncate content to 50 characters
  const truncateContent = (text, maxLength) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  const handleCardClick = () => {
    navigate(`/blog/${blogId}`);
  };

  return (
    <div
      className="blog-card"
      onClick={handleCardClick}
      style={{ cursor: "pointer" }}
    >
      <img src={imgUrl} className="blog-header-image" alt="Blog" />
      <p>{title}</p>
      <p>{truncateContent(content, 100)}</p>
    </div>
  );
}

export default Blog_Card;
