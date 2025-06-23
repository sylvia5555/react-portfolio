import React from "react";
import PropTypes from "prop-types";
import avatar_about from "../../assets/robot2.png";
import avatar_skills from "../../assets/robot5.png";
import "./Avatar.css";

// instead of class Avatar, we r gonna make a function component
const Avatar = ({ page }) => {
  const avatarClass = `avatar ${page}`;
  const spanClass = `shadow-overlay ${page}`;

  return (
    <>
      <span className={spanClass}></span>
      <img
        src={page === "about" ? avatar_about : avatar_skills}
        alt="avatar"
        className={avatarClass}
      />
    </>
  );
};

Avatar.propTypes = {
  page: PropTypes.string.isRequired,
};

export default Avatar;
