import React from "react";
import { NavLink } from "react-router-dom";
import about from "../../../static/frontend/images/about1.jpg";
import { ImFacebook2, ImLinkedin, ImGithub } from "react-icons/im";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Header = () => {
  return (
    <div>
      <nav
        href="#navbar"
        className="js-colorlib-nav-toggle colorlib-nav-toggle"
        data-toggle="collapse"
        data-target="#navbar"
        aria-expanded="false"
        aria-controls="navbar"
      >
        <i />
      </nav>
      <aside id="colorlib-aside" className="border js-fullheight">
        <div className="text-center">
          <img className="author-img" src={about} />
          <h1 id="colorlib-logo">
            <NavLink to="/">Ronald Alvarado</NavLink>
          </h1>
          <span style={{ fontFamily: "Times New Roman" }}>
            Hola, mi nombre es Ronald Alvarado, soy estudiante de Ingeniería en
            Sistemas Informáticos y de Computación. ¡Bienvenido a mi sitio web
            personal!
          </span>
        </div>
        <hr />

        <div className="text-center">
          <ul className="social-list list-inline py-20 mx-auto">
            <li className="list-inline-item">
              <a href="#">
                <ImLinkedin style={{ fontSize: "30px" }} />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <ImFacebook2 style={{ fontSize: "30px" }} />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <ImGithub style={{ fontSize: "30px" }} />
              </a>
            </li>
          </ul>
        </div>
        <hr />
        <nav id="colorlib-main-menu" role="navigation" className="navbar">
          <div id="navbar" className="collapse">
            <ul>
              <li>
                <NavLink to="/about" data-nav-section="about">
                  Acerca de mi
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
                <NavLink to="/project" data-nav-section="project">
                  Portafolio
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

        <div className="colorlib-footer">
          <p>
            <small></small>
          </p>
          <p>
            <small></small>
          </p>
          <p>
            <small>
              <AiOutlineCopyrightCircle />{" "}
              <script>document.write(new Date().getFullYear());</script>{" "}
              Copyright Ronald Alvarado
            </small>
          </p>
        </div>
      </aside>
    </div>
  );
};

export default Header;
