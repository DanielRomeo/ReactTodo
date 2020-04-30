import React, {useReducer} from 'react';



/*===========================================*/
// const initisalState = {
//     loading: true,
//     error: '',
//     post:{}
// }

// const reducer = (state, action) => {
//     switch(action.type){
//         case 'FETCH_SUCCESS':
//         return{
//             laoding : false,
//             error : '',
//             post: action.payload
//         }

//         case 'FETCH_ERROR':
//         return{
//             laoding : false,
//             error : 'something went wrong',
//             post: {}
//         }

//         default:
//         return state
//     }
// }
 
// export function FetchDataOne(){
//     const [state, dispatch] = useReducer(reducer, initisalState)
//     useEffect( () => { fetchData() }, []);

//     var fetchData = () =>{
//         fetch('http://localhost/phpRest/api/post/read_single.php?id=1')
//         .then(response => {
//            dispatch({type: 'FETCH_SUCCESS', payload:response.data})
//         })
//         .catch(error =>{
//             dispatch({type: 'FETCH_ERROR'})
//         })
//     }

//     return (
//         <div className="App">
            
//             <div className="container">
//                 {loading ? 'loading...' : <h1>post.title</h1> }
//                 {error ? error : null}
//             </div>
//         </div>
//     )
// }


// =========================================
const initisalState2 = 0;
const reducer = (state, action) =>{
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initisalState2
        default:
            return state    
    }
}

export default function CounterOne(){

    const [count, dispatch] = useReducer(reducer, initisalState2);

    return(
        <div>
            <h2>Count : {count}</h2>
            <button className="btn " onClick={()=> dispatch('increment') }>+1</button>
        </div>
    )
}























