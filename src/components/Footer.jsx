import React from "react";
import "./../styles/footer.css";
import imagenFooter from "./../assets/logo_sin_fondo.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <img className="logo-footer" src={imagenFooter} alt="" />
        <div className="footer-content">
          <div>
            <h5>Elkin José Bastidas Gómez</h5>
            <p>Docente del área de educación física</p>
            <p>
              Me encuentro ubicado en el corregimiento de Buenavista, en el
              municipio de Santa Rosa del Sur de Bolívar, bienvenidos y
              bienvenidas a mi página web, Bendiciones...
            </p>
          </div>
        </div>
      </div>

      <p className="text-center">&copy; 2024 Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
