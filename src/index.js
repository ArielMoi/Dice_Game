import React from 'react';
import ReactDOM from 'react-dom';
import PlayerShowcase from './components/PlayerShowcase/PlayerShowcase.Component'
import Button from "./components/Button/Button.Component";
import Dice from "./components/Dice/Dice.Component";
import FunctionalityBoard from "./components/FunctionalityBoard/FunctionalityBoard.Component";

import dice1 from "./img/dice1.png";
import dice2 from "./img/dice2.png";
import dice3 from "./img/dice3.png";
import dice4 from "./img/dice4.png";
import dice5 from "./img/dice5.png";
import dice6 from "./img/dice6.png";

ReactDOM.render(
  <React.StrictMode>
    <FunctionalityBoard />
    {/* <Dice src1={dice1} src2={dice2} /> */}
    {/* <Button i="fas fa-adjust fa-2x" buttonText="some button" /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
