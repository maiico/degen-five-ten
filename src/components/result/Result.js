import React, { Component } from 'react';
import './Result.css';
import OpenHand from '../images/open_hand.png';
import ClosedHand from '../images/closed_hand.png';
import PlayAgain from './playAgain/PlayAgain';

class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    // render message based on win or lose

    renderMessage() {
        let result;
        const payout = this.props.payout * this.props.bet;

        if(this.props.guess === this.props.total) {
            result = <h1 className="msg-txt">Congratulations! You won {payout} SOL. That's a nice {this.props.payout}X!</h1>
        } else {
            result = <h1 className="msg-txt">You lost. Better luck next time degen.</h1>
        }

        return result;
    }

    // render hand based on 0 or 5

    renderHandImg(hand) {
        let handImg;

        if(hand === 0) {
            handImg = <img src={ClosedHand} className="hand-img" alt="closed hand" />
        } else {
            handImg = <img src={OpenHand} className="hand-img" alt="open hand" />
        }

        return handImg;
    }

    // route back to game for play again buttton

    playAgain = async () => {
       await this.props.resetGame()

    }


    render() { 

        return ( 
            <div className="result">
                <div className="message">
                    {this.renderMessage()}
                </div>
                <div className="total">
                    <h1 className="total-header">Total</h1>
                    <h2 className="total-txt">{this.props.total}</h2>
                </div>
                <div className="hands-wrapper">
                        <div className="hand-wrapper">
                            {this.renderHandImg(this.props.hand1)}
                            <h2 className="hand-txt">{this.props.hand1}</h2>
                        </div>
                        <div className="hand-wrapper">
                            {this.renderHandImg(this.props.hand2)}
                            <h2 className="hand-txt">{this.props.hand2}</h2>
                        </div>
                        <div className="hand-wrapper">
                            {this.renderHandImg(this.props.hand3)}
                            <h2 className="hand-txt">{this.props.hand3}</h2>
                        </div>
                        <div className="hand-wrapper">
                            {this.renderHandImg(this.props.hand4)}
                            <h2 className="hand-txt">{this.props.hand4}</h2>
                    </div>
                </div>
                <div className="bet-guess-wrapper">
                    <div className="result-bet">
                        <h1 className="bet-guess-header">Amount</h1>
                        <h2 className="bet-guess-txt">{this.props.bet}&nbsp;SOL</h2>
                    </div>
                    <div className="result-guess">
                        <h1 className="bet-guess-header">Guess</h1>
                        <h2 className="bet-guess-txt">{this.props.guess}</h2>
                    </div>
                </div>
                    <PlayAgain />
            </div>
         );
    }
}
 
export default Result;