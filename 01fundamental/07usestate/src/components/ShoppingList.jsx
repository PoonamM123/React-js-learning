import React, { useState } from "react";
const ShoppingList=()=>{
    const[item,setItem]=useState([])
    const [name, setName]=useState("")
    const [quantity, setQuantity]=useState("")

    const handle=(e)=>{
        e.preventDefault()
        if(!quantity || !name) return 
        const newItem={
            name,
            quantity:Number(quantity)
        }
        setItem((prevItem)=>[...prevItem,newItem])

    }

    return<>
        <form onSubmit={handle}>
            <label>
                Name:
                <input type="text" placeholder="itemname" value={name} onChange={(e)=>setName(e.target.value)}/>
            </label>
            <label>
                Quantity:
                <input type="number" placeholder="itemQuantity" value={quantity} onChange={(e)=>setQuantity(e.target.value)}/>
            </label>
            <button type="submit"> submit</button>
        </form>
        {item.map((i,index)=>(
            <ul key={index}>
                <li >{i.name}</li>
                <li >{i.quantity}</li>
            </ul>
        ))}
    </>
}
export default ShoppingList