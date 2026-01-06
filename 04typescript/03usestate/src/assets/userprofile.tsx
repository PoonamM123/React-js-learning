import { useState } from "react"
type profileType={
    names:string,
    age:number,
    email:string
}
const Profile=()=>{
    const [profile, setProfile]=useState<profileType>({
        names:"",
        age:0,
        email:""
    })
    const setName=(names:string)=>{
        setProfile((prev)=>({...prev,names}))
    }
    const setAge=(age:string)=>{
        setProfile((prev)=>({...prev,age:+age}))
    }
    const setEmail=(email:string)=>{
        setProfile((prev)=>({...prev,email}))
    }
    return <>
        <input type="text" value={profile.names} onChange={(e)=> setName(e.target.value)} />
        <input type="text" value={profile.age} onChange={(e)=> setAge(e.target.value)} />
        <input type="email" value={profile.email} onChange={(e)=> setEmail(e.target.value)} />
        <p>Name :{profile.names}</p>
        <p>Age :{profile.age}</p>
        <p>Email :{profile.email}</p>
    </>
}
export default Profile