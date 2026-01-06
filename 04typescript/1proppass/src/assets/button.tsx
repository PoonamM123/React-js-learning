// type val={myname:string, fun:Function, isbool:boolean};

import type { FC } from "react"

interface yes{
   myname:string, 
   fun:Function, 
   isbool:boolean
}

const Button:FC<yes>=({myname,fun,isbool})=>{
    return<>
        <button label={myname} onClick={fun} disabled={isbool}>checked</button>
        <div>
            <h1>{myname}</h1>
            <h2 onClick={fun}>yes</h2>
            <h3>{isbool}</h3>
        </div>
    </>
}
export default Button