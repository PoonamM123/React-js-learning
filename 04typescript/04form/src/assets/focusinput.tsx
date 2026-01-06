import { useRef } from "react"

const Focusinput=()=>{
    const foucs=useRef<HTMLInputElement>(null)
    const handle=()=>{
        foucs.current?.focus();
    }

    return<>
        <input type="text" placeholder="click btn to focus" ref={foucs}/>
        <button onClick={handle}>focus</button>
    </>
}
export default Focusinput