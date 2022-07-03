import logo from "./logo.svg";
import react, { useState } from "react";
import styled from "styled-components";
import "./App.css";
import Square from "./components/square";


function App(props) {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xplayer, setXplayer] = useState(true);
  const winner = couculateHandle(board);
  const handlePlay = (index) => {
    const temp = board.slice();
    if (xplayer) {
      temp[index] = "X";
    } else {
      temp[index] = "O";
    }
    const boardCoppy = [...board];
    if (winner || boardCoppy[index]) return;
    setBoard(temp);
    setXplayer(!xplayer);
  };
  const handleRemove = () => {
    setBoard(Array(9).fill(null));
  };
  
  console.log(winner);
  return (
    <div>
      <Container>
        {winner ? <h3 className="winner">Winner is:{winner}</h3> : null}
        <Board>
          {board.map((item, index) => (
            <Square
              value={item}
              key={index}
              handlePlay={handlePlay}
              index={index}
              className="is_x"
              data={winner}
            />
          ))}
        </Board>
        <button
          className="reset"
          onClick={() => {
            handleRemove();
          }}
        >
          reset
        </button>
      </Container>
    </div>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  margin: auto;
  max-width: 200px;
`;
const couculateHandle = (board) => {
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
    const [a, b, c] = winline[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
};

export default App;
