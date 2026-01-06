import { useState, type ChangeEvent, type FormEvent } from "react"
// import React from "react"
type formtype={
    name:string,
    email:string
}
const Contactform=()=>{
    const [form,setForm]=useState<formtype>({
        name:'',
        email:''
    })
    const valchange=( e: ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target
        setForm((prev)=>({...prev, [name]:value}));
    }
    const handle=(e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log(form);
    }
    return <>
    <form onSubmit={handle}>
        <input 
            type="text" 
            name="name"
            value={form.name}
            onChange={valchange}
        />
        <input 
            type="text" 
            name="email"
            value={form.email}
            onChange={valchange}
        />
        <button type="submit">click</button>
    </form>
       
    </>
}
export default Contactform