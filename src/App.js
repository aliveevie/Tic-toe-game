// App.js
import React, { useState } from 'react';
import './App.css'
import FrontPage from './components/Frontpage';
import Choice from './components/Choice';
import Square from './components/Square';

const App = () => {
  const [frontPage, setFrontPage] = useState(true)
  function handleClick(){
    setFrontPage(!frontPage)
  }

  const [play, setPlay] = useState(true);

  function handlePlay(){
    setPlay(false)
    setFrontPage(false)
  }


  return(
    <div className='container'>
      <div className='innerContainer'>
         { frontPage ? <FrontPage  handleClick={handleClick} /> : 
         <Choice handleClick={handleClick} handlePlay={handlePlay} />}
         { !play && <Square /> }
    </div>
    </div>
   
  )
};

export default App;
