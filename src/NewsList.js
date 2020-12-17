import React from "react";
import NewsItem from "./NewsItem";

const NewsList = (props) => {
  const news = props.allNews.map((d) => {
    return (
      <NewsItem
        key={d.id}
        link={d.url}
        image={d.image}
        headline={d.title}
        author={d.author}
        content={d.description}
      />
    );
  });

  return <div className="newsList">{news}</div>;
};

export default NewsList;
