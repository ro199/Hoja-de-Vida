import React from "react";
import { NavLink } from "react-router-dom";
import about from "../../../static/frontend/images/about1.jpg";

const Header = () => {
  return (
    <div>
      <a
        href="#"
        className="js-colorlib-nav-toggle colorlib-nav-toggle"
        data-toggle="collapse"
        data-target="#navbar"
        aria-expanded="false"
        aria-controls="navbar"
      >
        <i></i>
      </a>
      <aside
        id="colorlib-aside"
        role="complementary"
        className="border js-fullheight"
      >
        <div className="text-center">
          <img className="author-img" src={about} />
          <h1 id="colorlib-logo">
            <NavLink to="/">Ronald Alvarado</NavLink>
          </h1>
          <span className="position">
            <NavLink to="/">Programador</NavLink> En Ecuador
          </span>
        </div>
        <nav id="colorlib-main-menu" role="navigation" className="navbar">
          <div id="navbar" className="collapse navbar-collapse">
            <ul>
              <li className="active">
                <NavLink to="/" data-nav-section="home">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" data-nav-section="about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/curriculum" data-nav-section="curriculum">
                  Currículum
                </NavLink>
              </li>
              <li>
                <NavLink to="/certificate" data-nav-section="certificate">
                  Certificaciones
                </NavLink>
              </li>
              <li>
                <NavLink to="/" data-nav-section="education">
                  Education
                </NavLink>
              </li>
              <li>
                <NavLink to="/" data-nav-section="experience">
                  Experience
                </NavLink>
              </li>
              <li>
                <NavLink to="/" data-nav-section="work">
                  Work
                </NavLink>
              </li>
              <li>
                <NavLink to="/" data-nav-section="blog">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" data-nav-section="contact">
                  Contacto
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </aside>
    </div>
  );
};

export default Header;
