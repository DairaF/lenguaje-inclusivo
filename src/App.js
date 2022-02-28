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
import Tradicionales from "./routes/Tradicionales";
import Disruptivas from "./routes/Disruptivas";
import Landing from "./routes/Landing";
import Texto from "./routes/Texto";
function App() {

  return (
    <div className="App">
      <HashRouter>
        <Menu/>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/quiz" element={<Quiz/>} />
          <Route path="/caja-de-herramientas" element={<Caja/>} />
          <Route path="/caja-de-herramientas/tradicionales" element={<Tradicionales/>} />
          <Route path="/caja-de-herramientas/disruptivas" element={<Disruptivas/>} />
          <Route path="/texto-expositivo" element={<Texto/>} />
        </Routes>
    </HashRouter>
    </div>
  );
}

export default App;
