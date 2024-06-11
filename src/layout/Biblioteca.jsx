import React from "react";
import "./../styles/biblioteca.css";

const Biblioteca = () => {
  return (
    <main className="main-biblioteca">
      <div className="contenedoriframe">
      <div className="iframe">
          <iframe
            src="https://escuelasecundaria22savio.blogspot.com/"
            frameBorder="0"
            style={{ width: "100%", height: "100%", margin: 0 }}
          />
        </div>
        <div className="iframe">
          <iframe
            src="https://www.colombiaaprende.edu.co/"
            frameBorder="0"
            style={{ width: "100%", height: "100%", margin: 0 }}
          />
        </div>
      </div>
    </main>
  );
};

export default Biblioteca;
