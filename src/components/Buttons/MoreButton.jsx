import React from "react";
import { Link } from "react-router-dom";

const MoreButton = ({ link }) => {
  return <Link to={link}>En savoir plus</Link>;
};

export default MoreButton;
