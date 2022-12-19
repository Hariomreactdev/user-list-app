import { useState } from 'react';
import './App.css';
import Home from './component/Home';

function App() {
  const [darkMode,setDarkMode]=useState(false)
  return (
    <div className="App">

    <div className={darkMode?'dark-mode':'light-mode'}>
      <div className="container">
        <span style={{color:darkMode?"gray":"yellow"}}>*</span>
        <div className="switch-checkbox">
    <label className="switch">
        <input type="checkbox" onChange={()=>setDarkMode(!darkMode)}/>
        <span className="slider round"></span>
        </label>

        </div>
        
        <span style={{color:darkMode?"#c96dfd":"gray"}}>)</span>
      
      </div>
      <Home />
    </div>
    </div>
  );
}

export default App;
