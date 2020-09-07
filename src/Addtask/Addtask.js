import React, { useState } from "react";

function Addtask(props) {
  const [inputValue, setInputValue] = useState("")

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleAdd() {
    //chequeando  en inputValue que el valor no sea false, null, undefined o vacio
    if (inputValue && props.handleCallback) { // este if es para evitar  potenciales errores y no explote y chequeda que existe la props
      props.handleCallback(inputValue) // Valor actual de cada input
      setInputValue("")
    }
  }

  function handleKeyPress(e) {
    if (e.keyCode == 13){
      handleAdd("")
    }
  }

  return (
    <>
      <input
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        value={inputValue}
        
      />
      <button onClick={handleAdd}>Agergar</button>
    </>
  );
}
export default Addtask;
