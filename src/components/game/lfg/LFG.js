import React, { Component } from 'react';
import './LFG.css';
import LFGbutton from '../../images/lfg_button.png';
import { Link } from 'react-router-dom';

class LFG extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

  // render LFG button if both bet and guess are made

  renderLFG(betMade, guessMade) {
    let LFG;

    if(betMade && guessMade) {
        LFG = <img src={LFGbutton} className="lfg-button" alt="lets fucking go button" onClick={() => this.props.setRandomHands()}/>
    } else {
        LFG = null
    }

    return LFG;
  }
    render() { 
        return ( 
            <Link to="/result" >
                <div className="lfg">
                    {this.renderLFG(this.props.betMade, this.props.guessMade)}
                </div>
            </Link>

         );
    }
}
 
export default LFG;