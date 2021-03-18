import React from 'react';
import './FunctionalityBoard.css';
import Dice from '../Dice/Dice.Component'

import dice1 from "../../img/dice1.png";
import dice2 from "../../img/dice2.png";
import dice3 from "../../img/dice3.png";
import dice4 from "../../img/dice4.png";
import dice5 from "../../img/dice5.png";
import dice6 from "../../img/dice6.png";


function FunctionalityBoard(props){
    return (
        <div>
            <div className='main-container'>
                < Dice src1={dice1}  />
            </div>
        </div>
    )
}

export default FunctionalityBoard;