import React, { useState } from "react";

const Contact = () => {
  const [datos, setDatos] = useState({ nombre: "", email: "", mensaje: "" });

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (e) => {
    e.preventDefault();
    console.log("Enviando datos...." + JSON.stringify(datos));
  };
  return (
    <div>
      <section className="colorlib-contact" data-section="certificate">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-12">
              <div
                className="row row-bottom-padded-sm animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="col-md-12">
                  <div className="contact-asc">
                    <h2 className="colorlib-heading">Contacto</h2>
                    <h5 className="colorlib-hero text-center">
                      {" "}
                      ¿Estás interesado en contratarme o solo quieres saludarme?
                    </h5>
                    <div></div>
                    <div className="container">
                      <form
                        className="contact-form col-lg-8 mx-lg-auto"
                        onSubmit={enviarDatos}
                      >
                        <h3 className="text-center mb-3">Contáctame</h3>
                        <div className="form-row">
                          <div className="form-group col-12">
                            <input
                              className="form-control"
                              type="text"
                              name="nombre"
                              placeholder="Nombre"
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="form-group col-12">
                            <input
                              className="form-control"
                              type="email"
                              name="email"
                              placeholder="Email"
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="form-group col-12">
                            <textarea
                              className="form-control"
                              type="text"
                              name="mensaje"
                              placeholder="Ingrese su mensaje"
                              rows="10"
                              cols="40"
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="form-group col-12">
                            <button
                              className="btn btn-block btn-primary py-2"
                              type="submit"
                            >
                              Enviar Ahora
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
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

export default Contact;
