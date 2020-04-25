import React, { useContext } from 'react'
import NotesContext from '../context/notes-context'
import useMousePosition from '../hooks/useMousePosition';

const Note = (props) => {
    const { dispatch } = useContext(NotesContext)
    const position = useMousePosition()

    return (
      <div>
        <h3>{props.note.title}</h3>
        <p>{props.note.body}</p>
        <p>{position.x}, {position.y}</p>
        <button onClick={() => dispatch({ type: 'REMOVE_NOTE', title: props.note.title })}>x</button>
      </div>
    )
}

export default Note