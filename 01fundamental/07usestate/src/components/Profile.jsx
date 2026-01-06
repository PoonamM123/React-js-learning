import React, { useState } from "react";

const Profile=()=>{
    const [profile,setProfile]=useState({name:"", age:""})
    const handle=(e)=>{
        const {name,value}=e.target
        setProfile((prevProfile)=>({
                ...prevProfile,
                [name]:value
        }))
    }
    return <>
        <label >
            Name:
        <input type="text" name="name" value={profile.name} onChange={handle}/>
        </label>
        <div></div>
        
        <label >
            Age:
        <input type="number" name="age" value={profile.age} onChange={handle}/>
        </label>

        <h1>name:{profile.name}</h1>
        <h2>Age:{profile.age}</h2>
    </>
}
export default Profile