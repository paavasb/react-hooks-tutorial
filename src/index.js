import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const NoteApp = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addNote = (e) => {
    e.preventDefault();
    setNotes([...notes, { title, body }]);
    setTitle('');
    setBody('');
  }

  const removeNote = (title) => {
    setNotes(notes.filter((note) => note.title !== title));
  }

  return (
    <div>
      <h1>Notes</h1>
      {notes.map((note) => (
        <div key={note.title}>
          <h3>{note.title}</h3>
          <p>{note.body}</p>
          <button onClick={() => removeNote(note.title)}>x</button>
        </div>
      ))}
      <p>Add Note</p>
      <form onSubmit={addNote}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea value={body} onChange={(e) => setBody(e.target.value)} />
        <button>Add Note</button>
      </form>
    </div>
  )
}

// const App = (props) => {
//   const [count, setCount] = useState(props.initial);
//   const [text, setText] = useState('');
//   const [name, setName] = useState('Paavas');

//   const increment = () => {
//     setCount(count+1);
//   }

//   const changeName = (e) => {
//     setName(e.target.value || "Anonymous");
//   }

//   return (
//     <div>
//       <p>Hi {name}, the current {text || 'count'} is {count}</p>
//       <button onClick={() => setCount(count + 1)}>+1</button>
//       <button onClick={() => setCount(count-1)}>-1</button>
//       <button onClick={() => setCount(props.initial)}>Reset</button>
//       <input value={text} onChange={(e) => setText(e.target.value)}/>
//       <input onChange={changeName} placeholder="Change Name" />
//     </div>
//   )
// }
// App.defaultProps = {
//   initial: 0
// }

ReactDOM.render(
  <React.StrictMode>
    <NoteApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
