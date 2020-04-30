import React, {useState} from 'react';


function HookCounter4(){
	
	const [items, setItems] = useState([]);

	const addItem = () => {
		setItems([...items, {id: items.length, value : Math.floor(Math.random() * 10 + 1)} ] )
	};

    return (
        <div className="App">

            <div className="container">

            	{/* whats in m state?*/}
            	<p>{JSON.stringify(items)}</p>

            	<button onClick={addItem} className="">Push number</button>

            	<br />
                
            	<ul>
            		{
            			items.map( (item)=> (
            				<li key={item.id} className="">{item.value}</li>	
            				)
            			)
            		}
            	</ul>

            </div>
        </div>
    )
}


export default HookCounter4;






























