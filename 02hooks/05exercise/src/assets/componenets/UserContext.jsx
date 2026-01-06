import { createContext, useState } from "react"

const UserProvider=createContext();

const UserContext=({children})=>{
    const [name,setName]=useState({yes:"poonam"})
    return <UserProvider.Provider value={{name,setName}}>
        {children}
    </UserProvider.Provider>
}
export {UserProvider,UserContext} 