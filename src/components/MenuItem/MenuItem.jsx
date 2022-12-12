import React from "react";
import { NavLink } from "react-router-dom";

const MenuItem = ({ data }) => {
  return (
    <li>
      <NavLink to={"/experiences/" + data.id} key={data.id}  className="menu__item">
        <img src={data.logo} alt={data.company + " logo"}></img>
        <h4>{data.title}</h4>
      </NavLink>
    </li>
  );
};

export default MenuItem;
