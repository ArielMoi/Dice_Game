import React from "react";
import FunctionalityBoard from "./components/FunctionalityBoard/FunctionalityBoard.Component";
import PlayerShowcase from "./components/PlayerShowcase/PlayerShowcase.Component";
import "./App.css";

class App extends React.Component {
  state = {
    player1: {
      count: 0,
      total: 0,
      isCurrent: true,
    },
    player2: {
      count: 0,
      total: 0,
      isCurrent: false,
    },
    dice: [Math.floor(Math.random() * 6), Math.floor(Math.random() * 6)],
    currentPlayer: "player1",
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
        },
      });

    this.state.player2.isCurrent &&
      this.setState({
        player2: {
          count: this.state.player2.count + secondDice + firstDice,
          total: this.state.player2.total,
          isCurrent: true,
        },
      });
  };

  throwDice = async () => {
    let firstDice = Math.floor(Math.random() * 6);
    let secondDice = Math.floor(Math.random() * 6);

    if (firstDice === 5 && secondDice === 5) {
      await this.switchTurn();
    } else {
      await this.setState({
        dice: [firstDice, secondDice],
      });

      this.updateCurrentPlayerAmount(firstDice, secondDice);
    }
  };

  switchTurn = () => {
    // !! bug --- don't switch player in dom

    if (this.state.player1.isCurrent) {
      this.setState({
        player1: {
          count    : 0,
          total    : this.state.player1.total,
          isCurrent: false,
        },
        player2: {
          count    : 0,
          total    : this.state.player2.total,
          isCurrent: true,
        },
      });
    } else {
      this.setState({
        player1: {
          count    : 0,
          total    : this.state.player1.total,
          isCurrent: true,
        },
        player2: {
          count    : 0,
          total    : this.state.player2.total,
          isCurrent: false,
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

    await this.switchTurn();
  };

  // doesn`t switch turn!!
  // ! check

  checkIfWinner = () => {};

  newGame = () => {};

  adjustAmountToWin = () => {};

  render() {
    return (
      <div>
        <div className="players">
          <div>
            <PlayerShowcase
              player={this.state.player1.player}
              count={this.state.player1.count}
              total={this.state.player1.total}
            />
          </div>
          <div>
            <PlayerShowcase
              player={this.state.player2.player}
              count={this.state.player2.count}
              total={this.state.player2.total}
            />
          </div>
        </div>
        <FunctionalityBoard
          firstDice={this.state.dice[0]}
          secondDice={this.state.dice[1]}
          rollFunction={this.throwDice}
          holdFunction={this.playerHold}
        />
      </div>
    );
  }
}

export default App;
