import React from "react";
import './../styles/podcast.css';

const Podcast = () => {
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
          <iframe
            allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
            frameBorder="0"
            allowFullScreen
            style={{ borderRadius: "10px" }}
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            src="https://embed.podcasts.apple.com/es/podcast/el-valor-de-la-educaci%C3%B3n-f%C3%ADsica/id978019005"
          ></iframe>
        </div>
        <div className="video-container">
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/show/4l3WCJM4FV1i3EzEe1eU4M?utm_source=generator"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/sOsV4W4y9CI?si=PxvuLIYujWq-j5pw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/eLfCUPNXNpE?si=FSM8cBWOGgO3QHcd"
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

export default Podcast;
