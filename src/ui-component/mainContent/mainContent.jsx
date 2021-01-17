import React from "react";
import "./style.css";
import AboutMe from "../aboutMe/aboutMe";
import WorkExperience from "../workExperience/workExperience";

const aboutMeDescription = `Having 5.10+ years of Experience. Always Passionate about "Web" and Technologies and love to explore
and implement new cutting edge technologies. Always keen to create and improve the performance and
maintainability of an web-app along with rich UI with amazing user experience. Having a vast multiple
Industry domain Experience from Travel and Hospitality to Banking Domain`;
const MainContent = (props) => {
  return (
    <>
      <section className="aboutme-section">
        <AboutMe description={aboutMeDescription} />
      </section>
      <section className="work-section">
        <WorkExperience />
      </section>
    </>
  );
};
export default MainContent;
