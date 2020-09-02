import React, { useState, useEffect } from "react";
import { BsPhone, BsFillBriefcaseFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { GoLocation } from "react-icons/go";
import { ImFacebook2, ImLinkedin, ImGithub } from "react-icons/im";
import { FaUserTie } from "react-icons/fa";
import { IoIosSchool } from "react-icons/io";
import { SiSkillshare } from "react-icons/si";

const Curriculum = () => {
  const [profile, setProfile] = useState([]);
  const [reference, setReference] = useState([]);
  const [education, setEducation] = useState([]);
  const [skill, setSkill] = useState([]);

  async function fetchDataProfile() {
    const url = "http://127.0.0.1:8000/api/profile/";
    const res = await fetch(url);
    res
      .json()
      .then((res) => setProfile(res))
      .catch((err) => console.log(err));
  }

  async function fetchDataReference() {
    const url = "http://127.0.0.1:8000/api/personalReference/";
    const res = await fetch(url);
    res
      .json()
      .then((res) => setReference(res))
      .catch((err) => console.log(err));
  }

  async function fetchDataEducation() {
    const url = "http://127.0.0.1:8000/api/education/";
    const res = await fetch(url);
    res
      .json()
      .then((res) => setEducation(res))
      .catch((err) => console.log(err));
  }

  async function fetchDataSkill() {
    const url = "http://127.0.0.1:8000/api/skill/";
    const res = await fetch(url);
    res
      .json()
      .then((res) => setSkill(res))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchDataProfile();
    fetchDataReference();
    fetchDataEducation();
    fetchDataSkill();
  }, []);

  return (
    <div>
      <section className="colorlib-about" data-section="certificate">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-12">
              <div
                className="row row-bottom-padded-sm animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="col-md-12">
                  <div className="about-desc">
                    <h2 className="colorlib-heading">Currículum Online</h2>
                    <h2 className="colorlib-hero"></h2>
                    <div className="col text-center">
                      <a
                        className="btn btn-primary"
                        href="#"
                        style={{ color: "white" }}
                      >
                        <i className="mr-2"></i>
                        Descargar Currículum PDF
                      </a>
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="container profile-box">
                  {profile.map((pr) => (
                    <div className="row" key={pr.id}>
                      <div className="col-md-4 left-co">
                        <div className="left-side">
                          <div className="profile-info">
                            <img src={pr.photo} alt="Foto de perfil" />
                            <h3>{pr.full_name}</h3>
                            <span>Programador</span>
                          </div>
                          <h4 className="ltitle">Contactame</h4>
                          <div className="contact-box pb0">
                            <div className="icon">
                              <i>
                                <BsPhone />
                              </i>
                            </div>
                            <div className="detail">{pr.phone_number}</div>
                          </div>
                          <div className="contact-box pb0">
                            <div className="icon">
                              <i>
                                <HiOutlineMail />
                              </i>
                            </div>
                            <div className="detail">
                              {pr.email_p} <br />
                              {pr.email_j}
                            </div>
                          </div>
                          <div className="contact-box">
                            <div className="icon">
                              <i>
                                {" "}
                                <GoLocation />
                              </i>
                            </div>
                            <div className="detail">{pr.direction}</div>
                          </div>
                          <h4 className="ltitle">Redes Sociales</h4>
                          <ul className="row social-link no-margin">
                            <li>
                              <i>
                                {" "}
                                <ImFacebook2 style={{ fontSize: "30px" }} />
                              </i>
                            </li>
                            <li>
                              <i>
                                {" "}
                                <ImGithub style={{ fontSize: "30px" }} />
                              </i>
                            </li>
                            <li>
                              <i>
                                {" "}
                                <ImLinkedin style={{ fontSize: "30px" }} />
                              </i>
                            </li>
                          </ul>
                          <h4 className="ltitle">Referencias Personales</h4>
                          {reference.map((re) => (
                            <div className="refer-cov" key={re.id}>
                              <b>{re.contact_name}</b>
                              <p>Rol: {re.role}</p>
                              <p>Teléfono: {re.phone_number}</p>
                              <p>Correo Electrónico: {re.email}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="col-md-8 rt-div">
                        <div className="rit-cover">
                          <div className="hotkey">
                            <h1 className="">{pr.full_name}</h1>
                            <small>Programador</small>
                          </div>
                          <h2 className="rit-titl">
                            <i>
                              <FaUserTie />
                            </i>{" "}
                            Perfil
                          </h2>
                          <div className="about">
                            <p>{pr.message}</p>
                          </div>

                          <h2 className="rit-titl">
                            <i>
                              <BsFillBriefcaseFill />
                            </i>{" "}
                            Experiencia Laboral
                          </h2>
                          <div className="work-exp">
                            <h6>
                              Junior Software Developer <span>2008-2011</span>
                            </h6>
                            <i>Microsoft / United States</i>
                            <ul>
                              <li>
                                <i className="far fa-hand-point-right"></i>{" "}
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                              </li>
                              <li>
                                <i className="far fa-hand-point-right"></i>{" "}
                                Sorem dolor sit amet, consectetur.
                              </li>
                              <li>
                                <i className="far fa-hand-point-right"></i>{" "}
                                Porem ipsum sit amet, consectetur adipiscing
                              </li>
                            </ul>
                          </div>

                          <h2 className="rit-titl">
                            <i>
                              <IoIosSchool />
                            </i>{" "}
                            Educacion
                          </h2>
                          <div className="education">
                            {education.map((edu) => (
                              <ul className="row no-margin" key={edu.id}>
                                <li className="col-md-12">
                                  <span style={{ color: "black" }}>
                                    {edu.start_date} - {edu.end_date}
                                  </span>{" "}
                                  <hr />
                                  {edu.school_name} <br /> {edu.diploma}
                                  <hr />
                                  {edu.city}, {edu.country}
                                </li>
                              </ul>
                            ))}
                          </div>

                          <h2 className="rit-titl">
                            <i>
                              <SiSkillshare />
                            </i>{" "}
                            Skills
                          </h2>

                          <div className="profess-cover row no-margin">
                            <h4 className="rit-titl col-md-8">Técnico</h4>
                            <hr />
                            {skill.map((sk) => (
                              <div className="col-md-6" key={sk.id}>
                                <div className="prog-row row">
                                  <div className="col-sm-12">
                                    {sk.technical}
                                  </div>
                                </div>
                              </div>
                            ))}
                            <h4 className="rit-titl col-md-8">Profesional</h4>
                            <hr />
                            {skill.map((sk) => (
                              <div className="col-md-6" key={sk.id}>
                                <div className="prog-row row">
                                  <div className="col-sm-12">
                                    {sk.professional}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Curriculum;
