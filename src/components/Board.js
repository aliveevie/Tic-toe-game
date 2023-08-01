import React, { useState } from 'react';
import '../App.css';
import Square from './Square';

export default function Board({ selectedOption }) {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleClick = (i) => {
    const nextSquares = squares.slice();
    nextSquares[i] = selectedOption;
    setSquares(nextSquares);
  };

  return (
    <>
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
