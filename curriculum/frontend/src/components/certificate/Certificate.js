import React, { useState, useEffect } from "react";

const Certificate = () => {
  const [certificate, setCertificate] = useState([]);
  const [error, setError] = useState(false);

  async function fetchData() {
    const url = "http://127.0.0.1:8000/api/certificate/";
    const res = await fetch(url);

    res
      .json()
      .then((res) => setCertificate(res))
      .catch((err) => setError(err));
  }

  useEffect(() => {
    fetchData();
    console.log(error);
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
                    <span className="heading-meta">
                      <strong>
                        Bienvenido. Aquí obtendrás información de los Cursos y
                        Certificaciones que he obtenido.
                      </strong>
                    </span>
                    <h2 className="colorlib-heading">
                      Cursos y Certificaciones
                    </h2>
                    {certificate.map((cer) => (
                      <div key={cer.id}>
                        <h4 className="colorlib-hero">{cer.course_name}</h4>
                        <div></div>
                        <img className="img-fluid" src={cer.img}></img>
                        <hr />
                      </div>
                    ))}
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

export default Certificate;
