
import React, { useState } from "react";

import {Link} from 'react-router-dom';
import {Button,TextField,Stack,Alert} from '@mui/material';
import './Login.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Login()
{
    const navigate=useNavigate();
  const [name,setName]=useState();
  const [password,setpass]=useState();
  // const [p,setp]=useState();
  const [success,setSuccess]=useState(false);
  const [error,setError]=useState(false);
  // const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await axios.get('http://localhost:3001/user');
      const user = response.data.find((user) => user.Name === name);
     
      if (user) {
        if (user.Password === password) {
         alert("login success")
          navigate('/'); // Redirect to dashboard on successful login
          setError(false)
        } else {
          setSuccess(false);
          setError(true);
        }
      } else {
        setSuccess(false);
        setError(true);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle other errors if needed
    }
    console.log("hi");
  };
   
    return(
        <div className='bodyl'>

        <div className='bodybox'>

        
        <div className='dom'>
            
            <h1><span>LOGIN</span></h1>
            <br></br>
            <form className='f1'onSubmit={handleSubmit}>
            <TextField className='textfield' id="outlined-basic" label="USERNAME" variant="outlined" onChange={(e)=>{setName(e.target.value)}} />
            <br></br>
            
            <TextField hiddenlabel className='textfield' type="password" id="outlined-basic" label="PASSWORD" variant="outlined" onChange={(e)=>{setpass(e.target.value)}}/>
            <br></br>
            <div className='box2'>Forgot Password?</div>
            <br></br>
            {/* <Link to="/"> */}
            <Stack sx={{ width: '100%' }} spacing={2}>
      {error&&<Alert severity="warning">Wrong username and password!</Alert>}
      
    </Stack>
    <br></br>
            <Button className='rel' variant="contained" type="submit">LogIn</Button>
            {/* </Link> */}
            <br></br>
            <h4><small><span>OR</span></small></h4>
            <div>
                
            </div>
            <br></br>
            <div className='box1'>
                
                <span>Don't have an account?</span><Link to='/reg'><Button >REGISTER</Button> </Link>
                    {/* <div>
                        <Routes>

                        <Route exact path='/register' element={<Register/>}></Route>
                        
                        </Routes>
                    </div> */}


            </div>
            <br></br>
            </form>
        </div>
             
            
        </div>
        </div>
    );
}