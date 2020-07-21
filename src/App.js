import React, { useState } from "react";
import Tile from "./Tile";
import { Noise } from "noisejs";
import "./App.css";

const TERRAIN_TYPES = ["forest", "ground", "water", "hill"];

function App() {
  const generateTerrain = () => {
    const newTerrain = [];
    const noise = new Noise(Math.random());

    for (let i = 0; i < 150; i++) {
      for (let j = 0; j < 150; j++) {
        newTerrain.push(
          TERRAIN_TYPES[Math.floor((noise.simplex2(i / 30, j / 30) + 1) * 2)]
        );
      }
    }
    return newTerrain;
  };
  const [terrain, setTerrain] = useState(generateTerrain());

  return (
    <div className="App">
      <header className="App-header">
        terrain gen
        <button
          className="gen-button"
          onClick={() => setTerrain(generateTerrain())}
        >
          generer
        </button>
      </header>
      <main className="App-content">
        {terrain.map((type, index) => (
          <Tile key={index} type={type} />
        ))}
      </main>
    </div>
  );
}

export default App;
