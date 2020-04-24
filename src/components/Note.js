import React, { useContext } from 'react';
import NotesContext from '../context/notes-context';

const Note = (props) => {
    const { dispatch } = useContext(NotesContext);
    return (
      <div>
        <h3>{props.note.title}</h3>
        <p>{props.note.body}</p>
        <button onClick={() => dispatch({ type: 'REMOVE_NOTE', title: props.note.title })}>x</button>
      </div>
    )
}

export default Note;