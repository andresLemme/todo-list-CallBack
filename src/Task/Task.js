import React, {useEffect} from "react";

function Task(props) {

  function handleClick() {
    const { name } = props;

    props.handleCallback(name); //Esta linea es la que manda de Task a Tasks
  };
 
 
  return (
    <li
      onClick={handleClick}
      style={props.isCompleted ? { color: "green", cursor: "pointer", textDecorationLine: "line-through"  } : { color: "black", cursor:"pointer" }}
    >
     
      {props.name}
    </li>
  );
}
export default Task;
