export type actiontype={type :'increment'} | {type :'decrement'}
export type statetype={count:number}
export const Reducer=(state:statetype,action:actiontype)=>{
    switch (action.type) {
        case "increment": 
             return {count:state.count+1}
        case "decrement":
            return {count:state.count-1}
        default:
            return state;
    }
}