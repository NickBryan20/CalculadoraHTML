import { useState } from 'react';
import './App.css';
import Boton from './components/Boton';
import { evaluate } from 'mathjs';

function App() {
  const [valor, setValor] = useState("")
  const hacerClick = (texto) => {
    //console.log(texto)
    setValor(valor + texto)
  }

  const calcularClick=()=>{
    console.log("La operación a calcular es: ", valor)
    try {
      setValor(evaluate(valor).toString());
    } catch (error) {
      setValor("SystemError");
    }
  }

  return (
    <div className="App">
      <strong className='calculadora'>Calculadora</strong>
      <div>
        <input type="text" value={valor} readOnly />
      </div>
      <div>
        <Boton className = 'botones' hacerClick={hacerClick}>1</Boton>
        <Boton className = 'botones' hacerClick={hacerClick}>2</Boton>
        <Boton className = 'botones' hacerClick={hacerClick}>3</Boton>
        <Boton className = 'botones' hacerClick={hacerClick}>+</Boton>
      </div>
      <div>
        <Boton className = 'botones' hacerClick={hacerClick}>4</Boton>
        <Boton className = 'botones' hacerClick={hacerClick}>5</Boton>
        <Boton className = 'botones' hacerClick={hacerClick}>6</Boton>
        <Boton className = 'botones' hacerClick={hacerClick}>-</Boton>
      </div>
      <div>
        <Boton className = 'botones' hacerClick={hacerClick}>7</Boton>
        <Boton className = 'botones' hacerClick={hacerClick}>8</Boton>
        <Boton className = 'botones' hacerClick={hacerClick}>9</Boton>
        <Boton className = 'botones' hacerClick={hacerClick}>*</Boton>
      </div>
      <div>
        <Boton className = 'botones' hacerClick={hacerClick}>.</Boton>
        <Boton className = 'botones' hacerClick={hacerClick}>0</Boton>
        <Boton className = 'botones' hacerClick={calcularClick}>=</Boton>
        <Boton className = 'botones' hacerClick={hacerClick}>/</Boton>
      </div>
      <div>
        <button className = 'botones' onClick={() => setValor("")}>Clear</button>
      </div>
    </div>
  );
}

export default App;
