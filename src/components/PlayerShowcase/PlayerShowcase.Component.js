import React from "react";
import "./PlayerShowcase.css";

function PlayerShowcase(props) {
  return (
    <div className="player container" style={{background:props.background}}>
      <div className="player">
        <h1>Player {props.player}</h1>
      </div>
      <div className="player scores">
        <div className="player count">
          <h1>{props.count}</h1>
        </div>
        <div className="total">
          <p>Total:</p>
          <h4>{props.total}</h4>
        </div>
      </div>
    </div>
  );
}

export default PlayerShowcase;
