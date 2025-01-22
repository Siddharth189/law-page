import React from "react";
import { useLocation } from "react-router-dom";

function Blogs() {
  const location = useLocation();
  const { title, description, image } = location.state || {}; // Use default empty object if state is undefined
  console.log("Hello there => ", title, description, image);
  return (
    <div className="blog">
      <h1>{title}</h1> {/* Use title here */}
      <div>
        {/* <img
          src={require(`../../assests/images/${image}`).default}
          alt="blog"
        /> */}
      </div>
      <div className="team-card-name flex-column-center">
        <h4>{description}</h4>
      </div>
    </div>
  );
}

export default Blogs;
