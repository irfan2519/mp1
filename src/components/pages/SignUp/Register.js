import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './index1.scss';
import history from "../../../helpers/history";

function Register() {
    const [state,setState]=useState(
        {
        Firstname: '',
        Lastname: '',
        Username:'',
        Password:'',

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
        const {Firstname,Lastname,Username,Password}=state;
        console.log('Firstname:',Firstname);
        console.log('Lastname',Lastname);
        console.log('username:',Username);
        console.log('password',Password);
        history.push("/");


    }
    const{Firstname,Lastname,Username,Password}=state;
    return (
        <div className="Sign up-form">
            <div className='signup'>
            <center><label><h1>Sign up</h1></label></center>
            <center><label for='Firstname'>Firstname</label><input
                type="text"
                value={Firstname}
                
                onChange={(event)=>handleChange(event,"Firstname")}
                /></center>
            <center><label for='Lastname'>Lastname</label><input
                type="text"
                value={Lastname}
            
                onChange={(event)=>handleChange(event,'Lastname')}
                /></center>
            <center><label for='Username'>Username</label><input
                type="text"
                value={Username}
                
                onChange={(event)=>handleChange(event,"Username")}
                /></center>
            <center><label for='Password'>Password</label><input
                type="Password"
                value={Password}
               
                onChange={(event)=>handleChange(event,'Password')}
                /></center>
                <center><button type="submit" onClick={ () =>handleSubmit()}>Signup</button></center>
                <center><Link to="/">Already registered...LogIn</Link></center>
            

</div>
            
        </div>
    )
}
    


export default Register  ;