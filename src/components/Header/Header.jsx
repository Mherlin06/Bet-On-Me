import React from "react";
import { Link } from "react-router-dom";
import ContactButton from "../ContactButton/ContactButton";
import MediaButton from "../MediaButton/MediaButton";

const Header = () => {
  return (
    <header>
      <Link to="/">Bet On Me!</Link>
      <nav>
        <Link to="/hardskills">Hard Skills</Link>
        <Link to="/softskills">Soft Skills</Link>
        <Link to="/outils">Outils</Link>
        <Link to="/hobby">Hobbys</Link>
      </nav>
      <MediaButton label="GitHub" />
      <MediaButton label="Linkedin" />
      <ContactButton label="Me contacter" />
    </header>
  );
};

export default Header;
