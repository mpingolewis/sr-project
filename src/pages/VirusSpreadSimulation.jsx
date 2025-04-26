import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./VirusSpreadSimulation.css";

const GRID_SIZE = 6;

const createGrid = () => {
  return Array(GRID_SIZE)
    .fill(null)
    .map(() => Array(GRID_SIZE).fill("clean"));
};

const VirusSpreadSimulation = () => {
  const [grid, setGrid] = useState(createGrid());
  const [running, setRunning] = useState(false);
  const navigate = useNavigate();

  const getNeighbors = (r, c) => {
    const deltas = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];
    return deltas
      .map(([dr, dc]) => [r + dr, c + dc])
      .filter(
        ([nr, nc]) => nr >= 0 && nc >= 0 && nr < GRID_SIZE && nc < GRID_SIZE
      );
  };

  const startSimulation = () => {
    const newGrid = createGrid();
    const mid = Math.floor(GRID_SIZE / 2);
    newGrid[mid][mid] = "infected";
    setGrid(newGrid);
    setRunning(true);
  };

  const resetSimulation = () => {
    setGrid(createGrid());
    setRunning(false);
  };

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setGrid((prevGrid) => {
        const newGrid = prevGrid.map((row) => [...row]);
        const toInfect = [];

        for (let row = 0; row < GRID_SIZE; row++) {
          for (let col = 0; col < GRID_SIZE; col++) {
            if (prevGrid[row][col] === "infected") {
              const neighbors = getNeighbors(row, col);
              neighbors.forEach(([r, c]) => {
                if (newGrid[r][c] === "clean" && Math.random() < 0.25) {
                  toInfect.push([r, c]);
                }
              });
            }
          }
        }

        toInfect.forEach(([r, c]) => {
          newGrid[r][c] = "infected";
        });

        return newGrid;
      });
    }, 500);

    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="simulation-wrapper">
      <h1>Virus Spread Simulation</h1>
      <p>This simulation shows how a computer virus can spread in a network.</p>

      {/* Grid FIRST, then buttons */}
      <div className="grid">
        {grid.map((row, rIdx) => (
          <div key={rIdx} className="row">
            {row.map((status, cIdx) => (
              <div
                key={cIdx}
                className={`cell ${status}`}
                title={status === "infected" ? "Infected" : "Clean"}
              ></div>
            ))}
          </div>
        ))}
      </div>

      {/* Buttons placed below the grid */}
      <div className="button-group">
        <button className="start-btn" onClick={startSimulation}>
          Start Simulation
        </button>
        <button className="start-btn" onClick={resetSimulation}>
          Reset Simulation
        </button>
        <button className="start-btn" onClick={handleBack}>
          Back
        </button>
      </div>
    </div>
  );
};

export default VirusSpreadSimulation;