import { useState } from "react"
const Counter=()=>{
    const [val, setVal]=useState<number>(0)
    return <>
        <h1>{val}</h1>
        <button onClick={()=>setVal(prev=>prev+1)}>Increment</button>
    </>
}
export default Counter