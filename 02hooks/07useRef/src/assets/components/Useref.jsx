import { useRef } from "react"
const Useref=()=>{
    const inputstore=useRef(null)
    console.log(inputstore)
    const handle=()=>{
        inputstore.current.focus()
    }
    return <>
        <input type="text" ref={inputstore} />
        <button onClick={handle}>focus to input</button>
    </>
}
export default Useref