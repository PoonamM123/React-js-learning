const intialState={count:0}

const counterReducer=(state, action)=>{
    switch(action.type){
        case 'increment':
            return {count: state.count+1}
        case 'decrement':
            return {count: state.count-1}
        case 'incrementbyvalue':
            return {count : (state.count + action.val)}
        case 'decrementbyvalue':
            return {count : state.count - action.val}  
        default :
            return state      
    }
}
export {intialState,counterReducer}