import React, { Component } from 'react';
import './Hand.css';

class Hand extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="hand">
                <h2 className="hand-header">Hand</h2>
                <h2 className="hand-number">{this.props.hand}</h2>
            </div>
         );
    }
}
 
export default Hand;