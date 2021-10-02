import { Button, Typography,Card } from '@mui/material'
import React,{useState} from 'react'

const Home = () => {
    const [value,setValue]=useState(0);

    const handle=()=>
    {
        setValue(value+1)
    }
    return (
       <>
       <Card sx={{ minWidth: 275 }} direction="row" alignItems="center" spacing={1}>
       <Button variant="outlined" size="medium" onClick={()=>setValue(value-1)}>+</Button>
      
       <Typography>{value}</Typography>
       <Button onClick={()=>handle()}>-</Button>
       </Card>
      

       </>
    )
}

export default Home
