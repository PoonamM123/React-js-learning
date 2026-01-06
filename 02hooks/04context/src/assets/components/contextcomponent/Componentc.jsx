import { useContext } from "react"
import { Data,Data1 } from "../../../App"


const ComponentC=()=>{
    const name=useContext(Data);
    const age=useContext(Data1);

 return <>
    <h1>{name}{age}</h1>
    {/* <Data.Consumer>
        {
            (name)=>{
                return <>
                    <Data1.Consumer>
                        {
                            (age)=>{
                                return <h1>Name is {name} Age is {age}</h1>
                            }
                        }
                    </Data1.Consumer>
                </>
            }
        }
    </Data.Consumer> */}
 </>
}
export default ComponentC