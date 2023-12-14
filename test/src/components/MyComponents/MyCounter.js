import React, { Component } from 'react';
import CounterDisplayer from './CounterDisplayer';
import EvenCounterDisplayer from './EvenCounterDisplayer';

class MyCounter extends Component {
    constructor(){
        super();
        this.state={
            counter:0
        }
    }

    allClicksCounter = () => {
        this.setState(()=>{
            return{
                counter:this.state.counter+1
            };
        }
        );
    };

    render() {
        return (
            <div>
                <button onClick={this.allClicksCounter}>Click Me</button>
                <CounterDisplayer clicks={this.state.counter}/>
                <EvenCounterDisplayer clicks={this.state.counter%2==0 ? this.state.counter : this.state.counter-1}/>
            </div>
        );
    }
}


export default MyCounter;

// 0912194947