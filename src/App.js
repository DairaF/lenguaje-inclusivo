import React, { } from 'react';
import './App.css';
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
import NuevosMorfemas from "./routes/NuevosMorfemas";
import Pronombres from "./routes/Pronombres";
import Sustantivos from "./routes/Sustantivos";
import Expresiones from "./routes/Expresiones";
import Landing from "./routes/Landing";
import Texto from "./routes/Texto";
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/quiz" element={<Quiz/>} />
          <Route path="/caja-de-herramientas" element={<Caja/>} />
          <Route path="/caja-de-herramientas/sustantivos" element={<Sustantivos/>} />
          <Route path="/caja-de-herramientas/pronombres" element={<Pronombres/>} />
          <Route path="/caja-de-herramientas/expresiones" element={<Expresiones/>} />
          <Route path="/caja-de-herramientas/nuevos-morfemas" element={<NuevosMorfemas/>} />
          <Route path="/texto-expositivo" element={<Texto/>} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
