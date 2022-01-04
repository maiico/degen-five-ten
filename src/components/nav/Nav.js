import React, { Component } from 'react';
import Logo from '../images/logo.png';
import Discord from '../images/discord_icon.png';
import Twitter from '../images/twitter_icon.png';
import './Nav.css';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="nav">
                <div className="nav-items">
                    <img className="logo" src={Logo} alt="Degen Five Ten Logo" />
                    <ul className="nav-links">
                        <li className="list-item"><p className="nav-txt">FAQ</p></li>
                        <li className="list-item"><img className="socials" src={Discord} alt="discord" /></li>
                        <li className="list-item"><img className="socials" src={Twitter} alt="twitter" /></li>
                    </ul>
                </div>

            </div>
         );
    }
}
 
export default Nav;