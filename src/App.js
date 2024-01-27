import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className='App'>
      <h1>COUNTER</h1>
      <p className='number'>{count}</p>
      <div className='button-container'>
        <button className='button' onClick={() => setCount(count+1)}>+</button>
        <button className='button' onClick={() => setCount(count-1)}>-</button>
      </div>
    </div>
  );
}

export default App;
