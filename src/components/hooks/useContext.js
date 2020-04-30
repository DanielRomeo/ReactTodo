import React, {useState, useEffect, useContext} from 'react';
import {UserContext, MoneyContext} from '../../App.js';

 


export function ComponentA(){

    const user = useContext(UserContext);
    const moneycontext = useContext(MoneyContext);


    return (
        <div className="App">

            <div className="container">
                {user} + {moneycontext}
            </div>
        </div>
    )
}

export function ComponentB(){
    
    return (
        <div className="App">

            <div className="container">
                <ComponentA></ComponentA>
            </div>
        </div>
    )
}

export default function ComponentC(){
    
    return (
        <div className="App">

            <div className="container">
                <ComponentB></ComponentB>
            </div>
        </div>
    )
}

// this is what the main app.js file would look like:

// export const UserContext = React.createContext();
// export const MoneyContext = React.createContext();

// function App(){
//     return (
//         <div className="App">
//             <Navbar></Navbar>

//             <div className="container">

//                 <MoneyContext.Provider value={5000}>
//                     <UserContext.Provider value={'daniel'}>
//                         <ComponentC></ComponentC>
//                     </UserContext.Provider>
//                 </MoneyContext.Provider>
                
                
//             </div>
//         </div>
//     )
// }





























