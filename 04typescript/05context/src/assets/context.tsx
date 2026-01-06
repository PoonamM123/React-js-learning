import { createContext, useState, type FC, type ReactNode } from "react"

type mycontextType={
    count:number,
    increment:()=>void,
    decrement:()=>void
}
type child={
    children:ReactNode;
}

export const mycontext=createContext<mycontextType>({
    count:0,
    increment:()=>{},
    decrement:()=>{}
})

export const Context:FC<child>=({children})=>{ 
    const[count,setCount]=useState<number>(0);
    const decrement=()=>{
        setCount(count-1);
    }
    const increment=()=>{
        setCount(count+1);
    }
    return <mycontext.Provider value={{decrement,increment,count}} >
        {children}
    </mycontext.Provider>
    
}
