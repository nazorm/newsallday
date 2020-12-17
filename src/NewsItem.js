import React from "react";
import image from  "./road-image.jpg" 

const NewsItem = (props) => {
  // let image = "./road-image.jpg"
 
  return (
    <a href={props.link} target="_blank" className="newsItem">
      <img
        src={props.image == "None" ? image  :props.image }
        alt=""
        className="image"
      ></img>
      <div className = "content">
      <h3>{props.headline}</h3>
      <h5>by: {props.author}</h5>
      <p>{props.content}</p>
      </div>
      
    </a>
  );
};

export default NewsItem;
