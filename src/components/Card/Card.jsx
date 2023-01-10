import React from "react";

export const Card = ({ image, alt, title, date, company, inProgress }) => {
  return (
    <article className={inProgress ? "mainCard activeCard" : "mainCard"}>
      <img src={image} alt={alt}/>
      <h1>{title}</h1>

    </article>
  );
};
