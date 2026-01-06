import { useState } from "react"
const Counter=()=>{
    const [count, setCount]=useState(0)

    return <>
        <h1 className="heading">count:{count}</h1>
        <div className="BtnG">
            <button className="firstBtn" onClick={()=>
                count>=0? setCount(count+1):count
            }>Increment</button>
            <button className="secondBtn" onClick={()=>
                {if(count>=1) setCount(count-1)}
            }>Decrement</button>
        </div>
    </>
}
export default Counter