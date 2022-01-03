import React, { Component } from 'react';
import './Total.css';

class Total extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    addTotal() {
        const total = this.props.hand1 + this.props.hand2 + this.props.hand3 + this.props.hand4

        return total;
    }
    render() { 
        return ( 
            <div className="total">
                <h2 className="total-header">Total</h2>
                <h2 className="total-number">{this.addTotal()}</h2>
            </div>
         );
    }
}
 
export default Total;