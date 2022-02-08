import React from 'react';
function SubButton ({handleClick, children}){
    return(
    <button onClick={handleClick}>
        {children}
    </button>
    )
    }

export default React.memo(SubButton);