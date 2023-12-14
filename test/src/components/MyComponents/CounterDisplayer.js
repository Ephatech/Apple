import React, { Component } from 'react';

class CounterDisplayer extends Component {
    render() {
        return (
            <div>
                <h2>Total Counter : {this.props.clicks}</h2>
            </div>
        );
    }
}

export default CounterDisplayer;
