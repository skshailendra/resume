import React from "react";
import "./style.css";
import Card from "../card/card";
import ProjectDescription from "../projectDescription/projectDescription";
import ProjectList from "../../data/resumeData.json";
const projectList = ProjectList;
const WorkExperience = (props) => {
  return (
    <>
      <div className="section-heading">
        <h3 className="heading">Project Experience</h3>
      </div>
      <div className="work-experience-container">
        {projectList.map((project, id) => (
          <Card key={id}>
            <ProjectDescription {...project} />
          </Card>
        ))}
      </div>
    </>
  );
};
export default WorkExperience;
