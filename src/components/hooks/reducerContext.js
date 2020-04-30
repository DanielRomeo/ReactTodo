import React, {useContext, useReducer} from 'react';
import {CountContext} from '../../App';

/*
	EXPLANATION OF THE APPLICATION:
	- App.js calls componnet A, b and C. 
	- B parents D
	- C parents E and E parents F

	-- A, D & F hold the counters:

*/



export  function ComponentA(){
	
	// import the context:
	const countContext = useContext(CountContext)

	return(
		<div>
			<button className="btn" onClick={()=> countContext.countDispatch('increment') }>+1</button>
		</div>
	)
}

export  function ComponentB(){

	return(
		<div>
			<ComponentD/>
		</div>
	)
}

export  function ComponentC(){
	
	return(
		<div>
			<ComponentE />
		</div>
	)
}

// component d and e and f

export  function ComponentD(){
	
	// import the context:
	const countContext = useContext(CountContext)

	return(
		<div>
			<button className="btn" onClick={()=> countContext.countDispatch('increment') }>+1</button>
		</div>
	)
}

export  function ComponentE(){
	return(
		<div>
			<ComponentF/>
		</div>
	)
}

export  function ComponentF(){
	const countContext = useContext(CountContext)
	return(
		<div>
			<button className="btn" onClick={()=> countContext.countDispatch('increment') }>+1</button>
		</div>
	)
}