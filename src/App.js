import React from 'react';
import "./normalize.css"
import './App.css';
import Header from "./components/Header"
import Game from "./components/Game"

function App() {
  return (
    <div className="app">
      <Header title="15 Puzzle" />
      <main>
        <h1>15 Puzzle</h1>
        <Game numCols={4} />
      </main>
    </div>
  );
}

export default App;
