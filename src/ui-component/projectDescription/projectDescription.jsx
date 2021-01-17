import React from "react";
import "./style.css";
const ProjectDescription = (props) => {
  const {
    name,
    title,
    description,
    role,
    tenure,
    position,
    techStack,
    company,
  } = props;
  return (
    <div className="project-desc-container">
      <div className="heading">
        <div className="name-title">
          <span>
            {name} {title}
          </span>
          <span>{position}</span>
          <span>{company}</span>
        </div>
        <span>{tenure}</span>
      </div>
      <div className="project-desc">
        <p>Description</p>
        <p>{description}</p>
        <p>Tech Stack</p>
        <p>{techStack}</p>
      </div>
    </div>
  );
};
export default ProjectDescription;
