import React, { } from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Quiz from "./routes/Quiz";
import Caja from "./routes/Caja";
import Tradicionales from "./routes/Tradicionales";
import Disruptivas from "./routes/Disruptivas";
import Landing from "./routes/Landing";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <span>header</span>
      <Routes>
       <Route path="/" element={<Landing/>} />
       <Route path="quiz" element={<Quiz/>} />
       <Route path="caja-de-herramientas" element={<Caja/>} />
       <Route path="caja-de-herramientas/tradicionales" element={<Tradicionales/>} />
       <Route path="caja-de-herramientas/disruptivas" element={<Disruptivas/>} />
     </Routes>
      <span>footer</span>
   </BrowserRouter>
    </div>
  );
}

export default App;
