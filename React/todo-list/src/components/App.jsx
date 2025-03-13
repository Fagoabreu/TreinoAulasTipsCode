import React, { useState } from "react";
import TodoItem from "./TodoItem";
import InputArea from "./InputArea";

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    if (!(inputText)) {
      return;
    }
    setItems(prevValue => [...prevValue, inputText]);
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => { return index !== id })
    })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {
            items.map((currentItem, index) => {
              return (
                <TodoItem
                  key={index}
                  id={index}
                  text={currentItem}
                  onChecked={deleteItem} />)
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
