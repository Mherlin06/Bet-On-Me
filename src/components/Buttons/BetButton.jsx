import React from "react";

const BetButton = ({ value, className }) => {
  return <button className={"betButton " + className}>{value}</button>;
};

export default BetButton;
