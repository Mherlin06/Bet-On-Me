import React from "react";

const MediaButton = ({ label, className, link }) => {
  function handleClick(e) {
    e.preventDefault();
    window.open(link, '_blank');
  }

  return <button onClick={handleClick} className={"header-button " + className}>{label}</button>;
};

export default MediaButton;
