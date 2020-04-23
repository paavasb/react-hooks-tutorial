import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const App = (props) => {
  const [count, setCount] = useState(props.initial);
  const [name, setName] = useState('Paavas');

  const increment = () => {
    setCount(count+1);
  }

  const changeName = (e) => {
    e.preventDefault();
    setName(e.target.value || "Anonymous");
  }

  return (
    <div>
      <p>Hi {name}, the current count is {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count-1)}>-1</button>
      <button onClick={() => setCount(props.initial)}>Reset</button>
      <input onChange={changeName} placeholder="Change Name"></input>
    </div>
  )
}

App.defaultProps = {
  initial: 0
}

ReactDOM.render(
  <React.StrictMode>
    <App initial={100}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
