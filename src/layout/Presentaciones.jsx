import React from "react";
import "./../styles/presentaciones.css";

const Presentaciones = () => {
  return (
    <main>
      <div className="description-container">
        <p>
          ¡Bienvenido! Aquí encontrarás una amplia selección de videos
          tutoriales organizados por periodo, diseñados para fortalecer tu
          aprendizaje sobre el tema en cuestión.
        </p>
      </div>

      <div className="video-grid">
        <div className="video-container">
          <div style={{ width: "100%" }}>
            <div
              style={{
                position: "relative",
                paddingBottom: "56.25%",
                paddingTop: 0,
                height: 0
              }}
            >
              <iframe
                title="presentacion ed. fisica concejo de medellin"
                frameBorder="0"
                width="1200px"
                height="605px"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%"
                }}
                src="https://es.slideshare.net/slideshow/diapositivas-de-educacion-fisica-48737310/48737310"
                type="text/html"
                allowScriptAccess="always"
                allowFullScreen={true}
                scrolling="yes"
                allowNetworking="all"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="video-container">
        <iframe src="https://prezi.com/p/embed/6qg9xrvdysxt/" id="iframe_container" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" allow="autoplay; fullscreen" height="315" width="560"></iframe>
        </div>
        <div className="video-container">
          <iframe
            src="https://es.slideshare.net/slideshow/presentacion-i-educacion-fisica/56446773"
            width="640"
            height="480"
            allow="autoplay"
          ></iframe>
        </div>
        <div className="video-container">
          <iframe
            src="https://es.slideshare.net/slideshow/la-educacin-fsica-55893996/55893996"
            width="640"
            height="480"
            allow="autoplay"
          ></iframe>
        </div>
      </div>
    </main>
  );
};

export default Presentaciones;