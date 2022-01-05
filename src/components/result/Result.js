import React, { Component } from 'react';

class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    renderMessage() {
        let result;

        if(this.props.bet === this.props.total) {
            result = <p className="result-txt">Congratulations! You won some SOL.</p>
        } else {
            result = <p className="result-txt">You lost. Better next time fucker.</p>
        }

        return result;
    }

    render() { 
        return ( 
            <div className="result">
               <p>{this.props.total}</p>
               <p>{this.props.hand1}</p>
               <p>{this.props.hand2}</p>
               <p>{this.props.hand3}</p>
               <p>{this.props.hand4}</p>
            </div>
         );
    }
}
 
export default Result;