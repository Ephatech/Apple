import React, { Component } from 'react';

class EvenCounterDisplayer extends Component {
    render() {
        return (
            <div>
               <h2>Even Counter : {this.props.clicks}</h2> 
            </div>
        );
    }
}

export default EvenCounterDisplayer;
