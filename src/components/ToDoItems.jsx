import React, { useState } from "react";

function ToDoList(props) {
  const [isDone, setIsDone] = useState("false");
  function handleClick() {
    setIsDone((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <li
      style={{ textDecoration: isDone ? "none" : "line-through" }}
      onClick={handleClick}
      onDoubleClick={() => {
        props.dblClicked(props.id);
      }}
    >
      {props.text}
    </li>
  );
}

export default ToDoList;
