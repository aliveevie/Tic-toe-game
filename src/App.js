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
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [gameEnded, setGameEnded] = useState(false);
 


  if (gameEnded) {
    // Update scores using the state setters
    setScore1(prevScore1 => prevScore1 + 1);
    setScore2(prevScore2 => prevScore2 + 1);
  };
  


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
     
          { !frontPage && selectedOption && (<Players selectedPlayer={selectedPlayer}  handleBackClick={handleBackClick} 
            score1={score1} score2={score2}
          />)}
  
      <div className='innerContainer'>
         { frontPage && <FrontPage  handleClick={handleClick}  handlePlay={handleSelectedPlayer} />}
         { !frontPage && !selectedOption && (<Choice handlePlay={handleSelectedOption} 
            handleClick={handleBackClick} 
         />)}

         { !frontPage && selectedOption && (<Board 
            selectedOption={selectedOption}
           selectedPlayer={selectedPlayer}  
           setGameEnded={setGameEnded}
           setScore1={setScore1}
           setScore2={setScore2}
         />)}

    </div>
    </div>
  )
};

export default App;
