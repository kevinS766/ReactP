import { useState } from 'react';
import './App.css'
import { LiaTimesSolid } from "react-icons/lia";
import { GiCircle } from "react-icons/gi";
import { winningCombinations } from './winningCombinations';


function App() {
  const [Board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  const handleTurn = () => {
    setPlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
  };

  const handleClick = (index) => {
    if (Board[index] || winner) return;

    const newBoard = [...Board];
    newBoard[index] = player;
    setBoard(newBoard)

    const detectWinner = checkWinner(newBoard);
    if (detectWinner) {
      setWinner(detectWinner);
    } else {
      handleTurn();
    }
  };

  const checkWinner = (board) => {
     for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
     }
      return null;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setPlayer("X");
    setWinner(null);
  }

  return (
    <div className='game-container'>
      <h1>Tic Tac Toe App</h1>
      {winner ? (
        <div className='winner'>
          !Jugador {winner} ha ganado!
          <button onClick={resetGame}>Reiniciar</button>
        </div>
        
      ) : (
        <div className='board'>
          {Board.map((value, index) => (
            <button
              key={index}
              className='cell'
              onClick={() => handleClick(index)}
            >
              {value === "X" ? <LiaTimesSolid /> : value === "O" ? <GiCircle /> : ""}
            </button>
          ))}
        </div>
      )}
      {!winner && !Board.includes(null) && (
        <div className='draw'>
          !Es un empate!
          <button onClick={resetGame}>Reiniciar</button>
        </div>
      )}
    </div>
  );  
}

export default App
