import React, { Component } from 'react';
import './Guess.css';
import ZeroButton from '../../images/0_button.png';
import FiveButton from '../../images/5_button.png';
import TenButton from '../../images/10_button.png';
import FifteenButton from '../../images/15_button.png';
import TwentyButton from '../../images/20_button.png';

class Guess extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
            <div className="guess">
                <h1 className ="guess-header">Guess</h1>
                <div className="guesses">
                    <img src={ZeroButton} className="guess-button" alt="guess button for 0" onClick={() => {this.props.setGuess(0)}}/>
                    <img src={FiveButton} className="guess-button" alt="guess button for 0" onClick={() => {this.props.setGuess(5)}}/>
                    <img src={TenButton} className="guess-button" alt="guess button for 0" onClick={() => {this.props.setGuess(10)}}/>
                    <img src={FifteenButton} className="guess-button" alt="guess button for 0" onClick={() => {this.props.setGuess(15)}}/>
                    <img src={TwentyButton} className="guess-button" alt="guess button for 0"onClick={() => {this.props.setGuess(20)}}/>
                </div>
            </div>
         );
    }
}
 
export default Guess;