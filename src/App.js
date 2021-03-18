import React from 'react';
import FunctionalityBoard from "./components/FunctionalityBoard/FunctionalityBoard.Component";
import PlayerShowcase from "./components/PlayerShowcase/PlayerShowcase.Component";
import './App.css';


class App extends React.Component {
  state = {
    player1: {
      player: 1,
      count: 0,
      total: 0,
    },
    player2: {
      player: 2,
      count: 0,
      total: 0,
    },
    dice: [Math.floor(Math.random() * 6), Math.floor(Math.random() * 6)],
  };

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
        />
      </div>
    );
  }
}


export default App;