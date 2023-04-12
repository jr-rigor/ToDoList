import React, { useState } from "react";
import ToDoList from "./ToDoItems";
import list from "../list";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState(list);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoList
              text={todoItem}
              key={index}
              id={index}
              dblClicked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
