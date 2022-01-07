import React, { Component } from 'react';
import Logo from '../images/logo.png';
import Discord from '../images/discord_icon.png';
import Twitter from '../images/twitter_icon.png';
import { NavLink } from 'react-router-dom';
import './Nav.css';


function Nav(props) {

    return ( 
        <div className="nav">
            <div className="nav-items">
                <NavLink to="/" className="logo">
                    <img className="logo" src={Logo} alt="Degen Five Ten Logo" />
                </NavLink>
                <ul className="nav-links">
                    <li className="list-item">
                        <NavLink to="/FAQ" className="nav-txt" activeClassName="selected">
                            FAQ
                        </NavLink>
                    </li>
                    <li className="list-item">
                        <a href="https://discord.gg/JWbbCFff5f" target="_blank" rel="noopener noreferrer">
                            <img className="socials" src={Discord} alt="discord" />
                        </a>
                    </li>
                    <li className="list-item">
                        <a href="https://twitter.com/Degen510" target="_blank" rel="noopener noreferrer">
                            <img className="socials" src={Twitter} alt="twitter" />
                        </a>
                     </li>
                </ul>
            </div>
        </div>
     );

    }

  export default Nav;





// class Nav extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }
//     render() { 
//         return ( 
//             <div className="nav">
//                 <div className="nav-items">
//                     <img className="logo" src={Logo} alt="Degen Five Ten Logo" />
//                     <ul className="nav-links">
//                         <li className="list-item">
//                             <Link to="/FAQ">
//                                 <p className="nav-txt">FAQ</p>
//                             </Link>
//                         </li>
//                         <li className="list-item">
//                             <a href="https://discord.gg/JWbbCFff5f" target="_blank" rel="noopener noreferrer">
//                                 <img className="socials" src={Discord} alt="discord" />
//                             </a>
//                         </li>
//                         <li className="list-item">
//                             <a href="https://twitter.com/Degen510" target="_blank" rel="noopener noreferrer">
//                                 <img className="socials" src={Twitter} alt="twitter" />
//                             </a>
//                          </li>
//                     </ul>
//                 </div>
//             </div>
//          );
//     }
// }
 
// export default Nav;