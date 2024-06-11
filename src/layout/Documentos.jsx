import React from "react";
import './../styles/documentos.css'

const Documentos = () => {
  return (
    <main>
      <div className="description-container">
        <p>
          Bienvenido a esta sección dedicada a fortalecer tus conocimientos
          sobre el tema a través de una amplia gama de documentos pedagogicos.
        </p>
      </div>

      <div className="video-grid">
        <div className="video-container">
          <iframe
            src="https://docs.google.com/document/d/1QNmWg6hGN46RMjORsAoFGQlarM613J3n/edit"
            width="640"
            height="480"
            allow="autoplay"
          ></iframe>
        </div>
        <div className="video-container">
          <iframe
            src="https://docs.google.com/document/d/1g-D09gdwrU1mtI4jIXvnM2vSj7YOqDAo/edit?rtpof=true"
            width="640"
            height="480"
            allow="autoplay"
          ></iframe>
        </div>
        <div className="video-container">
          <iframe
            src="https://docs.google.com/document/d/1FKGVZ9EsqOiPDP0BLN4vGWwa2WX0LZEu/edit?usp=drive_web&ouid=116867632256016236422&rtpof=true"
            width="640"
            height="480"
            allow="autoplay"
          ></iframe>
        </div>
      </div>
    </main>
  );
};

export default Documentos;
