import React from "react";
import Profile from "../profile/profile";
import Skills from "../skills/skills";
import "./style.css";
const HeaderInfo = (props) => {
  return (
    <>
      <section className="header-section">
        <Profile />
      </section>
      <section className="skills-section">
        <Skills />
      </section>
    </>
  );
};
export default HeaderInfo;
