import React, {useState, useEffect} from 'react';

 


export function IntervalCounter(){
     
    const [count, setCount] = useState(0);
    
    const tick = () =>{
        setCount(count => count + 1);
    }

    // use effect runs when the component renders
    useEffect(()=>{
        console.log("use effect ran");

        const interval = setInterval(tick, 1000);

    }, [])

    return (
        <div className="App">

            <div className="container">
                <p>{count}</p>

                <div className="row">

                </div> {/* end of row*/}

                

            </div>
        </div>
    )
}

// export default HookUseEffect;






























