import { useState } from "react"

const Calculator=()=>{
    const [inputval,setInputval]=useState('5');

    const clear=()=>{
        setInputval('');
    }
    const dispaly=(e)=>{
        setInputval(inputval+e)
    }
    const caculation=()=>{
        const answer=eval(inputval);
        setInputval(answer);
    }
    return (
        <div style={{textAlign:"center", alignItems:"center"}}>
        
            <input type="text" value={inputval} placeholder="answer"/>
            <button onClick={clear}>C</button>
            
            <br/>
            <button onClick={()=>dispaly("7")}>7</button>
            <button onClick={()=>dispaly("8")}>8</button>
            <button onClick={()=>dispaly("9")}>9</button>
            <button onClick={()=>dispaly("+")}> + </button>
            <br/>
            <button onClick={()=>dispaly("4")}>4</button>
            <button onClick={()=>dispaly("5")}>5</button>
            <button onClick={()=>dispaly("6")}>6</button>
            <button onClick={()=>dispaly("-")}> - </button>
            <br />
            <button onClick={()=>dispaly("1")}>1</button>
            <button onClick={()=>dispaly("2")}>2</button>
            <button onClick={()=>dispaly("3")}>3</button>
            <button onClick={()=>dispaly("*")}> * </button>
            <br/>
            <button onClick={()=>dispaly("/")}> / </button>
            <button onClick={()=>caculation()}> = </button>
        </div>
    )
}
export default Calculator   