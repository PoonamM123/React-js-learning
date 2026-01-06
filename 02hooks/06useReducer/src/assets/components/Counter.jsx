import { useReducer, useState } from "react"
import { counterReducer, intialState } from "./UseReducer"

const Counter=()=>{ 
    const[inputval,setInputval]=useState(0)
    const [state,dispatch]=useReducer(counterReducer,intialState)
    const decrement=()=>{
        dispatch({type:'decrement'})
    }
    const incrementbyval=()=>{   
        dispatch({type:'incrementbyvalue',val:+inputval})
    }
    return<>
        <h1>{state.count}</h1>
        <button onClick={()=>dispatch({type:'increment'})}> ^ increment </button>
        <button onClick={decrement}> - decrement </button>
        <br/>
        <input type="number" value={inputval} onChange={(e)=>{setInputval(e.target.value)}}/>
        <br/>
        <button onClick={incrementbyval}>incrementbyvalue</button>
        <button onClick={()=>dispatch({type:'decrementbyvalue', val: +inputval})}>decrementbyvalue</button>
       
    </>
}
export default Counter