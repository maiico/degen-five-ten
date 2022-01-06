import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Game from './components/game/Game';
import Result from './components/result/Result';

class App extends Component {
  constructor(props) {
    super(props);
    this.setRandomHands = this.setRandomHands.bind(this);
    this.state = { 
      hand1: 0,
      hand2: 5,
      hand3: 0,
      hand4: 5,
      bet: 0,
      guess: "",
      payout: 0,
      betMade: false,
      guessMade: false
     }
  }

  // reset function to reset all game variables 

  resetGame = async () => {
    this.setState({
      hand1: 0,
      hand2: 5,
      hand3: 0,
      hand4: 5,
      bet: 0,
      guess: "",
      payout: 0,
      betMade: false,
      guessMade: false
    })
  }

  // set bet 

  setBet = async(bet) => {
    try{
      this.setState({
        bet: bet,
        betMade: true
      });
    } catch(err) {
      console.log(err)
    }
  }

  // set the users guess 

  setGuess =  async(guess) => {
    try{

      // determine payout based on guess odds
      let payout;

      switch(guess) {
        case 0:
          payout = 16
          break;
        case 5:
          payout = 4
          break;
        case 10:
          payout = 2
          break;
        case 15:
          payout = 4
          break;
        case 20:
          payout = 16
          break;
        default:
          payout = 0;
          break;
      }

      this.setState({
        guess: guess,
        payout: payout,
        guessMade: true
      })

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
        hand4: hand4,
        total: hand1 + hand2 + hand3 + hand4
      })

  }

  render() { 
    return ( 
      <div className="App">
        <header className="App-header">
          <Nav />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={
                <Game
                  bet={this.state.bet} 
                  guess={this.state.guess}
                  betMade={this.state.betMade}
                  guessMade={this.state.guessMade}
                  setBet={this.setBet}
                  setGuess={this.setGuess}
                  setRandomHands={this.setRandomHands}
                  resetGame={this.resetGame}
                />} 
              />
              <Route path="/result" element={
                <Result 
                  bet={this.state.bet}
                  guess={this.state.guess}
                  hand1={this.state.hand1}
                  hand2={this.state.hand2}
                  hand3={this.state.hand3}
                  hand4={this.state.hand4}
                  total={this.state.total}
                  payout={this.state.payout}
                  resetGame={this.resetGame}
                />
              }/>
            </Routes>
          </BrowserRouter>
        </header>
    </div>

     );
  }
}
 
export default App;

