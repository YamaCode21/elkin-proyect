import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./../styles/home.css";
import imagen1 from "./../assets/slider1.jpeg";
import imagen2 from "./../assets/slider2.jpeg";
import imagen3 from "./../assets/slider3.jpeg";
import imagen4 from "./../assets/slider4.jpeg";
import imagen5 from "./../assets/slider5.jpeg";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <main id="home">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="imgslider" src={imagen1} alt="..." />
          </div>
          <div class="carousel-item">
            <img class="imgslider" src={imagen3} alt="..." />
          </div>
          <div class="carousel-item">
            <img class="imgslider" src={imagen4} alt="..." />
          </div>
          <div class="carousel-item">
            <img class="imgslider" src={imagen5} alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <section id="integrantes">
        <h2 className="title">Integrante</h2>
        <p className="sub-title">
          Somos un grupo de docentes de la maestría de tecnología aplacadas a la
          educación trabajamos en zonas muy diversas, de Medellín Antioquia y el
          tambo cauca, pero con las metas bien establecidas de superación en lo
          referente a lo laboral y personal por tal motivo estamos juntos viendo
          este módulo de herramientas digitales para las organizaciones
          educativas de la universidad de Santander En este sitio web
          encontraras información en lo referente a la estructura digital de la
          materia de educación física y deportes del profesor Vladimir Rojas en
          la institución educativa concejo de Medellín Sean todos bienvenidos.
        </p>
        <div className="target-container-info d-flex justify-content-around align-items-center flex-column flex-xl-row">
          <div className="info-container">
            <div className="info-head">
              <span>Elkin José Bastidas Gómez</span>
              <br />
              <p>Docente del área de educación física</p>
            </div>
            <div className="center-container d-flex justify-content-around align-items-center flex-column flex-xl-row">
              <div className="image-container" id="vladimir"></div>
              <div className="description-container">
                <h3 className="target-description">
                  Me encuentro ubicado en el corregimiento de Buenavista, en el
                  municipio de Santa Rosa del Sur de Bolívar, bienvenidos y
                  bienvenidas a mi página web, Bendiciones...
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
