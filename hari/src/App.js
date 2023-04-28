import logo from './logo.svg';
import './App.css';

import React, {useState,useEffect} from 'react';

function App() {
  const [firsts, setfirsts] = useState('livewire')
  
  const inc = () =>{
    setfirst('users')
  }

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${first}`)
      .then(response => response.json())
      .then(json => console.log(json))

  },[first])
return (
    <div className="App">
      <button onClick={inc}>Click</button>
      {first}
    </div>
  );
}

export default App;
