import React from "react";
import FunctionalityBoard from "./components/FunctionalityBoard/FunctionalityBoard.Component";
import PlayerShowcase from "./components/PlayerShowcase/PlayerShowcase.Component";
import WinningMessage from "./components/WinningMessage/WinningMessage.Component";
import HiddenMessage from "./components/HiddenMessage/HiddenMessage.Component";
import "./App.css";

let activePlayerBackground = "#c5c1ad";
let nonActiveBackground = "#eeebdd";
let maxPoints = 100;

class App extends React.Component {
  state = {
    player1: {
      count: 0,
      total: 0,
      isCurrent: true,
      background: activePlayerBackground,
    },
    player2: {
      count: 0,
      total: 0,
      isCurrent: false,
      background: nonActiveBackground,
    },
    dice: [Math.floor(Math.random() * 6), Math.floor(Math.random() * 6)],
    winner: ["", "hidden"], // hidden for still no winner -> when winner change to visible for winner message
    isSixSix: ["hidden", false], // show you got 6 6 message, and disable=true for roll dice while 6 6 message
  };

  updateCurrentPlayerAmount = (firstDice, secondDice) => {
    firstDice++;
    secondDice++;
    this.state.player1.isCurrent &&
      this.setState({
        player1: {
          count: this.state.player1.count + secondDice + firstDice,
          total: this.state.player1.total,
          isCurrent: true,
          background: activePlayerBackground,
        },
      });

    this.state.player2.isCurrent &&
      this.setState({
        player2: {
          count: this.state.player2.count + secondDice + firstDice,
          total: this.state.player2.total,
          isCurrent: true,
          background: activePlayerBackground,
        },
      });
  };

  throwDice = async () => {
    let firstDice = Math.floor(Math.random() * 6);
    let secondDice = Math.floor(Math.random() * 6);

    if (firstDice === 5 && secondDice === 5) {
      await this.setState({
        dice: [firstDice, secondDice],
      });

      await this.setState({ isSixSix: ["visible", true] });
      await setTimeout(() => {
        this.setState({ isSixSix: ["hidden", false] });
      }, 2000);

      await this.switchTurn();

    } else {
      await this.setState({
        dice: [firstDice, secondDice],
      });

      this.updateCurrentPlayerAmount(firstDice, secondDice);
    }

    this.checkIfWinner(maxPoints);
  };

  switchTurn = () => {
    if (this.state.player1.isCurrent) {
      this.setState({
        player1: {
          count: 0,
          total: this.state.player1.total,
          isCurrent: false,
          background: nonActiveBackground,
        },
        player2: {
          count: 0,
          total: this.state.player2.total,
          isCurrent: true,
          background: activePlayerBackground,
        },
      });
    } else {
      this.setState({
        player1: {
          count: 0,
          total: this.state.player1.total,
          isCurrent: true,
          background: activePlayerBackground,
        },
        player2: {
          count: 0,
          total: this.state.player2.total,
          isCurrent: false,
          background: nonActiveBackground,
        },
      });
    }
  };

  playerHold = async () => {
    let player = this.state.player1.isCurrent ? "player1" : "player2";

    await this.setState({
      [player]: {
        count: 0,
        total: this.state[player].total + this.state[player].count,
        isCurrent: true,
      },
    });

    this.checkIfWinner(maxPoints);
    await this.switchTurn();
  };

  checkIfWinner = (pointsToWon) => {
    if (this.state.player1.total >= pointsToWon) {
      this.setState({ winner: ["1", "visible"] });
    }
    if (this.state.player2.total >= pointsToWon) {
      this.setState({ winner: ["2", "visible"] });
    }
  };

  newGame = () => {
    this.setState({
      player1: {
        count: 0,
        total: 0,
        isCurrent: true,
        background: activePlayerBackground,
      },
      player2: {
        count: 0,
        total: 0,
        isCurrent: false,
        background: nonActiveBackground,
      },
      winner: ["", "hidden"],
    });
  };

  adjustAmountToWin = (e) => {
    maxPoints = e.target.value;
  };

  render() {
    return (
      <div>
        <div className="players">
          <HiddenMessage
            mainText="you got 6 * 6!"
            secondaryText="you lost all your current amount and you turn."
            mesVisibility={this.state.isSixSix[0]}
          />
          <WinningMessage
            newGameFunction={this.newGame}
            winner={this.state.winner[0]}
            winMesVisibility={this.state.winner[1]}
          />
          <PlayerShowcase
            player="1"
            count={this.state.player1.count}
            total={this.state.player1.total}
            background={this.state.player1.background}
          />
          <PlayerShowcase
            player="2"
            count={this.state.player2.count}
            total={this.state.player2.total}
            background={this.state.player2.background}
          />
        </div>
        <FunctionalityBoard
          firstDice={this.state.dice[0]}
          secondDice={this.state.dice[1]}
          rollFunction={this.throwDice}
          holdFunction={this.playerHold}
          newGameFunction={this.newGame}
          onChangefunc={this.adjustAmountToWin}
          isRollDisabled={this.state.isSixSix[1]}
        />
      </div>
    );
  }
}

export default App;

// TODO:
// - adjust focus on button (different css)
