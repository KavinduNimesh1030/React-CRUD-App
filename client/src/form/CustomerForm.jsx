import React, { useEffect, useState } from 'react'
import './customerForm.css'
import { Avatar, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import Grid from '@mui/material/Grid'; // Grid version 1
import { Box, Stack } from '@mui/system';
import { useRef } from 'react';
import Axios from 'axios';


export const CustomerForm = () => {
  const [salary,setSalary] = useState("");
  // const [course,setCourse] = useState("");
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [address,setAddress] = useState("");

  const [formDetails,setFormDatails]= useState("");

  const inputRef = useRef("Hello");

  useEffect(() => {
  inputRef.current.focus();
}, []);

//
  const handleonsubmit =(e)=>{
    e.preventDefault();
    
   //

    const formData ={
        firstName,
       lastName,
        address,
        salary,
       
    }
    alert("done..!");
    setFormDatails([...formDetails,formData])



}
// useEffect(()=>{
//   localStorage.setItem('formDetails',JSON.stringify(formDetails))
// },[formDetails])

  return (
    <div>
      <div id='outerDiv'>
      <form onSubmit={handleonsubmit} id='myform'>
      <h1 id='topic'>Customer Details</h1>
    <Grid className='mainGrid' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Box
   
    sx={{
      '& > :not(style)': { m: 3, width: '50ch' },
    }}
    noValidate
    autoComplete="off"
  >
 
  <Grid>
  <TextField id="outlined-basic" label="First Name" variant="outlined" name='firstName' ref={inputRef} onChange={e=>setFirstName(e.target.value)} value={firstName} />
  </Grid>
  <Grid >
  <TextField id="outlined-basic" label="Last Name" variant="outlined" name='lastName' onChange={e=>setLastName(e.target.value)} value={lastName} />
  </Grid>
  <Grid >
  <TextField id="outlined-basic" label="Address" variant="outlined" name='address' onChange={e=>setAddress(e.target.value)} value={address} />
  </Grid>

  <Grid >
  <TextField id="outlined-basic" label="Salary" variant="outlined" name='salary' onChange={e=>setSalary(e.target.value)} value={salary} />
  </Grid>

 

  <Grid >
  <Button variant="contained" type='submit' id='submit'>Save</Button>
  <Button variant="outlined" type='reset' id='reset'>Reset</Button>
  </Grid>
  </Box>

  
 
</Grid>
 
  </form>
            
    

    <div id='imageDiv'>
      <img  id='cusImg' src={require('../assets/cusImg2.jpg')} />
    </div>
      </div>
 </div>
  )
}
