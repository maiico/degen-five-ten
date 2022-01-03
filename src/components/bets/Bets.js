import React, { Component } from 'react';
import './Bets.css';

class Bets extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    setBet = async (bet) => {
        try{
            this.props.setBet(bet)
        } catch(err) {
            console.log(err)
        }
    }

    render() { 
        return ( 
            <div className="bets">
                <div className="bet-button" onClick={() => this.setBet(0)}>
                    <p className="bet-button-txt" >close</p>
                </div>
                <div className="bet-button" onClick={() => this.setBet(5)}>
                    <p className="bet-button-txt">5</p>
                </div>
                <div className="bet-button" onClick={() => this.setBet(10)}>
                    <p className="bet-button-txt">10</p>
                </div>
                <div className="bet-button" onClick={() => this.setBet(15)}>
                    <p className="bet-button-txt">15</p>
                </div>
                <div className="bet-button" onClick={() => this.setBet(20)}>
                    <p className="bet-button-txt">open</p>
                </div>
            </div>
         );
    }
}
 
export default Bets;