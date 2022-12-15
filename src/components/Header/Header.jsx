import React from "react";
import { Link } from "react-router-dom";
import ContactButton from "../ContactButton/ContactButton";

const Header = () => {
  return (
    <header>
      <Link to="/">Bet On Me!</Link>
      <nav></nav>
      <ContactButton label="Me contacter" />
    </header>
  );
};

export default Header;
