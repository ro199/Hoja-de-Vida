import React, { useState, useEffect } from "react";

const About = () => {
  const [hasError, setError] = useState(false);
  const [about, setAbout] = useState([]);
  const [programmingLanguage, setProgrammingLanguage] = useState([]);

  async function fetchDataAbout() {
    const url = "http://127.0.0.1:8000/api/about/";
    const res = await fetch(url);
    res
      .json()
      .then((res) => setAbout(res))
      .catch((err) => setError(err));
  }

  async function fetchDataProgrammingLanguage() {
    const url = "http://127.0.0.1:8000/api/programmingLanguage/";
    const res = await fetch(url);
    res
      .json()
      .then((res) => setProgrammingLanguage(res))
      .catch((err) => setError(err));
  }

  useEffect(() => {
    fetchDataAbout();
    fetchDataProgrammingLanguage();
    console.log(hasError);
  }, []);

  return (
    <div>
      <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-12">
              <div
                className="row row-bottom-padded-sm animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="col-md-12">
                  <div className="about-desc">
                    <span className="heading-meta">Acerca de mí</span>
                    {about.map((ab) => (
                      <div key={ab.id}>
                        <h2 className="colorlib-heading">{ab.user_name}</h2>
                        <h2 className="colorlib-hero">
                          Estudiante de Ingeniería en Sistemas Informáticos y de
                          Computación
                        </h2>
                        <div></div>
                        <p>{ab.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="row">
                {programmingLanguage.map((programing) => (
                  <div
                    className="col-md-6 animate-box"
                    data-animate-effect="fadeInLeft"
                    key={programing.id}
                  >
                    <div className="services color-1">
                      <span className="icon2">
                        <i className="icon-bulb"></i>
                      </span>
                      <h3>{programing.programming_language_name}</h3>
                      <p>{programing.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="row">
                <div
                  className="col-md-12 animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="hire">
                    <h2>
                      ¿Quieres saber cómo puedo ayudarte en tu proyecto? Dale un
                      vistazo a mi portafolio de proyectos y mi currículum en
                      línea.
                    </h2>
                    <a href="#" className="btn-hire">
                      Contrátame
                    </a>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-12 animate-box">
                  <div>
                    <button className="btn btn-primary">Ver Portafolio</button>
                    <button className="btn btn-primary">Ver Currículum</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
