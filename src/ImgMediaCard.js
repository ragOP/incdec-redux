import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import {useSelector,useDispatch} from 'react-redux';
import { increment,decrement} from './action/index'
export default function ImgMediaCard() {
    const myState=useSelector((state)=>state.change)
   const dispatch = useDispatch()
  return (
    <Stack  direction="row" spacing={2}>

    <Button  onClick={()=>dispatch(increment())} variant="contained" color="success">
 +
    </Button>
    <Typography>{myState}</Typography>
    <Button  onClick={()=>dispatch(decrement())}variant="outlined" color="error">
     -
    </Button>
  </Stack>
  );
}