import React, { useEffect, useState } from "react";

const CounterEffect =()=>{
    const [count, setCount]=useState(0);
    // console.log(count);
    useEffect(()=>{ 
       document.title=`count:${count}`;
       console.log(count);
    },[count])
    return <>
        <h1>{count}</h1>
        <button onClick={ ()=> {count>=0? setCount(count+1): count}}> Increment</button>
        
        {/* <button  >Decerement</button> */}
    </>
}

export default CounterEffect