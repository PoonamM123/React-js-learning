import React, { useState } from "react";

const Switcher=()=>{
    const [sw, setSw]=useState(false)
    return (
        <div>
            {sw? <span>dark</span>: <span>light</span>}
            <br/>
            <input type="text" key={sw? "dark" : "light"}/>
            <button onClick={()=>setSw((s)=>!s)}>change</button>
        </div>
    )
}
export default Switcher