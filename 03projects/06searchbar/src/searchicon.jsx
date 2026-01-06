import React, { useState } from "react";
import {FaSearch} from "react-icons/fa"



const Searchicon=()=>{
    const[bg,setBg]=useState("white");
    const[change,setChange]=useState(false);
    const handle=(e)=>{
        if(e.target.className==="container"){
            setChange(false);
            setBg("white")
        }
    }
    return <div style={{backgroundColor:bg}} className="container" onClick={handle}>
        {change? <input placeholder="search"></input>: <FaSearch onClick={()=>{setChange(true) ,setBg("black")}}></FaSearch>}
    </div>
}
export default Searchicon