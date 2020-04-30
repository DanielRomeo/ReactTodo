import React from 'react';
import logo from "../logo.svg";



export class Header extends React.Component{

    render(){
      return(
        <div>
          <h1>{this.props.myFunc(10, 1)}</h1>
        </div>
      );
    }
}


