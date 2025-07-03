import React from "react";
import PropTypes from "prop-types";
import avatarImage from "../../assets/myrobot-removebg-preview.png";
// import avatar_skills from "../../assets/robot5.png";
import "./Avatar.css";


const Avatar = ({ page }) => {
  const avatarClass = `avatar ${page}`;
  const spanClass = `shadow-overlay-${page}`;

  return (
    <>
      <span className={spanClass}></span>
      <img src={avatarImage} className={avatarClass} alt="avatar" />
    </>
  );
};

Avatar.propTypes = {
  page: PropTypes.string.isRequired,
};

export default Avatar;