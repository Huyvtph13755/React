import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";
import Square from "./components/square";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlayer, setXplayer] = useState(true);
  const [play, setPlay] = useState("X")
  const winner = caculateWinner(board);
  const arr = Array(3).fill(false)
  if (winner) {
    arr[winner.winline[0]] = true
    arr[winner.winline[1]] = true
    arr[winner.winline[2]] = true
  }
  const reset = () => {
    setBoard(Array(9).fill(null))
  }
  const handlePlay = (index) => {
    const temp = board.slice();
    if (xPlayer) {
      temp[index] = "X";
    } else {
      temp[index] = "O";
    }
    if (winner || board[index]) return;
    setBoard(temp);
    setXplayer(!xPlayer);
    setPlay(temp[index])
  };
  return (
    <Container>
      <h3>{play} Play</h3>
      <Board>
      {board.map((item, index) => <Square value={item} index={index} status={arr} handlePlay={() => handlePlay(index)} key={index}/>)}
      </Board>
      {winner ? <h3>{winner.win} winner</h3> : <h3>Winner?</h3>}
      <button onClick={() => reset()}>Reset game</button>
    </Container>
  );
}
const caculateWinner = (board) => {
  const winline = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winline.length; i++) {
    const [a, b, c] = winline[i]
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { win: board[a], winline: winline[i] }
    }
  }
  return null
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: green;
`;
const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  margin: auto;
  max-width: 200px;
`;
export default App;
