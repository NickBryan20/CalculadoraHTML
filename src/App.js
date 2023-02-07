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
      Calculador
      <div>
        <input type="text" value={valor} readOnly />
      </div>
      <div>
        <Boton hacerClick={hacerClick}>1</Boton>
        <Boton hacerClick={hacerClick}>2</Boton>
        <Boton hacerClick={hacerClick}>3</Boton>
        <Boton hacerClick={hacerClick}>+</Boton>
      </div>
      <div>
        <Boton hacerClick={hacerClick}>4</Boton>
        <Boton hacerClick={hacerClick}>5</Boton>
        <Boton hacerClick={hacerClick}>6</Boton>
        <Boton hacerClick={hacerClick}>-</Boton>
      </div>
      <div>
        <Boton hacerClick={hacerClick}>7</Boton>
        <Boton hacerClick={hacerClick}>8</Boton>
        <Boton hacerClick={hacerClick}>9</Boton>
        <Boton hacerClick={hacerClick}>*</Boton>
      </div>
      <div>
        <Boton hacerClick={hacerClick}>.</Boton>
        <Boton hacerClick={hacerClick}>0</Boton>
        <Boton hacerClick={calcularClick}>=</Boton>
        <Boton hacerClick={hacerClick}>/</Boton>
      </div>
      <div>
        <button onClick={() => setValor("")}>Clear</button>
      </div>
    </div>
  );
}

export default App;
