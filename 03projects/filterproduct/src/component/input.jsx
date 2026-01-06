import { useState } from "react"
import data from "../db/data";
import Product from "./product";

const Inputfilter=({setProduct})=>{
    const [fil,setFil]=useState('');
    function inputfil(e) {
    setFil(e.target.value)
    console.log(setFil);
    const inputdata=data.filter((val)=>{return val.title.toLowerCase().includes(fil)})
    setProduct(inputdata)
    }
    return <>
    <div className="inputclass">
        <input type="text" placeholder="Search Product..." value={fil} onChange={inputfil}/>
    </div>
    </>
}
export default Inputfilter