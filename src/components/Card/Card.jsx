import React from "react";
import { Link } from "react-router-dom";
import BetButton from "../Buttons/BetButton";

export const Card = ({ image, alt, title, date, company, inProgress, id }) => {
  return (
    <Link
      to={"/experiences/" + id}
      className={"mainCard halfCard " + (inProgress ? "activeCard" : "")}
    >
      <img src={image} alt={alt} />
      <div className="cardDate">
        <img src="logo/calendar-logo.png" alt="calendrier" />
        {date}
      </div>
      <h1>{title}</h1>
      <BetButton className={"halfCard-button"} value={company} />
    </Link>
  );
};
