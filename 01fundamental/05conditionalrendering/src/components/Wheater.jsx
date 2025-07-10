import React from "react";

const Wheater=(Props)=>{
    const temp =Props.temprature
    if(temp <15){
        return <h1>Its cold</h1>
    }if(temp <25){
        return <h1>Its normal</h1>
    }else{
        return <h1>Its Tooo hot</h1>
    }
}
export default Wheater