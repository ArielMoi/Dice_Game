import React from 'react';
import './FunctionalityBoard.css';
import Dice from '../Dice/Dice.Component'
import Button from '../Button/Button.Component'

import dice1 from "../../img/dice1.png";
import dice2 from "../../img/dice2.png";
import dice3 from "../../img/dice3.png";
import dice4 from "../../img/dice4.png";
import dice5 from "../../img/dice5.png";
import dice6 from "../../img/dice6.png";


function FunctionalityBoard(props){
    const dice = [dice1, dice2, dice3, dice4, dice5, dice6];
    return (
      <div className="func-container">
        <div className="main-container">
          <Button i="fas fa-dice fa-2x" buttonText="Roll Dice" onClickFunc={props.rollFunction}/>
          <Dice src1={dice[props.firstDice]} src2={dice[props.secondDice]} />
          <Button i="fas fa-hand-holding fa-2x" buttonText="Hold" onClickFunc={props.holdFunction}/>
        </div>
        <div className="foot-container">
          <Button i="fas fa-plus fa-2x" buttonText="New Game" onClickFunc={props.newGameFunction}/>
          <div className="adjust-win">
            <label>Adjust Winning Score:</label>
            <input type="text"></input>
          </div>
        </div>
      </div>
    );
}

export default FunctionalityBoard;