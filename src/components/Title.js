import React from 'react';

export class Title extends React.Component{

    constructor(){
        super();

        this.state = {
        	timer : 500
        }
    }

    render(){

    	const timer = this.state.timer;

        return(
            <h1>Timer is -- {timer}</h1>
        );
    }
}