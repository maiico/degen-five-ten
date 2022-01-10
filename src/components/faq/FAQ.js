import React from "react";
import LFGbutton from '../images/lfg_button.png';
import './FAQ.css';
import { Link } from 'react-router-dom';

function FAQ(props) {
    return (
        <div className="faq">
            <h1 className="faq-header">Frequently Asked Questions</h1>
            <div className="faq-body">
                <div className="question">
                    <h2 className="faq-subhead">What is Degen 5/10 (DFT)?</h2>
                        <p className="faq-txt">
                            Degen 5/10 is a game that allows users to play and place bets with their Solana tokens. 
                            Odds are 1/2, 1/4 and 1/16 with a 3.5% fee that is distributed between holders and the DFT Team.
                        </p>
                </div>
                <div className="question">
                    <h2 className="faq-subhead">How to play Degen 5/10 (DFT)?</h2>
                        <p className="faq-txt">
                            Bet $SOL on the total outcome of four hands. After a bet is placed and a guess is made press the LFG button. Each hand will have a 50/50 chance to either be open  (5) or closed (0). 
                            If your guess matches the total from all four hands congratulations you won. Otherwise, better luck next time degen.
                        </p>
                        <div className="faq-payouts">
                            <p className="odds-txt">Payout rates based on odds:</p>
                            <p className="odds-txt">0 = x16</p>
                            <p className="odds-txt">5 = x4</p>
                            <p className="odds-txt">10 = x2</p>
                            <p className="odds-txt">15 = x4</p>
                            <p className="odds-txt">20 = x16</p>
                        </div>
                        <div className="faq-bets">
                            <p className="odds-txt">Bets:</p>
                            <p className="odds-txt">0.05 $SOL</p>
                            <p className="odds-txt">0.1 $SOL</p> 
                        </div> 
                </div>
                <div className="question">
                    <h2 className="faq-subhead">How do I know I can Trust DFT?</h2>
                        <p className="faq-txt">
                            It's a smart contract on the solana blockchain, all can be found through the blockchain. Plus you're probably a degen so you'll play regardless.
                            The DFT Team and DFT NFT holders have aligned incentives for the game to have 1/2, 1/4 and 1/16 odds and paid out accordingly (x2,x4,16x).
                            Our house and fee wallets are all public and every transaction can be reviewed by anyone.
                        </p>
                </div>
                <div className="question">
                    <h2 className="faq-subhead">House Wallet</h2>
                        <p className="faq-txt">
                            TBA when betting is live.
                        </p>
                </div>
                <div className="question">
                    <h2 className="faq-subhead">Fee Wallet</h2>
                        <p className="faq-txt">
                            TBA when betting is live.
                        </p>
                </div>
                <div className="question">
                    <h2 className="faq-subhead">Where can I learn more?</h2>
                        <p className="faq-txt">
                            Join us on discord or reach out on twitter there will always be someone to help you out. 
                        </p>
                </div>
            </div>
                <Link to="/" >
                    <div className="lfg-faq-wrapper" >
                        <img src={LFGbutton} className="lfg-faq" alt="lets fucking go button" />
                    </div>
                </Link>
        </div>)
  }

  export default FAQ;