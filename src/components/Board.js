import React, { useState } from 'react';
import '../App.css';
import Square from './Square';

export default function Board({ selectedOption, selectedPlayer }) {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true); // Start with X

  const handleClick = (i) => {
    if(squares[i] || calculateWinner(squares)){
      return;
    }
    
    const nextSquares = squares.slice();

    if(selectedPlayer==='Computer'){
      nextSquares[i] = selectedOption;
     setTimeout(() => {
      makeComputerMove(nextSquares);
     }, 1000);
      
    }else {
      if (xIsNext) {
        nextSquares[i] = selectedOption;
      }else{
        if(selectedOption === 'X'){
        nextSquares[i] = 'O'
        }else if(selectedOption === 'O'){
          nextSquares[i] = 'X'
        }
      }
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const winner = calculateWinner(squares);
  let status;
   
  if (winner) {
    if (winner === selectedOption) {
      status = 'You win!';
     
      // Update the scores here
    } else if (winner === 'draw') {
      status = 'Draw';
       // Update the scores here
    } else {
      status = 'You Lost!';
      // Update the scores here
    }
    setTimeout(() => {
      setSquares(Array(9).fill(null));
    }, 2500);
  };

  
  const makeComputerMove = (currentSquares) => {
    const emptySquares = [];
    for (let i = 0; i < currentSquares.length; i++) {
      if (currentSquares[i] === null) {
        emptySquares.push(i);
      }
    }
    
    if (emptySquares.length > 0) {
      const randomIndex = Math.floor(Math.random() * emptySquares.length);
      const randomSquare = emptySquares[randomIndex];
      
      const computerOption = selectedOption === 'X' ? 'O' : 'X';
      currentSquares[randomSquare] = computerOption;
      
      setSquares([...currentSquares]);
    }
  };

  
  return (
    <>
    <div>{status}</div>
      <div className="board-row">
        <Square
          selectedOption={squares[0]}
          onSquareClick={() => handleClick(0)}
        />
        <Square
          selectedOption={squares[1]}
          onSquareClick={() => handleClick(1)}
        />
        <Square
          selectedOption={squares[2]}
          onSquareClick={() => handleClick(2)}
        />
      </div>
      <div className="board-row">
        <Square
          selectedOption={squares[3]}
          onSquareClick={() => handleClick(3)}
        />
        <Square
          selectedOption={squares[4]}
          onSquareClick={() => handleClick(4)}
        />
        <Square
          selectedOption={squares[5]}
          onSquareClick={() => handleClick(5)}
        />
      </div>
      <div className="board-row">
        <Square
          selectedOption={squares[6]}
          onSquareClick={() => handleClick(6)}
        />
        <Square
          selectedOption={squares[7]}
          onSquareClick={() => handleClick(7)}
        />
        <Square
          selectedOption={squares[8]}
          onSquareClick={() => handleClick(8)}
        />
      </div>
    </>
  );
}




function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  if (squares.every(square => square !== null)) {
    return 'draw';
  }
  return null;
}
