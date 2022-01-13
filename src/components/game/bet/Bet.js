import React, { Component } from 'react';
import './Bet.css';
import ZeroZeroFiveSol from '../../images/005SOL_button.png';
import ZeroOneSol from '../../images/01SOL_button.png';


class Bet extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="bet">
                <h1 className ="bet-header">Amount</h1>
                <div className="bets">
                    <img src={ZeroZeroFiveSol} className="bet-button" alt="bet button for 0.05 SOL" onClick={() => {this.props.setBet(0.05)}}/>
                    <img src={ZeroOneSol} className="bet-button" alt="bet button for 0.1 SOL" onClick={() => {this.props.setBet(0.1)}}/>
                </div>
            </div>
         );
    }
}
 
export default Bet;