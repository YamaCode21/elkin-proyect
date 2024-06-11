import React from "react";
import imagen1 from "./../assets/image1.png"
import imagen2 from "./../assets/image2.png"
import imagen3 from "./../assets/image3.png"
import './../styles/capacitacion.css'

const Capacitacion = () => {
  return (
    <main className="main-capacitacion">
      <p>
        En esta sección podrás encontrar una variedad de cursos en deporte y
        educación física haciendo clic en cada imagen.
      </p>
        <div className="capacitacion-container">
          <a
            href="https://www.mindeporte.gov.co/mindeporte/quienes-somos/dependencias/direccion-fomento-desarrollo/actividad-fisica-3/programa-nacional-capacitacion-pnc/oferta-cursos-virtuales/fundamentos-alternativas-actividad-fisica-grupos-poblacionales"
            target="_blank"
          >
            <img src={imagen1} alt="" />
          </a>
          <a
            className="img-trabajos"
            href="https://www.tiendacompensar.com/cursos-para-niños/curso-actividad-fisica/HER-B-RED-DEP-MOT-128"
            target="_blank"
          >
            <img src={imagen2} alt="" />
          </a>
          <a
            className="img-trabajos"
            href="https://www.euroinnova.edu.es/cursos/deporte-educacion-fisica"
            target="_blank"
          >
            <img src={imagen3} alt="" />
          </a>
        </div>
    </main>
  );
};

export default Capacitacion;
