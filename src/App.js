import React, { useEffect } from 'react';
import './assets/css/App.css';
import {
  HashRouter,
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Quiz from "./routes/Quiz";
import Caja from "./routes/Caja";
import GuiaAuto from "./routes/GuiaAuto";
import NuevosMorfemas from "./routes/NuevosMorfemas";
import Pronombres from "./routes/Pronombres";
import Sustantivos from "./routes/Sustantivos";
import Expresiones from "./routes/Expresiones";
import Landing from "./routes/Landing";
import Acerca from "./routes/Acerca";
import Texto from "./routes/Texto";
import Herramienta from "./routes/Herramienta";
import ReactGA from "react-ga4";
function App() {
  ReactGA.initialize("G-SQS0ZVGHKM");
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return (
    <div className={ window.location.pathname =='/' ? "App" : "App AppOV"}>
      <BrowserRouter>
        { window.location.pathname!=='/quiz' ? <Menu/>: null }
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/quiz" element={<Quiz/>} />
          <Route path="/caja-de-herramientas" element={<Caja/>} />
          <Route path="/guia-autocorrecion" element={<GuiaAuto/>} />
          <Route path="/caja-de-herramientas/sustantivos" element={<Sustantivos/>} />
          <Route path="/caja-de-herramientas/pronombres" element={<Pronombres/>} />
          <Route path="/caja-de-herramientas/expresiones" element={<Expresiones/>} />
          <Route path="/caja-de-herramientas/nuevos-morfemas" element={<NuevosMorfemas/>} />
          <Route path="/que-sentido-tiene-el-lenguaje-inclusivo" element={<Texto/>} />
          <Route path="/acerca-del-proyecto" element={<Acerca/>} />
          <Route path="/caja-de-herramientas/herramientas" element={<Herramienta/>} />
        </Routes>
        { window.location.pathname =='/' ? <Footer/>
        :window.location.pathname =='/caja-de-herramientas/sustantivos' ? <Footer/>
        :window.location.pathname =='/caja-de-herramientas/pronombres' ? <Footer/>
        :window.location.pathname =='/caja-de-herramientas/expresiones' ? <Footer/>
        :window.location.pathname =='/caja-de-herramientas/herramientas' ? <Footer/>
        :window.location.pathname =='/caja-de-herramientas/nuevos-morfemas' ? <Footer/>
        :window.location.pathname =='/guia-autocorrecion' ? <Footer/>
        :window.location.pathname =='/que-sentido-tiene-el-lenguaje-inclusivo' ? <Footer/>
        :window.location.pathname =='/acerca-del-proyecto' ? <Footer/>
        : null }
        
    </BrowserRouter>
    </div>
  );
}

export default App;
