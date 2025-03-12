import React from "react";
import Login from "./Login";

let isLoggedIn = false;

function App() {
    return (
        <div className="container">
            {isLoggedIn ? <h1>Bem Vindo</h1> : <h1>Cadastre-se</h1>}
            <Login userIsRegistered={isLoggedIn} />
        </div>
    );
}

export default App;