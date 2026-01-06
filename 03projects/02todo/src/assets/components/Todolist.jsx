import { useState } from "react"

const Todolist=()=>{
    const[value,setValue]=useState([])
    const [inputVal, setInputVal]=useState(null)
    const submit=(e)=>{
        e.preventDefault();
        if(inputVal.trim()){
            setValue([...value,inputVal])
        }
    }
   
    return <>
        <div style={{textAlign:'center', marginTop:'50px'}}>
            <form onSubmit={submit} >
                <input className="Input" placeholder="Input the todo value" type="text" value={inputVal} onChange={(e)=> setInputVal(e.target.value)}/>
                <br/>
                <button className="Btn" type="submit">ADD TODO LIST</button>
            </form> 
                <button className="Btn1" onClick={()=>setValue((prev)=>prev.slice(0,-1))} >REMOVE LAST </button>
             
            <h3>Your Todo list for today </h3>

            {value.map((val,index)=>
                <li key={index}>{val}</li>
            )}
            
        </div>
    </>
}
export default Todolist