import React, { } from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Quiz from "./routes/Quiz";
import Landing from "./routes/Landing";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <span>header</span>
      <Routes>
       <Route path="/" element={<Landing/>} />
       <Route path="quiz" element={<Quiz/>} />
     </Routes>
      <span>footer</span>
   </BrowserRouter>
    </div>
  );
}

export default App;
