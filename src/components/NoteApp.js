import React, { useEffect, useReducer } from 'react';
import notesReducer from '../reducers/notes';
import NoteList from './NoteList';
import AddNoteForm from './AddNoteForm';
import NotesContext from '../context/notes-context';

const NoteApp = () => {
    //const [notes, setNotes] = useState([]);
    const [notes, dispatch] = useReducer(notesReducer, []);
  
    useEffect(() => {
      const notes = JSON.parse(localStorage.getItem('notes'))
      if(notes) {
          dispatch({ type: 'POPULATE_NOTES', notes })
        //setNotes(notesData)
      }
    }, [])
  
    useEffect(() => {
      const json = JSON.stringify(notes);
      localStorage.setItem('notes', json); 
    }, [notes])
  
    return (
        <NotesContext.Provider value={{ notes, dispatch }}>
            <h1>Notes</h1>
            <NoteList />
            <AddNoteForm />
        </NotesContext.Provider>
    )
}
  
export default NoteApp;  