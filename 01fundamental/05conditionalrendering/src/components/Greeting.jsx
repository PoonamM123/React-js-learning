import React from "react";

const Greeting =({time})=>{
    return (time==="afternoon")?(<h1> good {time}</h1>
    ):(
        <h1>good {time}</h1>
    )
}
export default Greeting