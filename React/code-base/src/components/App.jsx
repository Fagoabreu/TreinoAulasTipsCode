import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fname: '',
    lName: '',
    email: ''
  });

  function handleChange(event) {
    const { value: newValue, name: inputName } = event.target;
    setFullName(prevValue => {
      return {
        ...prevValue,
        [inputName]: newValue
      }
    });
  }

  return (
    <div className="container">
      <h1>Olá {fullName.fName} {fullName.lName}</h1>
      <p>{fullName.email}</p>
      <form>
        <input name="fName" placeholder="Nome" onChange={handleChange} value={fullName.fName} />
        <input name="lName" placeholder="Sobrenome" onChange={handleChange} value={fullName.lName} />
        <input name="email" placeholder="Email" onChange={handleChange} value={fullName.email} />
        <button>Enviar</button>
      </form>
    </div>
  );
}

export default App;
