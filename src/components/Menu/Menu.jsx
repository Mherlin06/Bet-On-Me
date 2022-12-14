import React from "react";
import { Link } from "react-router-dom";
import MenuItem from "../MenuItem/MenuItem";
import { getExperiences } from "../../data/experiences";
import { getCourses } from "../../data/courses";

const experiences = getExperiences();
const courses = getCourses();

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
      <section>
        <ul>
            {courses.map(course => (<MenuItem key={course.id} data={course}/>))}
        </ul>
      </section>
    </aside>
  );
};

export default Menu;
