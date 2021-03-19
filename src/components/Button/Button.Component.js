import React from 'react';
import './Button.css';

function Button(props){
    return <button onClick={props.onClickFunc} disabled={props.isDisabled}><i className={props.i}></i> {props.buttonText}</button>
}

export default Button;