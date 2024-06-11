import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./layout/Home";
import Documentos from "./layout/Documentos";
import Presentaciones from "./layout/Presentaciones";
import Videos from "./layout/Videos";
import Podcast from "./layout/Podcast";
import Biblioteca from "./layout/Biblioteca";
import Tutoriales from "./layout/Tutoriales";
import Discusion from "./layout/Discusion";
import Capacitacion from "./layout/Capacitacion";
import Orientacion from "./layout/Orientacion";
import Apoyo from "./layout/Apoyo";
import Bolsa from "./layout/Bolsa";
import Chat from "./layout/Chat";
import Encuestas from "./layout/Encuestas";
import Foros from "./layout/Foros";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/documentos" element={<Documentos />} />
        <Route path="/presentaciones" element={<Presentaciones />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/biblioteca-virtual" element={<Biblioteca />} />
        <Route path="/tutoriales-guias" element={<Tutoriales />} />
        <Route path="/foros-discusion" element={<Discusion />} />
        <Route path="/capacitacion" element={<Capacitacion />} />
        <Route path="/orientacion-academica" element={<Orientacion />} />
        <Route path="/apoyo-psicologico" element={<Apoyo />} />
        <Route path="/bolsa-trabajo" element={<Bolsa />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/encuestas" element={<Encuestas />} />
        <Route path="/foros" element={<Foros />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
