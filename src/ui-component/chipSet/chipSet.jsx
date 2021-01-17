import React from "react";
import "./style.css";

const ChipSet = ({ name, id }) => {
  return (
    <div className="chips">
      <span id={id}>{name}</span>
    </div>
  );
};
export default ChipSet;
