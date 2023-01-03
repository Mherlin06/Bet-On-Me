import React from "react";
import { NavLink, Link } from "react-router-dom";
import ContactButton from "../Buttons/ContactButton";
import MediaButton from "../Buttons/MediaButton";

const Header = () => {
  return (
    <header>
      <Link to="/">Bet On Me!</Link>

      <nav>
        <NavLink to="/" activeClassName="active">
          Overview
        </NavLink>
        <NavLink to="/hardskills" activeClassName="active">
          Hard Skills
        </NavLink>
        <NavLink to="/softskills" activeClassName="active">
          Soft Skills
        </NavLink>
        <NavLink to="/outils" activeClassName="active">
          Mes Outils
        </NavLink>
        <NavLink to="/hobby" activeClassName="active">
          Mes Hobbys
        </NavLink>
      </nav>

      <MediaButton
        label="GitHub"
        className="github"
        link="https://github.com/Mherlin06"
      />
      <MediaButton
        label="Linkedin"
        className="linkedin"
        link="https://www.linkedin.com/in/hugues-mourice/"
      />
      <ContactButton label="Me contacter" />
    </header>
  );
};

export default Header;
