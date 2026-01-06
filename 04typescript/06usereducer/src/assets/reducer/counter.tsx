import { useReducer } from "react"
import { Reducer, type statetype} from "./reducer"
const initialState : statetype ={count:0}
export const Counter=()=>{
    const[state,dispatch]=useReducer(Reducer,initialState)
    return <>
        <h1>count:{state.count}</h1> 
        <button onClick={()=>{dispatch({type:"increment"})}}>increment</button>
        <button onClick={()=>dispatch({type: "decrement"})}>Decrement</button>
    </>
}
