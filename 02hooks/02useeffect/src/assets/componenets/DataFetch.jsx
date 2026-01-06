import React, { useEffect, useState } from "react";

const DataFetch=()=>{
    const [post,setPost]=useState([])
    useEffect(()=>{
        const Datafetch= async()=>{
            const store=await fetch("https://jsonplaceholder.typicode.com/posts")
            const data= await store.json()
            setPost(data)
        }
        Datafetch();
    },[])
    return <>
        <h1>The all title</h1>
        
        {post.length>0? post.map((posts)=>(
          <li key={posts.id}>{posts.id}</li>)
        ) : <h1>Loding....</h1>}
    </>
}
export default DataFetch