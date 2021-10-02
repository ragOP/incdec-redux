const initialState=7;
export const change=(state=initialState, action)=>{
    switch(action.type)
    {
        case "INCREMENT": return state + 1;
        case "DECREMENT": return state - 1;
        default: return state;



    }
}

