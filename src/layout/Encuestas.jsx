import React from "react";
import "./../styles/encuestas.css";

const Encuestas = () => {
  return (
    <main className="main-encuestas">
      <p>
        En esta sección, encontrarás una encuesta diseñada para recopilar tu
        valiosa opinión
      </p>
      <div className="col-10">
        <div className="video-container">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSexoc8DTCoIXwt4dct7nlrL8_5J-065kiMLbuSa1SE5bN9t1w/viewform"
            width="100%"
            height="4003"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
        </div>
      </div>
    </main>
  );
};

export default Encuestas;
