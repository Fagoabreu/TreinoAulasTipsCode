import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState('Olá');
  const [name, setName] = useState('Olá');
  const [isMouseOver, setIsMouseOver] = useState(false);

  function handleClick(event) {
    setHeadingText(name)
    event.preventDefault();
  }

  function handleMouseOver() {
    setIsMouseOver(true);
  }

  function handleMouseOut() {
    setIsMouseOver(false);
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange} type="text"
          placeholder="Qual seu nome?"
          value={name}
        />
        <button style={{ backgroundColor: isMouseOver ? 'black' : 'white' }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          type="submit"
        >Submit</button>
      </form>
    </div>
  );
}

export default App;
