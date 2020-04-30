import React, {useState, useEffect, useReducer} from 'react';
import './css/App.css';

// import {Component} from 'react';
// import PropTypes from 'prop-types';
// import logo from './logo.svg';
// import './css/App.css';
// import {Body, Body2} from './components/Body.js';
// import {Header, Header2} from './components/Header.js';
// import { Counter } from './components/counter';
// import {Title} from './components/Title.js';
// import Button from 'react-bootstrap/Button';
// import {Newivyrest, NewivyrestAllData} from './components/newivyrest.js';
// import Navbar from './components/layouts/navbar.js';
// import HookCounter4 from './components/hooks/hookcounter4.js';
// import {HookUseEffect, HookMouse} from './components/hooks/useEffect.js';
// import {IntervalCounter} from './components/hooks/intervalCounter.js';
// import ComponentC from './components/hooks/useContext.js';
// import CounterOne from './components/hooks/reducer.js';
// import {ComponentA, ComponentB, ComponentC} from './components/hooks/reducerContext';


var initialState = {     
    counter: 0,
    todos : [
        
    ]    
}

const reducerFunction = (state, action) =>{
    switch(action.type){
        case "add" :
            {
                const newCounter = state.counter + 1; 
               
                const newTodo = {
                    id : newCounter,
                    title: action.title,
                    text : action.text
                };

                return {
                    counter: newCounter,
                    todos : [...state.todos, newTodo]
                }
            } 
        case "remove" :
            {
                const idx = state.todos.findIndex(t => t.id === action.id);
                const todos = Object.assign([], state.todos);
                todos.splice(idx, 1);
                return {
                  counter: state.counter,
                  todos: todos,
                };
            }    
    }
}


const App = () => {

    const [state, dispatch] = useReducer(reducerFunction,  initialState);

    return(
        <div class="container">

            <div class="row">
                {
                    state.todos.length == 0 ? <div>
                    <h3>
                      You currently have no items in your TaskList  
                    </h3>
                     
                    </div> :

                    state.todos.map(item => (
                    <TodoItem 
                        key={item.id} 
                        todo={item} 
                        remove={() => dispatch({type: "remove", id: item.id})} 
                    />
                ))}
           </div>

            <div className="devider">
                <AddTodo add={(textTitle, text) => dispatch({type: "add", text: text, title: textTitle})} />
            </div>

        </div> 
    )
}


const TodoItem = ( {id, todo, remove} ) => {
    
    const deleteItem = ()=>{
        remove(id)
    }

    return (
        <div  class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">{todo.title}</span>
              <p>{todo.text}</p>
            </div>
            <div class="card-action">
              <button onClick={deleteItem} className="btn red white-text">Delete</button>
            </div>
          </div>
        </div>
    )
}


const AddTodo = ( {add} ) =>{

    const [text, setText] = useState('');
    const [titleText, setTitle] = useState('');

    const addItem = (e) =>{
        e.preventDefault();
        add(titleText, text)
        setText('');
        setTitle('');
    }

    return(
        <div class="row">
            <form class="col m6 s12 l6">
                <div class="row">
                     <div class="input-field col s12">
                        <input onChange={ (e)=> setTitle(e.target.value) } value={titleText} placeholder="Math homework..." id="title" type="text" class="validate"/>
                        <label for="title">Add A Title</label>
                    </div>

                    <div class="input-field col s12">
                        <input onChange={ (e)=> setText(e.target.value) } value={text} placeholder="math homework, integrals and defferetiation" id="todo" type="text" class="validate"/>
                        <label for="todo">Add A todo</label>
                    </div>
                </div> 

                <button onClick={addItem} className="btn hoverable indigo text-white">Submit</button>  
                
            </form>
        </div>      
    )

}

export default App;














