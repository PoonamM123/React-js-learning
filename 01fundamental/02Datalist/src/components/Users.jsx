import React from "react";

const Users =()=>{
    const users = [
        { id: 1, name: "Alice", age: 25 },
        { id: 2, name: "Bob", age: 30 },
        { id: 3, name: "Charlie", age: 22 },
    ];

    return(
        <div>
            {users.map((u)=>(
                <ul key={u.id}>
                    <li>{u.name}</li>
                    <li>{u.age}</li>
                </ul>
            ))}
        </div>
    )
}
export default Users