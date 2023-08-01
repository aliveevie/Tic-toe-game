import React, { useState, useEffect } from "react";

export default function Square({ selectedOption, onSquareClick }) {
  const [value, setValue] = useState(null);

  useEffect(() => {
    setValue(selectedOption);
  }, [selectedOption]);

  const handleClick = () => {
    onSquareClick();
  };

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}
