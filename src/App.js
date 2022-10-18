import './App.css';
import Btc from "./components/Btc"
import Dolar from "./components/Dolar"
import Reloj from "./components/Reloj"
import Qatar from "./components/Qatar"


function App() {
  return (
    <div className='elDocumento'>
      <div className='contenedorReloj'>
        <Reloj />
      </div>
      <div className='slider'>
        <div className='slide-track'>  
          <Btc />
          <Dolar />
          <Qatar />
          <Btc />
          <Dolar />
          <Qatar />
        </div>
      </div>
    </div>
  );
}

export default App;
