import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [notes, setNotes] = useState([])

    function addNote(newNote) {
        setNotes(prevNotes => { return [...prevNotes, newNote] })
    }

    function removeNote(noteId) {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return (noteId !== index);
            })
        })

    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote} />
            {notes.map((noteItem, index) => {
                return (
                    <Note
                        key={index}
                        id={index}
                        title={noteItem.title}
                        content={noteItem.content}
                        onRemove={removeNote}
                    />
                );
            })}
            <Footer />
        </div>
    );
}

export default App;