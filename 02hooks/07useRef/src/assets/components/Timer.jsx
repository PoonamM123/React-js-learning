import { useEffect } from "react";
import { useState,useRef } from "react"
import Useref from "./Useref";

const Timer=()=>{
    const timerval=useRef();
    const [count, setCount]=useState(0);
    useEffect(()=>{
        
        timerval.current=setInterval(()=>{
            setCount((prev)=>prev+1);
              
        },1000)

        return ()=>clearInterval(timerval.current)
    },[])

    return<>
        <h1>{count}</h1>
        <button onClick={()=>clearInterval(timerval.current)}>Stop</button>
    </>
}
export default Timer