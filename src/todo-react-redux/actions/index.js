export const add = (data) => {
  return {
    type: "ADD",
    payload:{
        id:new Date().getTime().toString(),
        data:data,
        
    }
  };
};

export const dele = (id) => {
  return {
    type: "DELETE",
    id
  };
};
export const remove = () => {
  return {
    type: "REMOVE",
  };
};
