
import './App.css';
import Counter from './Counter';
import WindowSizer from './WindowSizer';
import Input from './Input';
import { Weather } from './Weather';
import { useState } from 'react';
function App() {
  const [inputValue, setInputValue] = useState('');
  return (
    <div className="App" style={{color: "red", backgroundColor: "orange"}}>
      <Counter /> 
      <WindowSizer />
      <Input value = {inputValue} onChange ={setInputValue}/>
      <Weather />
    </div>
  );
}

export default App;
