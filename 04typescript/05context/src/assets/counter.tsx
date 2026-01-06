import { useContext } from "react"
import { mycontext } from "./context"

export const Counter =()=>{

    const{count,increment,decrement}=useContext(mycontext);

    return<>
        <p>{count}</p>

        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
    </>

}
