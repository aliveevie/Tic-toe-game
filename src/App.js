// App.js
import React, { useState } from 'react';
import './App.css'
import FrontPage from './components/Frontpage';
import Choice from './components/Choice';
import Players from './components/players';
import Board from './components/Board';

const App = () => {
  const [frontPage, setFrontPage] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
 
  function handleClick(){
    setFrontPage(false)
  }

  function handleSelectedOption(option){
    setSelectedOption(option)

  }

  function handleBackClick(){
    setSelectedOption(null);
    setFrontPage(true);
  }

  function handleSelectedPlayer(player){
      setSelectedPlayer(player)
      setFrontPage(false)
  }

  


  return(
    <div className='container'>
     
          { !frontPage && selectedOption && (<Players selectedPlayer={selectedPlayer}  handleBackClick={handleBackClick} />)}
  
      <div className='innerContainer'>
         { frontPage && <FrontPage  handleClick={handleClick}  handlePlay={handleSelectedPlayer} />}
         { !frontPage && !selectedOption && (<Choice handlePlay={handleSelectedOption} 
            handleClick={handleBackClick}
         />)}

         { !frontPage && selectedOption && (<Board selectedOption={selectedOption}
           
         />)}

    </div>
    </div>
  )
};

export default App;
