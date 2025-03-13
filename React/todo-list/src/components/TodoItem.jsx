import React, { useState } from "react";

function TodoItem(props) {
    const [isEditMode, SetEditMode] = useState(false);
    const [newText, setNewText] = useState(props.text);

    function toggleEditMode() {
        SetEditMode(prevValue => { return !prevValue })
    }

    function getText() {
        if (isEditMode === true) {
            return <input onChange={updateText} value={newText} />
        }
        return props.text;
    }

    function getButton() {
        if (isEditMode === true) {
            return <button onClick={save}><span>Save</span></button>
        }
        return <button onClick={toggleEditMode}><span>Edit</span></button>
    }

    function updateText(event) {
        setNewText(event.target.value);
    }

    function save() {
        toggleEditMode();
        props.onUpdate(props.id, newText);
    }

    return (
        <div >
            <li>
                {getText()}
                {getButton()}
                <button onClick={() => { props.onChecked(props.id) }}><span>Delete</span></button>
            </li>
        </div>
    );
}

export default TodoItem;