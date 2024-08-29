import { React, useState } from "react";
import "./Game.css";

const Game = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  let [playerScore, setPlayerScore] = useState(0);
  let [computerScore, setComputerScore] = useState(0);

  const handleClick = (choice) => {
    const choices = ["ROCK", "PAPER", "SCISSOR"];
    const rand = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(rand);
    setPlayerChoice(choice);
    if (choice === rand) {
      // It's a draw, no score changes
    } else if (
      (choice === "ROCK" && rand === "SCISSOR") ||
      (choice === "SCISSOR" && rand === "PAPER") ||
      (choice === "PAPER" && rand === "ROCK")
    ) {
      // Player wins
      setPlayerScore(playerScore + 1);
    } else {
      // Computer wins
      setComputerScore(computerScore + 1);
    }
  };

  return (
    <div className="game">
      <div className="game-container">
        <h1>Welcome to Rock 👊, Paper 🫲, Scissor ✌️</h1>
        <div className="button-container">
          <button
            onClick={(e) => {
              e.preventDefault();
              handleClick("ROCK");
            }}
          >
            Rock
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleClick("PAPER");
            }}
          >
            Paper
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleClick("SCISSOR");
            }}
          >
            Scissor
          </button>
        </div>
        <div className="content">
          <p>Your Choice: {playerChoice}</p>
          <p>Computer's Choice: {computerChoice}</p>
          <p>Your Score: {playerScore}</p>
          <p>Computer's Score: {computerScore} </p>
        </div>
      </div>
    </div>
  );
};

export default Game;
