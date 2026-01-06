import type { Info } from "./user"
type adminval = Info &{
    isadmin:String
}
const Admin=({name,classes,user,fun,isadmin}:adminval)=>{
    return<>
     <h4 onClick={fun}>{name},{classes},{user}</h4>
     <h1>{isadmin}</h1>
    </>
}
export default Admin