import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {
    function handleCLick() {
        props.onRemove(props.id);
    }

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleCLick}><DeleteIcon /></button>
        </div>
    )
}

export default Note;