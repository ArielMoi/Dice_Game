import React from "react";
import "./PlayerShowcase.css";

function PlayerShowcase(props) {
  return (
    <div className="container">
      <div>
        <h1>Player {props.player}</h1>
      </div>
      <div>
        <div className="current">
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
