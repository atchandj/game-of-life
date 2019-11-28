import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GameBoard from './GameBoard/GameBoard';

function App() {

  return (
    <div className="App">
      <blockquote className="blockquote">
        <strong>Game of life</strong>
        <footer>By atchandj</footer>
      </blockquote>
      <GameBoard />
    </div>
  );
}

export default App;
