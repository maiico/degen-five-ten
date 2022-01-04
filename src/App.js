import React, { Component } from 'react';
import './App.css';
import Hand from './components/hand/Hand';
import Total from './components/total/Total';
import Bets from './components/bets/Bets';
import Result from './components/result/Result';
import Nav from './components/nav/Nav';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hand1: 0,
      hand2: 5,
      hand3: 0,
      hand4: 5,
      bet: "",
      betMade: false,
      win: 0,
      lose: 0,
      bets: 0
     }
  }

  // set bet 

  setBet = async(bet) => {
    try{
      this.setState({
        bet: bet,
        betMade: true,
        bets: this.state.bets + 1
      });

      this.setRandomHands();

      const total = this.calculateTotal();

      if(total === this.state.bet) {
        this.winLoseCounter(1);
      } else {
        this.winLoseCounter(0);
      }

    } catch(err) {
      console.log(err)
    }
  }

  // get a random hand of either 0 or 5

  randomHand() {
    let hand;

      let x = Math.random() < 0.5;
  
      if(x){
        hand = 0;
      } else{
        hand = 5;
      }

    return hand;
  }

  // set the random hands to hand 1 2 3 4

  setRandomHands() {

      let hand1 = this.randomHand();
      let hand2 = this.randomHand();
      let hand3 = this.randomHand();
      let hand4 = this.randomHand();

      this.setState({
        hand1: hand1,
        hand2: hand2,
        hand3: hand3,
        hand4: hand4
      })

  }

  // calculate the total from each hand

  calculateTotal() {
    const total = this.state.hand1 + this.state.hand2 + this.state.hand3 + this.state.hand4

    return total;
  }

  // win lose counter

  winLoseCounter(result) {
    if(result === 1) {
      this.setState({
        win: this.state.win + 1
      })
    } else {
      this.setState({
        lose: this.state.lose + 1
      })
    }
  }

  render() { 
    return ( 
      <div className="App">
        <header className="App-header">
          <Nav />
            {(this.state.betMade ? 
              <Result 
                bet={this.state.bet} 
                total={this.calculateTotal()}
              /> : null)}
            <Total 
              hand1={this.state.hand1}
              hand2={this.state.hand2}
              hand3={this.state.hand3}
              hand4={this.state.hand4}
            />
            <div className="hands-wrapper">
              <div className="hand-one-two">
                <Hand hand={this.state.hand1} />
                <Hand hand={this.state.hand2} />
              </div>
              <div className="hand-three-four">
                <Hand hand={this.state.hand3} />
                <Hand hand={this.state.hand4} />
              </div>
            </div>
            <div className="analytics">
              <p className="analytics-txt">win: {this.state.win}</p>
              <p className="analytics-txt">lose: {this.state.lose}</p>
              <p className="analytics-txt">bets: {this.state.bets}</p>
            </div>
            <Bets 
              setBet={this.setBet}
              />
        </header>
    </div>

     );
  }
}
 
export default App;

