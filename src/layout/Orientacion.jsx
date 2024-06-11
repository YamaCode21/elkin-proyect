import React from "react";
import "./../styles/orientacion.css";

const Orientacion = () => {
  return (
    <main className="main-orientacion">
      <div className="target-container-info-orientacion d-flex justify-content-around align-items-center flex-column flex-xl-row">
        <div className="container-blue">
          <div className="info-container-orientacion">
            <div className="info-head">
              <span>Gabriela Zea Mesa</span>
              <br />
              <p>Docente de Apoyo y Tutora del Programa "Todos Aprender"</p>
            </div>
            <div className="center-container-orientacion d-flex justify-content-around align-items-center flex-column flex-xl-row">
              <div className="image-container" id="vladimir"></div>
              <div className="description-container">
                <h3 className="target-description-orientacion">
                  Se ha especializado en la tutoría académica, guiando y
                  apoyando tanto a estudiantes como a docentes en su desarrollo.
                  Su liderazgo en la implementación de estrategias educativas
                  innovadoras ha mejorado significativamente el rendimiento
                  académico y ha promovido prácticas pedagógicas efectivas.
                  Además, su competencia en tecnologías educativas asegura una
                  enseñanza moderna y accesible para todos.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Orientacion;
