import React, { } from 'react';
import './App.css';
import {
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
      <BrowserRouter>
      <Menu/>
      <Routes>
       <Route path="/lenguaje-inclusivo/" element={<Landing/>} />
       <Route path="/lenguaje-inclusivo/quiz" element={<Quiz/>} />
       <Route path="/lenguaje-inclusivo/caja-de-herramientas" element={<Caja/>} />
       <Route path="/lenguaje-inclusivo/caja-de-herramientas/tradicionales" element={<Tradicionales/>} />
       <Route path="/lenguaje-inclusivo/caja-de-herramientas/disruptivas" element={<Disruptivas/>} />
       <Route path="/lenguaje-inclusivo/texto-expositivo" element={<Texto/>} />
     </Routes>
      <Footer/>
   </BrowserRouter>
    </div>
  );
}

export default App;
