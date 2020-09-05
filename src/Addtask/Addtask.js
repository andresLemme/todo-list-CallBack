import React, { useState } from "react";

function Addtask(props) {
  const [inputValue, setInputValue] = useState("")

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleAdd() {
    if (inputValue && props.handleCallback) {
      props.handleCallback(inputValue)
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
