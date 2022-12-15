import React from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ data }) => {
  return (
    <li>
      <Link
        to={"/" + data.category + "/" + data.id}
        key={data.id}
        className="menu__item"
      >
        <img src={data.logo} alt={data.company + " logo"}></img>
        <h4>{data.title}</h4>
      </Link>
    </li>
  );
};

export default MenuItem;
