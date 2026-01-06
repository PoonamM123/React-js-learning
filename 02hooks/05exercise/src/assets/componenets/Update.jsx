import { useContext, useState } from "react"
import {UserProvider } from "./UserContext"

const Update=()=>{
     
    const {name,setName} =useContext(UserProvider)
    const [inputVal,setInputVal]=useState();
    
    const fun=(e)=>{
        setInputVal(e.target.value)
    }
    return <>
            <input type="text" value={inputVal} onChange={fun}/>
            <button onClick={()=>setName({yes:inputVal})}>submit</button>
    </>
}
export default Update