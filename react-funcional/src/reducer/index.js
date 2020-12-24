import React, { useState, useEffect } from 'react';
import useStore from './somaReducer'

function ReducerHook() {
  const [numero, setNumero] = useState(0);
  const [numero2, setNumero2] = useState(0);

  const [store, dispatch] = useStore();

  
  // useEffect, 1 argumento um arrow function, com ações. 
  // 2 argumento um array com os objetos que serão monitorados
  // sempre que houver alteração, a função arrow será disparada
  useEffect(() => {
    const resultadoFormatado = parseInt(numero) + parseInt(numero2);
    // O dispatch irá chamar a ação, que irá alterar o estado de resultado,
    // através da regra implementada
    dispatch({
      type: 'SOMA',
      payload: resultadoFormatado,
    });
  }, [numero, numero2])

  return (
    <React.Fragment>
      Numero1: <input type="number" value={numero} min="0" onChange={(e) => setNumero(e.target.value)}/><br/><br/>
      Numero2: <input type="number" value={numero2} min="0" onChange={(e) => setNumero2(e.target.value)}/><br/><br/>
      Resultado: <input type="text" value={store.resultado} disabled/>
    </React.Fragment>
  );
}

export default ReducerHook;
