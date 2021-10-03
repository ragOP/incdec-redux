import {
  Typography,
  Button,
  Card,
  CardContent,
  TextField,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import './index.css'
import { useState } from "react";
import { add, dele, remove } from "./actions/index";
import { useDispatch, useSelector } from "react-redux";
const Todo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.Todoreducers.list);
  console.log(list)
  return (
    <>
      <div className="app-background" alignItems="center" justify="center">
        <CardContent>
          <Typography>Add it your List Here</Typography>

          <TextField
            id="outlined-basic"
            label="to-do"
            variant="outlined"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <Button className="add-button" 
            variant="contained"
            onClick={() => dispatch(add(input))}
          >
          
            Add{" "}
          </Button>
        </CardContent>
     
      <div className="task-container column"  alignItems="row">
        {list.map((elem) => {
          return (
              <div key={elem.id}>
              <h3>{elem.data}</h3>
              
              
              <DeleteForeverIcon onClick={() => dispatch(dele(input))} />
            </div >
          );
        })}
      </div>
      </div>
   
    </>
  );
};

export default Todo;
