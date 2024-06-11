import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./../styles/navbar.css";
import logo from "./../assets/logo_sin_fondo.png";
import miImagenInicio from "./../assets/banner-index.jpg";
import miImagenDocumentos from "./../assets/banner-documentos.jpg";
import miImagenPresentaciones from "./../assets/banner-presentaciones.jpg";
import miImagenVideos from "./../assets/banner-videos.jpg";
import miImagenPodcast from "./../assets/banner-podcast.jpg";
import miImagenBiblioteca from "./../assets/banner-biblioteca.jpg";
import miImagenTutoriales from "./../assets/banner-tutoriales.jpg";
import miImagenDiscusion from "./../assets/banner-discusion.jpg";
import miImagenCapacitacion from "./../assets/banner-capacitacion.jpg";
import miImagenOrientacion from "./../assets/banner-orientacion.jpg";
import miImagenApoyo from "./../assets/banner-apoyo.jpg";
import miImagenBolsa from "./../assets/banner-bolsa.jpg";
import miImagenChat from "./../assets/banner-chat.jpg";
import miImagenEncuestas from "./../assets/banner-encuestas.jpg";
import miImagenForos from "./../assets/banner-foros.jpg";
import ScrollToTop from "./ScrollToTop";

const Navbar = () => {
  const [rutaActual, setRutaActual] = useState("");
  const [infoRuta, setInfoRuta] = useState({ imagen: null, texto: "" });

  const location = useLocation();

  useEffect(() => {
    setRutaActual(location.pathname);
    setInfoRuta(obtenerImagenBanner(location.pathname));
  }, [location]);

  const obtenerImagenBanner = (ruta) => {
    let info = { imagen: miImagenInicio, texto: "Bienvenido" };
    switch (ruta) {
      case "/documentos":
        info.imagen = miImagenDocumentos;
        info.texto = "Documentos";
        break;
      case "/presentaciones":
        info.imagen = miImagenPresentaciones;
        info.texto = "Presentaciones";
        break;
      case "/videos":
        info.imagen = miImagenVideos;
        info.texto = "Videos";
        break;
      case "/podcast":
        info.imagen = miImagenPodcast;
        info.texto = "Podcast";
        break;
      case "/biblioteca-virtual":
        info.imagen = miImagenBiblioteca;
        info.texto = "Biblioteca Virtual";
        break;
      case "/tutoriales-guias":
        info.imagen = miImagenTutoriales;
        info.texto = "Tutoriales y Guías";
        break;
      case "/foros-discusion":
        info.imagen = miImagenDiscusion;
        info.texto = "Foros de Discusión";
        break;
      case "/capacitacion":
        info.imagen = miImagenCapacitacion;
        info.texto = "Capacitación";
        break;
      case "/orientacion-academica":
        info.imagen = miImagenOrientacion;
        info.texto = "Orientación Académica";
        break;
      case "/apoyo-psicologico":
        info.imagen = miImagenApoyo;
        info.texto = "Apoyo Psicológico";
        break;
      case "/bolsa-trabajo":
        info.imagen = miImagenBolsa;
        info.texto = "Bolsa de Trabajo";
        break;
      case "/chat":
        info.imagen = miImagenChat;
        info.texto = "Chat";
        break;
      case "/encuestas":
        info.imagen = miImagenEncuestas;
        info.texto = "Encuestas";
        break;
      case "/foros":
        info.imagen = miImagenForos;
        info.texto = "Foros";
        break;
      default:
        break;
    }
    return info;
  };

  const closeNavbar = () => {
    const navbarToggler = document.querySelector(".navbar-toggler");
    if (navbarToggler.getAttribute("aria-expanded") === "true") {
      navbarToggler.click();
    }
  };

  return (
    <React.Fragment>
      <ScrollToTop />
      <header className="d-flex">
        <img className="img-banner" src={infoRuta.imagen} alt="" />
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark col-10 fixed-top">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img
                className="logo-nav"
                src={logo}
                alt="logo"
                width="80px"
                height="80px"
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/#home" onClick={closeNavbar}>
                    Inicio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/#integrantes"
                    onClick={closeNavbar}
                  >
                    Integrantes
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <button
                    className="nav-link btn dropdown-toggle"
                    id="serviciosDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Pedagógica
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="serviciosDropdown"
                  >
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/documentos"
                        onClick={closeNavbar}
                      >
                        Documentos
                      </Link>
                    </li>
                    <li>
                      <div className="dropdown-divider"></div>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/presentaciones"
                        onClick={closeNavbar}
                      >
                        Presentaciones
                      </Link>
                    </li>
                    <li>
                      <div className="dropdown-divider"></div>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/videos"
                        onClick={closeNavbar}
                      >
                        Videos
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/podcast"
                        onClick={closeNavbar}
                      >
                        Pódcast
                      </Link>
                    </li>
                    <li>
                      <div className="dropdown-divider"></div>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/biblioteca-virtual"
                        onClick={closeNavbar}
                      >
                        Biblioteca virtual
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <button
                    className="nav-link btn dropdown-toggle"
                    id="serviciosDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Directiva
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="serviciosDropdown"
                  >
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/tutoriales-guias"
                        onClick={closeNavbar}
                      >
                        Tutoriales y Guías
                      </Link>
                    </li>
                    <li>
                      <div className="dropdown-divider"></div>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/foros-discusion"
                        onClick={closeNavbar}
                      >
                        Foro de Discusión
                      </Link>
                    </li>
                    <li>
                      <div className="dropdown-divider"></div>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/capacitacion"
                        onClick={closeNavbar}
                      >
                        Capacitación
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <button
                    className="nav-link btn dropdown-toggle"
                    id="serviciosDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Organizacional
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="serviciosDropdown"
                  >
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/orientacion-academica"
                        onClick={closeNavbar}
                      >
                        Orientación academica
                      </Link>
                    </li>
                    <li>
                      <div className="dropdown-divider"></div>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/apoyo-psicologico"
                        onClick={closeNavbar}
                      >
                        Apoyo psicológico
                      </Link>
                    </li>
                    <li>
                      <div className="dropdown-divider"></div>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/bolsa-trabajo"
                        onClick={closeNavbar}
                      >
                        Bolsa de trabajo
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <button
                    className="nav-link btn dropdown-toggle"
                    id="serviciosDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Comunitaria
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="serviciosDropdown"
                  >
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/chat"
                        onClick={closeNavbar}
                      >
                        Chat
                      </Link>
                    </li>
                    <li>
                      <div className="dropdown-divider"></div>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/encuestas"
                        onClick={closeNavbar}
                      >
                        Encuestas
                      </Link>
                    </li>
                    <li>
                      <div className="dropdown-divider"></div>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/foros"
                        onClick={closeNavbar}
                      >
                        Foros
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <h1 className="banner-title">¡{infoRuta.texto}!</h1>
      </header>
    </React.Fragment>
  );
};

export default Navbar;
