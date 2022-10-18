import React from 'react';
import {useState, useEffect} from 'react';

function Qatar(){
    const [qatarState, setQatarState] = useState();

    useEffect(()=>{
        let dateQ = new Date('11/20/2022');
        let date0 = new Date();
        let diasQatar = dateQ - date0;
        let totalDays = Math.ceil(diasQatar / (1000 * 3600 * 24))
        setQatarState(totalDays);
    }, [])

    return(
        <div className="slide">
            Días a Qatar: {qatarState}
        </div>
        
    )

}

export default Qatar