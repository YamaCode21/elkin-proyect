import React from "react";
import imagen1 from "./../assets/cena.png";
import imagen2 from "./../assets/comfama.png";
import imagen3 from "./../assets/inder.png";
import "./../styles/bolsa.css";

const Bolsa = () => {
  return (
    <main className="main-bolsa">
      <p>
        En esta sección, encontrarás una completa bolsa de trabajo con
        oportunidades laborales relevantes para tus intereses profesionales y
        deportivas.
      </p>
      <div className="bolsa-container">
        <a
          href="https://www.mindeporte.gov.co/mindeporte/quienes-somos/dependencias/direccion-fomento-desarrollo/actividad-fisica-3/programa-nacional-capacitacion-pnc/oferta-cursos-virtuales/fundamentos-alternativas-actividad-fisica-grupos-poblacionales"
          target="_blank"
        >
          <img src={imagen1} alt="" />
        </a>
        <a
          href="https://www.mindeporte.gov.co/mindeporte/quienes-somos/dependencias/direccion-fomento-desarrollo/actividad-fisica-3/programa-nacional-capacitacion-pnc/oferta-cursos-virtuales/generalidades-habitos-estilos-vida-saludable-actividad-fisica"
          target="_blank"
        >
          <img src={imagen2} alt="" />
        </a>
        <a
          href="https://www.euroinnova.edu.es/cursos/deporte-educacion-fisica"
          target="_blank"
        >
          <img src={imagen3} alt="" />
        </a>
      </div>
    </main>
  );
};

export default Bolsa;
