import React from "react";
import "./style.css";
import ChipSet from "../chipSet/chipSet";
const skillsList = [
  {
    id: "1",
    name: "Javascript",
  },
  {
    id: "2",
    name: "ReactJS",
  },
  {
    id: "2",
    name: "Redux",
  },
  {
    id: "3",
    name: "Javascript ES6",
  },
  {
    id: "4",
    name: "RechartJs",
  },
  {
    id: "5",
    name: "HTML5",
  },
  {
    id: "6",
    name: "Flexbox",
  },
];
const Skills = () => {
  return (
    <div className="skills-container">
      <h4 className="skills-heading">Skills</h4>
      <div className="skills-list">
        {skillsList.map((skill, id) => (
          <ChipSet key={id} name={skill.name} id={skill.id} />
        ))}
      </div>
    </div>
  );
};
export default Skills;
