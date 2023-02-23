
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import cookies from "browser-cookies";
import { v4 as uuidv4 } from "uuid";
import history from "../../../helpers/history";
import './index.scss';

function Login() {
    const [state,setState]=useState(
        {
        username: '',
        password: '',

    }
)
    const handleChange=(event,id)=>{
        console.log('event:',event.target.value,id);
        setState({
            ...state,
            [id]:event.target.value
        })
    }
    const handleSubmit=()=>{
        const {username,password}=state;
        const token = uuidv4();
        if (token) {
            console.log("token: ", token);
      
            cookies.set("token", token);
            history.push("/home");
        }

        // console.log('username:',username);
        // console.log('password',password);

    }
    const{username,password}=state;
    return (
       
       <div className="login-form">
        <div className='login'>
        <center><label><h1>LOGIN</h1></label></center>
            <center><label for =" Username" >Username</label> 
                <input
                type="text"
                value={username}
                onChange={(event)=>handleChange(event,"username")}
                /></center><br></br>
            <center><label for =" Password" >Password</label><input
                type="password"
                value={password}
                onChange={(event)=>handleChange(event,'password')}
                /></center><br></br>
            <center><button type="submit" onClick={ () =>handleSubmit()}>Login</button></center>
           
            <center><Link to="./Register">Don't have an account.Register here</Link></center>

      
            </div>  
           


            
        </div>
    )
}

    


export default Login;