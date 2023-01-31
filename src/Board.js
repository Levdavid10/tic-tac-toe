import React, { useState } from 'react';
import Square from './Square';

const rowStyle = {
    display: 'flex'
}
  
const boardStyle = {
    'backgroundColor': '#eee',
    'width': '208px',
    'alignItems': 'center',
    'justifyContent': 'center',
    'display': 'flex',
    'flexDirection': 'column',
    'border': '3px #eee solid'
}
  
const containerStyle = {
    'display': 'flex',
    'alignItems': 'center',
    'flexDirection': 'column'
}
  
const instructionsStyle = {
    'marginTop': '5px',
    'marginBottom': '5px',
    'fontWeight': 'bold',
    'fontSize': '16px',
}
  
const buttonStyle = {
    'marginTop': '15px',
    'marginBottom': '16px',
    'width': '80px',
    'height': '40px',
    'backgroundColor': '#8acaca',
    'color': 'white',
    'fontSize': '16px',
}

function calcWinner(squares) {
    const winningOptions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    
    // checking if all 3 options having the same value X or O
    for (let i = 0; i < winningOptions.length; i++) {
      const [a, b, c] = winningOptions[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return '';
  }
  
  function Board() {
    const [squares, setSquares] = useState([]);
    const [isX, setIsX] = useState(true);
    const [winner, setWinner] = useState('');

    const handleClick = (i) => {
    // check if someone already won or the square already filled
      if (winner || squares[i]) {
        return
      }

      // update square and turn
      squares[i] = isX ? 'X' : 'O'
      setSquares(squares)
      setIsX(!isX)

      // checking if someone won
      setWinner(calcWinner(squares));
    }

    const handleRestart = () => {
      setIsX(true);
      setSquares([]);
      setWinner('');
    }

    const getSquare = (i) => {
        return <Square value={squares[i]} onClick={() => handleClick(i)} />
    }

    return (
      <div style={containerStyle} className="gameBoard">
        <div id="statusArea" className="status" style={instructionsStyle}>Next player: <span>X</span></div>
        {(winner) &&
            <div id="winnerArea" className="winner" style={instructionsStyle}>Winner: {winner}</div>
        }
        <button style={buttonStyle} onClick={handleRestart}>Reset</button>
        <div style={boardStyle}>
          <div className="board-row" style={rowStyle}>
            {getSquare(0)}
            {getSquare(1)}
            {getSquare(2)}
          </div>
          <div className="board-row" style={rowStyle}>
            {getSquare(3)}
            {getSquare(4)}
            {getSquare(5)}
          </div>
          <div className="board-row" style={rowStyle}>
            {getSquare(6)}
            {getSquare(7)}
            {getSquare(8)}
          </div>
        </div>
      </div>
    );
  }

  export default Board;