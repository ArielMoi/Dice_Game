import React from 'react';
import './Dice.css';

function Dice(props){
    return (
    <div className='dice'>
        <img src={props.src1}></img>
        <img src={props.src2}></img>
    </div>
    )
}

export default Dice;