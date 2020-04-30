import React from 'react';
import {Component} from 'react';
import '../css/counter.css';

export class Counter extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            count : 0
        } 
    }

    increment = () =>{
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement = () =>{
        this.setState({
            count: this.state.count - 1
        })
    }

    render(){
        return(
            <div className="myCounter">
                <div>Count : {this.state.count}</div>

                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>        
        );
    }
}

