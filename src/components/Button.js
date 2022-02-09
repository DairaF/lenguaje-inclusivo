import React from 'react';
import SubButton from './SubButton';

function Button ({handleClick, children}){
    return(
        <div>
            <button onClick={console.log('sigue funcionando')}>
                {children}
            </button>
            <SubButton handleClick={handleClick} children="rae2" />
        </div>
    )
    }

export default React.memo(Button);