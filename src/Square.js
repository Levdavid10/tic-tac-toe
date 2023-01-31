import React, { useState } from 'react';

const squareStyle = {
    'width':'60px',
    'height':'60px',
    'backgroundColor': '#ddd',
    'margin': '4px',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'fontSize': '20px',
    'color': 'white'
  }

function Square({value, onClick}) {
    return (
      <div className="square" style={squareStyle} onClick={onClick}>
        {value}
      </div>
    );
  }

export default Square;