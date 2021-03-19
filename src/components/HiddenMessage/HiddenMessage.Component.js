import React from "react";
import "./HiddenMessage.css";

function HiddenMessage(props) {
  return (
    <div className="hidden-message" style={{ visibility: props.mesVisibility }}>
      <h3>{props.secondaryText}</h3>
      <h1>{props.mainText}</h1>
    </div>
  );
}

export default HiddenMessage;