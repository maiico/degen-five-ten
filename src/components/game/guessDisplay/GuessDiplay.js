import React, { Component } from 'react';
import './GuessDisplay.css';

class GuessDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    renderGuess(guess) {
        let guessNumber;

        if(guess === "") {
            guessNumber = <h2 className="guess-display-number">Make a guess.</h2>
        } else {
            guessNumber = <h2 className="guess-display-number">{this.props.guess}</h2>
        }

        return guessNumber;
    }

    render() { 
        return ( 
            <div className="guess-display">
                <h1 className="guess-display-header">Guess</h1>
                {this.renderGuess(this.props.guess)}
            </div>
         );
    }
}
 
export default GuessDisplay;