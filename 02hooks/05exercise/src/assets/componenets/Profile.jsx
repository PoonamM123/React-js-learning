import { useContext } from "react"
import { UserProvider } from "./UserContext"

const Profile=()=>{
    const {name}=useContext(UserProvider);
    return <>
        <h1>Name = {name.yes}</h1>
    </>
}
export default Profile