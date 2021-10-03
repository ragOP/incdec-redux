
const initialD={
    list:[]
}
const Todoreducers=(state=initialD,action)=>{

    switch(action.type){
        case "ADD" :
           const {id,data}=action.payload;


           return {
            ...state,
           list:[
                ...state.list,
                {
                data:data,
                id:id
            }
    ]
}

case "DELETE" :
  const newLits= state.list.filter((elem)=> elem.id !== action.id)
   


    return {
     ...state,
   list:newLits
}


    default :return state;
    }

}

export default Todoreducers;