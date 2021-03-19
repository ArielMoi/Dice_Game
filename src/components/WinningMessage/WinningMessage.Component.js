import React from 'react';
import './WinningMessage.css';
import Button from "../Button/Button.Component";

function WinningMessage(props){
    return (
      <div className="winning-message" style={{visibility:props.winMesVisibility}}>
        <h3>WE HAVE A WINNER!</h3>
        <h1>Player {props.winner} has won!</h1>
        <i className="fas fa-trophy fa-7x win-icon"></i>
        <Button
           i="fas fa-plus fa-2x"
          buttonText="New Game"
          onClickFunc={props.newGameFunction}
        />
      </div>
    );
}

export default WinningMessage;