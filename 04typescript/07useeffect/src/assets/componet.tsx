import { useEffect, useState } from "react"
import type { Data } from "./data"


const Component=()=>{
    const[data,setData]=useState<Data[]>([])
    const[error,setError]=useState<string | null>(null)
    const[load,setLoad]=useState<boolean>(true);

    useEffect(()=>{
        const fetchdata= async ()=>{
            try {
                const response =await fetch("https://jsonplaceholder.typicode.com/users");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }   
                const user=await response.json();
                setData(user);
            } catch (error) {
                 setError(error instanceof Error ? error.message : "An error occurred");
            }
            finally{
                setLoad(false);
            }
        }
        fetchdata();    
    },[])
        if(load)return<><div>loding</div></>
        if(error)return<div>error:{error}</div>
    return<>
        {   
            data.map(({id,name,username,email,phone})=>(
            // console.log("PM");
            <ul key={id}>
                <li>{name}</li>
                <li>{username}</li>
                <li>{email}</li>
                <li>{phone}</li>
            </ul>
        ))}
    </>
}
export default Component