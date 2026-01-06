import React from "react";
import {createPortal} from 'react-dom'

const Popup=({copy})=>{

    return createPortal( <div>{
        (copy && (<div>copied</div>) )
     }</div>,
     document.querySelector("#poter")
    )
} 
export default Popup