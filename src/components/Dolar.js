import React from 'react';
import {useState, useEffect} from 'react';

function Dolar(){
   const [valorBlue, setValorBLue] = useState([]);
   useEffect(()=>{
    fetch("https://api-dolar-argentina.herokuapp.com/api/dolarblue")
        .then(response=>response.json())
        .then(data =>{
            setValorBLue(data.venta);
    })
    .catch(e=>console.log(e))
   }, [])

   const currency = function(number){
    return new Intl.NumberFormat('de-DE', {style: 'currency',currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits:0}).format(number);
    };

    return(
        <div>
            Dolar Blue: {currency(valorBlue)}
        </div>
    )
}

export default Dolar