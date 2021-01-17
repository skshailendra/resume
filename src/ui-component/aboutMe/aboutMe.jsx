import React from "react";
import "./style.css";
const aboutMe = {
  email: "shailendra_kumar_singh@outlook.com",
  location: "Bangalore",
  experience: "6",
  linkedIn: "https://www.linkedin.com/in/shailendra-kumar-singh/",
};
const AboutMe = ({ description }) => {
  return (
    <>
      <div className="aboutme-primary">
        <p className="description">{description}</p>
      </div>
      <div className="aboutme-secondary">
        <span className="aboutmelist">{aboutMe.email}</span>
        <span className="aboutmelist">{aboutMe.location}</span>
        <span className="aboutmelist">{aboutMe.email}</span>
        <span className="aboutmelist">{aboutMe.linkedIn}</span>
      </div>
    </>
  );
};
export default AboutMe;
