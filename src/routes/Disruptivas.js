import React, { useState, useCallback, useEffect } from 'react';
import '../App.css';


function Disruptivas() {

  const [page,setPage]=useState(0);
  return (
    <div >
      {page === 0 && <h1>Disruptivas</h1> }
    </div>
  );
}

export default Disruptivas;
