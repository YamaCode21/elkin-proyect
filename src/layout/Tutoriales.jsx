import React from "react";
import "./../styles/tutoriales.css";

const Tutoriales = () => {
  return (
    <main>
      <div className="description-container">
        <p>
          ¡Bienvenido! Aquí encontrarás una amplia selección de videos tutoriales organizados por periodo, diseñados para fortalecer tu aprendizaje sobre el tema en cuestión.
        </p>
      </div>

      <div className="video-grid">
        <div className="video-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/vMAUTOgWn9w?si=zk-_FQXJmJqi4h3G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="video-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/plLpJXuKkFw?si=No2vyL4PGXQWcPgi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://docs.google.com/document/d/1DqvD80ssk5n7tFykOKdEn35qq_hhGjxG/edit?rtpof=true"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://docs.google.com/document/d/1pTBJlt09-Ga17gDJiAilS2qdFpnVci4q/edit?usp=drive_web&ouid=116867632256016236422&rtpof=true"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </main>
  );
};

export default Tutoriales;
