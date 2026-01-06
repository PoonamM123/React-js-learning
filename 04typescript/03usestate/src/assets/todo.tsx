import { useState } from "react"
type todotype={
    id:number,
    val:string,
}
const Todo=()=>{
    const [todo, setTodo]=useState<todotype[]>([]);
    const [val, setVal]=useState<string>('')

    const addtodo=(val:string)=>{
        const newTodo: todotype={
            id:todo.length+1,
            val 
        } 
        setTodo(pre=>[...pre,newTodo])
    }
    return<>
        <input type="text" value={val} onChange={e=>setVal(e.target.value)}/> 
        <button onClick={()=>val? addtodo(val):val}> add Todo </button>  
        {
            todo.map(({val,id})=>(
                <ul key={id}>
                    <span>{id}</span>
                    <span>{val}</span>  
                </ul>
            ))
        }
    </>
}
export default Todo