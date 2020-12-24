import React, { useState } from 'react'

function UseStateTutorial() {
  const [numero, setNumero] = useState(0);
  const [numero2, setNumero2] = useState(10);
  const [resultado, setResultado] = useState();

  const somarValores = () => {
    const resultadoFormatado = parseInt(numero) + parseInt(numero2);
    setResultado(resultadoFormatado);
  }

  return (
    <React.Fragment>
      Numero1: <input type="number" value={numero} min="0" onChange={(e) => setNumero(e.target.value)}/><br/><br/>
      Numero2: <input type="number" value={numero2} min="0" onChange={(e) => setNumero2(e.target.value)}/><br/><br/>
      Resultado: <input type="text" value={resultado} disabled/>
      <button onClick={somarValores}>Somar</button>
    </React.Fragment>
  );
}

export default UseStateTutorial;
