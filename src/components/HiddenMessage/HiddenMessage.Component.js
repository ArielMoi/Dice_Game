import React from "react";
import "./HiddenMessage.css";

function HiddenMessage(props) {
  return (
    <div className="hidden-message" style={{ visibility: props.mesVisibility }}>
      <img
        className="gif"
        src="https://media.giphy.com/media/3ohjV5uukLAvnhS7vy/giphy.gif"
      />
      <div>
        <h1>{props.mainText}</h1>
        <h3>{props.secondaryText}</h3>
      </div>
    </div>
  );
}

export default HiddenMessage;
