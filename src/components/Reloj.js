import React from 'react';
import {useState, useEffect} from 'react';

function Reloj(){
const [relojState, setRelojState] = useState();

useEffect(()=>{
    setInterval(()=>{
        const date = new Date();
        setRelojState(date.toLocaleTimeString());
    }, 1000);    
},[]);

return(
    <div>
        {relojState}
    </div>
)

}

export default Reloj