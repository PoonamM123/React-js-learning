import { useState } from "react"

const Background=()=>{
    const[textcolor,setTextcolor]=useState("white")
    const[back,setBack]=useState("black")
    const[btn,setBtn]=useState("white")

    const change=()=>{
        setTextcolor(textcolor==="black" ? "white" : "black")
        setBack(back==="white"? "black" : "white")
        setBtn(btn==="black"? "white" : "black")
    }  
    return (
        <>
            <div style={{width:"100vw", height:"100vh", backgroundColor:`${back}`}}>
                <h1 style={{color:`${textcolor}`}}>this is my text</h1>
                <br />
                <button style={{color:`${btn}`,backgroundColor:`${back}`}} onClick={change}>Change the color</button>
            </div>
        </>
    )
}
export default Background