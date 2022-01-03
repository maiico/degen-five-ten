import React, { Component } from 'react';

class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    renderResult() {
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
               {this.renderResult()}
            </div>
         );
    }
}
 
export default Result;