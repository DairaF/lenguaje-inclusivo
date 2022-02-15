import React, { useState, useCallback, useEffect } from 'react';
import '../App.css';


function Tradicionales() {

  const [page,setPage]=useState(0);
  return (
    <div >
      {page === 0 && <h1>Tradicionales</h1> }
    </div>
  );
}

export default Tradicionales;
