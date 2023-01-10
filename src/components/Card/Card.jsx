import React from "react";
import BetButton from "../Buttons/BetButton";

export const Card = ({ image, alt, title, date, company, inProgress }) => {
  return (
    <article className={inProgress ? "mainCard halfCard activeCard" : "mainCard halfCard"}>
      <img src={image} alt={alt} />
      <div className="cardDate">
        <img src="logo/calendar-logo.png" alt="calendrier" /> 
        {date}
      </div>
      <h1>{title}</h1>
      <BetButton className={"halfCard-button"} value={company} />
    </article>
  );
};
