import './App.css'
import React, { useEffect, useState, useMemo } from 'react';
import AddTask from './Components/AddTask';
import ListTask from './Components/ListTask';



const App = () => {
  const fonts = useMemo(() => [
    'Arial',
    'Verdana',
    'Helvetica',
    'Georgia',

  ],
  []);

  const [randomFont, setRandomFont] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * fonts.length);
    setRandomFont(fonts[randomIndex]);
  }, [fonts]);
  
  return (
    <div className='App' style={{ fontFamily: randomFont}}>
      <h1 style={{marginTop:"10px"}}>Todo Web App</h1>
      <img src={require("../src/assets/logo.jpeg")}
      alt="logo" 
      className='rotate-image'
      />
      <AddTask />
      <ListTask />  
    </div>
  );
};

export default App;
