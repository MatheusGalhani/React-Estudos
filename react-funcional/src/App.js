import React, { useState, useEffect } from 'react'
import ReducerHook from './reducer/index'

function App() {
  const [numero, setNumero] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [resultado, setResultado] = useState(0);
  
  // useEffect, 1 argumento um arrow function, com ações. 
  // 2 argumento um array com os objetos que serão monitorados
  // sempre que houver alteração, a função arrow será disparada
  useEffect(() => {
    const resultadoFormatado = parseInt(numero) + parseInt(numero2);
    setResultado(resultadoFormatado);
  }, [numero, numero2])

  return (
    <React.Fragment>
      Numero1: <input type="number" value={numero} min="0" onChange={(e) => setNumero(e.target.value)}/><br/><br/>
      Numero2: <input type="number" value={numero2} min="0" onChange={(e) => setNumero2(e.target.value)}/><br/><br/>
      Resultado: <input type="text" value={resultado} disabled/>
    </React.Fragment>
  );
}

export default App;
