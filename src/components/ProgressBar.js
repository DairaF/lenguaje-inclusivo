import React, { useState, useCallback, useEffect } from 'react';
 


function ProgressBar() {

  window.onscroll = function() {myFunction()};

  function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }

  return (
    <div className='' >
      <div class="progress-container">
        <div class="progress-bar" id="myBar"></div>
      </div>
    </div>
  );
}

export default ProgressBar;
