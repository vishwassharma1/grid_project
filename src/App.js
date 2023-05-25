import React, { useState } from 'react';
import './App.css';

const Grid = ({ color, highlighted, onClick }) => {
  const style = {
    backgroundColor: color,
  };

  return <div className="grid" style={style} onClick={onClick}></div>;
};

const App = () => {
  const [gridState, setGridState] = useState(Array(64).fill(false));

  const handleClick = (index) => {
    const newGridState = [...gridState];
    newGridState[index] = !newGridState[index];
    setGridState(newGridState);
  };

  const grids = gridState.map((highlighted, index) =>{
    const row = Math.floor(index / 8);
    const col = index % 8;
    const color = highlighted?'red':(row + col) % 2 === 0 ? 'white' : 'black';
    
    return (
      <Grid
        key={index}
        color={color}
        highlighted={highlighted}
        onClick={() => handleClick(index)}
      />
    );
  });

  return <div className="grid-container">{grids}</div>;
};

export default App;
