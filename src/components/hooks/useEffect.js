import React, {useState, useEffect} from 'react';

 


export function HookMouse(){
     
    let initialCount = 0;
    const [items, setItems] = useState([]);
    const [count, setCount] = useState(initialCount);
    const [name, setName] = useState('');
    

    // use effect runs when the component renders
    useEffect(()=>{
        console.log("use effect ran");
        document.title = `you clicked ${count} times`;
    }, [count])

    return (
        <div className="App">

            <div className="container">
                <p>{count}</p>

                <div className="row">

                    <div className="col s8">
                        <input id="namefield" type="text" className="input-field" value={name} onChange={e => setName(e.target.value) }></input>
                        <label type="" for="namefield">Name</label>
                    </div>                  
                </div> {/* end of row*/}

                

               <button onClick={ () => setCount(count => count + 1) } className="btn hoverable">Increment</button>
            </div>
        </div>
    )
}

// export default HookUseEffect;






























