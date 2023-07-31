// App.js
import React, { useState } from 'react';
import './App.css'
import FrontPage from './components/Frontpage';
import Choice from './components/Choice';
import Square from './components/Square';

const App = () => {
  const [frontPage, setFrontPage] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);
 
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

  


  return(
    <div className='container'>
      <div className='innerContainer'>
         { frontPage && <FrontPage  handleClick={handleClick} />}
         { !frontPage && !selectedOption && (<Choice handlePlay={handleSelectedOption} 
            handleClick={handleBackClick}
         />)}

         { !frontPage && selectedOption && (<Square selectedOption={selectedOption}
            handleBackClick={handleBackClick}
         
         />)}

    </div>
    </div>
  )
};

export default App;
