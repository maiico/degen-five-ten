import React, { Component } from 'react';
import './BetDisplay.css';

class BetDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    renderBet(bet) {
        let betNumber;

        if(bet === 0) {
            betNumber = <h2 className="bet-display-number">Make a bet.</h2>
        } else {
            betNumber = <h2 className="bet-display-number">{this.props.bet}&nbsp;SOL</h2>
        }

        return betNumber;
    }

    render() { 
        return ( 
            <div className="bet-display">
                <h1 className="bet-display-header">Bet</h1>
                {this.renderBet(this.props.bet)}
            </div>
         );
    }
}
 
export default BetDisplay;