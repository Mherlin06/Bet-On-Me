import React from "react";
import { Link } from "react-router-dom";
import MenuItem from "../MenuItem/MenuItem";
import { getExperiences } from "../../data/experiences";

const experiences = getExperiences();

const Menu = () => {
  return (
    <aside className="menu">
      <h3>Expériences</h3>
      <section>
        <ul>
          {experiences.map((experience) => (
            <MenuItem key={experience.id} data={experience} />
          ))}
        </ul>
      </section>
      <h3>Formations</h3>
      <section></section>
    </aside>
  );
};

export default Menu;
