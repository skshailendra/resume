import React from "react";
import "./style.css";
import profileImage from "../../image/Shailendra.jpg";
const Profile = (props) => {
  return (
    <div className="profile-container">
      <div className="profile-avatar">
        <img src={profileImage} alt="profile-pic" className="image" />
      </div>
      <p className="profile-title">Senior Software FrontEnd Engineer</p>
      <p className="profile-company">Publicis Sapient</p>
    </div>
  );
};
export default Profile;
