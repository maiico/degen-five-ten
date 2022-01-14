import React, { Component } from 'react';
import Guess from './guess/Guess';
import Bet from './bet/Bet';
import GuessDisplay from './guessDisplay/GuessDiplay';
import BetDisplay from './betDisplay/BetDisplay';
import LFG from './lfg/LFG';
import './Game.css';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount() {
        //reset the game every time it is mounted
        this.props.resetGame()
    }

    render() { 
        return ( 
            <div className="game">
                <div className="bet-guess-display">
                    <BetDisplay bet={this.props.bet} />
                    <GuessDisplay guess={this.props.guess} />
                </div>
                <Bet setBet={this.props.setBet}/>
                <Guess setGuess={this.props.setGuess}/>
                <LFG betMade={this.props.betMade} guessMade={this.props.guessMade} setRandomHands={this.props.setRandomHands}/>
            </div>
         );
    }
}
 
export default Game;