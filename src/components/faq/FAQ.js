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
                            Degen 5/10 is a smart contract that allows users to place bets with their Solana tokens. 
                            Odds are 1/2, 1/4 and 1/16 with a 3.5% fee that is distributed between holders and the DCF Team.
                        </p>
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