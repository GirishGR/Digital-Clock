import './App.css';
import React, { useState,useEffect } from 'react';

function App() {

  let time = new Date().toLocaleTimeString();

  const [currentTime, setCurrentTime] = useState(time);

  useEffect(() => {

    let secTimer = setInterval( () => {
      let time = new Date().toLocaleTimeString();
      setCurrentTime(time);
    }, 1000);

    return function cleanup() {
      clearInterval(secTimer);
    }
  });

  return (
    
    <div className="clock">
           <h1> {currentTime}</h1>
    </div>
  );
}

export default App;
