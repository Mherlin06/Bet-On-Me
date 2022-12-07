import React from "react";
import { Link } from "react-router-dom";
import ContactButton from "../ContactButton/ContactButton";

const Header = () => {
  return (
    <header>
      <h1>Bet On Me!</h1>
      <div>
        <p>Hugues Mourice</p>
        <p>31 ans</p>
        <p>Développeur ReactJS</p>
      </div>
      <ContactButton label="Me contacter"/>
    </header>
  );
};

export default Header;
