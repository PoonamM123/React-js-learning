import React from "react";

const UserStatus=({islogin,isadmin})=>{
    if(islogin && isadmin){
        return <h1>Welocme Admin</h1>
    }else if(islogin){
        return <h1>Welocme user</h1>
    }else{
        return <h1>PLz login</h1>
    }
}
export default UserStatus