import React from "react";
import "../styles.css";
import contacts from "../contact";
import Card from "./Card";
import Avatar from "./Avatar";

function createCard(contact) {
    return (<Card
        key={contact.id}
        id={contact.id}
        name={contact.name}
        img={contact.imgURL}
        tel={contact.phone}
        email={contact.email}
    />)
}

function App() {
    return (
        <div>
            <h1 className="heading"> Meus Contatos</h1>
            <Avatar img={"https://files.adventistas.org/noticias/pt/2020/01/rodrigosilva1.jpg"} />
            {contacts.map(createCard)}
        </div>
    );
}

export default App;