import React, { useState } from "react";
import { Fab, Zoom } from "@mui/material";
import { Add } from "@mui/icons-material";

function CreateArea(props) {

    const [expanded, setExpanded] = useState(false);

    const [note, setNote] = useState({
        title: '',
        content: ''
    });

    function handleChange(event) {
        const { value, name } = event.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title: '',
            content: ''
        });
        event.preventDefault();
    }

    function expand() {
        setExpanded(true);
    }

    return (
        <div>

            <form className="create-note">
                {expanded ?
                    <input
                        name="title"
                        value={note.title}
                        placeholder="Titulo"
                        onChange={handleChange}
                    />
                    : null
                }
                <textarea
                    name="content"
                    onClick={expand}
                    value={note.content}
                    placeholder="descrição do card"
                    rows={expanded ? 3 : 1}
                    onChange={handleChange}
                />
                <Zoom in={expanded}>
                    <Fab onClick={submitNote}><Add /></Fab>
                </Zoom>
            </form>
        </div>
    )
}

export default CreateArea;