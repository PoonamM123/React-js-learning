import { createContext, useState, type FC, type ReactNode } from "react"
type contextType={
    value:string,
    setValue:(newvalue:string)=>void
}
export const context1=createContext<contextType | undefined>(undefined)
type childtype={
    children:ReactNode
}
export const Example:FC<childtype>=({children})=>{
    const[value,setValue]=useState<string>('');
    const contextValue: contextType = {
        value,
        setValue,
  };
    return <>
        <context1.Provider value={contextValue}>
            {children}
        </context1.Provider>
    </>
}