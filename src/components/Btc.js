import React from 'react';
import {useState, useEffect} from 'react';

function Btc(){
   const [valorBtc, setValorBtc] = useState([]);
   useEffect(()=>{
    fetch("https://criptoya.com/api/ftx/btc/usd/0.5")
        .then(response=>response.json())
        .then(data =>{
            setValorBtc(data.ask);
    })
    .catch(e=>console.log(e))
   }, [])

   const currency = function(number){
    return new Intl.NumberFormat('de-DE', {style: 'currency',currency: 'USD', minimumFractionDigits: 2}).format(number);
    };

    return(
        <div className="slide">
            Bitcoin: {currency(valorBtc)}
        </div>
    )
}

export default Btc