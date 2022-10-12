//import logo from './logo.svg';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
//import TextForms from './components/TextForms';
import React, { useState } from 'react';


function App() {
  const [mode,setMode]=useState('light');
  const [textMode,setTextMode]=useState('Enable Dark Mode');
  //const [toggleText,setToggleText]=useState('Enable dark Mode');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='rgb(25, 27, 56)';
      setTextMode('Disable Dark Mode')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      setTextMode('Enable Dark Mode')
    }

  }
  return (
    <>
    <Navbar title="Textutils2" aboutText="About Us" mode={mode} toggleMode={toggleMode} textMode={textMode}/>
    <div className="container my-3">
      <TextForms heading='Enter Text here' mode={mode}/>
    </div>
    
    </>
  );
}

export default App;

