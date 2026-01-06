import { useRef, useState, type FormEvent } from "react"
type formtype={
    name:string,
    email:string,
    password:string
}
const Form=()=>{
    const [formdata,setFormdata]=useState<formtype>({
        name:'',
        email:'',
        password:''
    })
    
    const name=useRef<HTMLInputElement>(null);
    const email=useRef<HTMLInputElement>(null);
    const password=useRef<HTMLInputElement>(null);

    const handle=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const newname = name.current!.value;
        const newEmail = email.current!.value;
        const newpassword = password.current!.value;
        
        setFormdata({
            name:newname,
            email:newEmail,
            password:newpassword
        })
    }
    return <>
    <form onSubmit={handle}>
         <label>Name :<input type="text" placeholder="enter name" ref={name}/></label>
        <label>Email :<input type="email" placeholder="enter email" ref={email} /></label>
        <label>Password :<input type="password" placeholder="enter password" ref={password}/></label>
        <button type="submit">submit</button>
    </form>
    <section>
        <h3>Name ::{formdata.name}</h3>
        <h3>Email ::{formdata.email}</h3>
        <h3>Password ::{formdata.password}</h3>   
    </section>   
    </>
}
export default Form