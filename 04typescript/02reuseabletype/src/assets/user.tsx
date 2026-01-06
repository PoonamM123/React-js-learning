export type Info={
    name:string,
    classes:string,
    user:string,
    fun:()=>void
};
const User=({name,classes,user,fun}:Info)=>{


    return<>
       
        <h1 onClick={fun}>{name}</h1>
        <h2>{classes}</h2>
        <h3>{user}</h3>
    
    </>
}
export default User