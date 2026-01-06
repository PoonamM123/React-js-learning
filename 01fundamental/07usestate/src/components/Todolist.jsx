import React, { useState } from "react";

const Todolist=()=>{
    const [items,setItems]=useState(["poonam","hello"])
    const [inputval,setInputval]=useState("")
    const [val,setVal]=useState("")
    const formHandle=(e)=>{
        e.preventDefault()
        if(inputval.trim()){
            setItems([...items,inputval])
        } 
    }
    const changeVal=(e)=>{
        setInputval(e.target.value)
    }
    return <>
    <h1>TO DO LIST</h1>
        <form onSubmit={formHandle}>
            <input 
                type="text" 
                name="item"
                placeholder="items add" 
                value={inputval}
                onChange={changeVal}
            />
            <button type="submit"> add item</button>
        </form>
        {
            items.map((item,index)=>(
                <ul key={index}>
                    <li >{item}</li>
                </ul>
                
            ))
        }
    </>
}

export default Todolist