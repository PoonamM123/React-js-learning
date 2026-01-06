import React from "react"
const Event=()=>{
    const eventmouse =(e: React.MouseEvent<HTMLDivElement>)=>{
        console.log(e.currentTarget)
    }
    const eventhandler=(e:React.MouseEvent<HTMLButtonElement>)=>{
        console.log(e.currentTarget)
    }
    return <>   
        <div onMouseEnter={eventmouse}>
            <p>Lorem ipsum dolor sitbore, autem fugit expedita inventore ration</p>
            <button onClick={eventhandler}>click me</button>
        </div>
    </>
}
export default Event