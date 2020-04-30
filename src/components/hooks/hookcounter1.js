import React, {useState} from 'React';

export function HookCounter2(){ /*counter*/
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    return(
        <div>
            
          <p style={{color: "blue"}}>{count}</p>

           <button className="btn hoverable blue light-3 " onClick={ () => setCount(initialCount) }>Reset</button>
           <button className="btn hoverable" onClick={ () => setCount(count => count - 1) }>- 1 month</button>
           <button className="btn hoverable" onClick={ () => setCount(count => count + 1) }>+ 1 month</button>
           <button className="btn hoverable" onClick={ () => setCount(count => count + 5) }>+ 5</button>
        </div>
    )
}

export function HookCounter3(){ /*form*/

    const [name, setName] = useState({firstName: '', lastName: ''});

    return(
        <div className="">

              <div className="row">
                <div className="col s8">
                    <input id="firstName" 
                        className="input-field" 
                        type="text" 
                        class="validate" 
                        value={name.firstName} 
                        onChange={e => setName({ ...name, firstName: e.target.value })}>
                    </input>

                    <label for="firstName">First Name</label>
                </div>                  
              </div> {/* end of row*/}

              <div className="row">
                  <div className="col s8">
                      <input className="input-field" 
                            id="lastName"
                            type="text"
                            value={name.lastName}
                            onChange={e => setName({...name, lastName: e.target.value})}>
                          
                      </input>
                      <label for="lastName">Last Name</label>
                  </div>
              </div> {/* end of row*/}


            <h2>Your name is : {name.firstName}</h2>
            <h2>Your lastname is : {name.lastName}</h2> 
            <h2>{JSON.stringify(name)}</h2>
        </div>
    )
}