import React from "react";
import { Link, useLocation } from "react-router-dom";
import astronautHelmet from "../../assets/astronaut-helmet.png";
import deadEye from "../../assets/dead-eye.png";
import stack from "../../assets/stack.png";
import envelope from "../../assets/envelope.png";
import "./Nav.css";

// const navList = ["about", "skills", "projects", "contact"];
export default function Nav() {
  // location to get the url where we exist, to highlight the current page
  const location = useLocation();

  const getNavPositionClass = () => {
    switch (location.pathname) {
      case "/":
        return "nav-about";
      case "/skills":
        return "nav-skills";
      case "/projects":
        return "nav-projects";
      case "/contact":
        return "nav-contact";
      default:
        return "";
    }
  };
  const getPageTitle = () => {
    switch (location.pathname) {
      case "/":
        return "ABOUT";
      case "/skills":
        return "SKILLS";
      case "/projects":
        return "PROJECTS";
      case "/contact":
        return "CONTACT";
      default:
        return "";
    }
  };

  const isCurrentPage = (navClass) => {
    return navClass === navPositionClass;
  };

  const renderNavLink = (to, imgSrc, altText, navClass) => {
    const isCurrent = isCurrentPage(navClass);
    const linkClass = isCurrent ? "nav-link current" : "nav-link";

    // component Link from react-router-dom to navigate to the nav link
    return (
      <Link to={to} className={linkClass}>
        <img src={imgSrc} alt={altText} />
        {isCurrent && <h1 className="page-title">{pageTitle}</h1>}
      </Link>
    );
  };

  const navPositionClass = getNavPositionClass();
  const pageTitle = getPageTitle();

  return (
    <nav className={`nav ${navPositionClass}`}>
      {renderNavLink("/", astronautHelmet, "About", "nav-about")}
      {renderNavLink("/skills", deadEye, "Skills", "nav-skills")}
      {renderNavLink("/projects", stack, "Projects", "nav-projects")}
      {renderNavLink("/contact", envelope, "Contact", "nav-contact")}
    </nav>
  );
}
