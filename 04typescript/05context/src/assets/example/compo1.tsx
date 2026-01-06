import { useContext} from "react"
import { context1 } from "./example1"

const Compo1=()=>{
    
    const yes = useContext(context1);
    if (!yes) {
        throw new Error("Compo1 must be used within an Example provider");
    }
    const { value, setValue } = yes;

    return <>
        <div>
      <p>Value: {value}</p>
        <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    </div>
    </>
}
export default Compo1