import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {useState} from 'react'
import { useNavigate } from "react-router-dom";


const Signup = () => {
  
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confrimPassword, setConfirmPassword] = useState('')
  const navigate = useNavigate();
  const  [wrongPW, setWrongPW] = useState('')
  const pwcheck = password === confrimPassword
  console.log(pwcheck)

const signupHandler=async(e)=>{
  e.preventDefault()

const newUser = {
  username: username,
  email: email,
  password: password,
  confrimPassword: confrimPassword
}

  if(pwcheck){
    try{
    await axios.post("http://localhost:8800/api/auth/register", newUser);
    navigate("/");

  }catch(err){ setWrongPW(`Password doesn't match`) }
}else{setWrongPW(`Password doesn't match`) }
}


  return (
    <form className='login-form'>
        <h1>SIGNUP</h1>
        <label htmlFor='username'>Username</label>
        <input type='text' id='username' onChange={(e)=>setUsername(e.target.value)} ></input>
        <label htmlFor='email'>Email Id</label>
        <input type='email' id='email' onChange={(e)=>setEmail(e.target.value)} ></input>
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' onChange={(e)=>setPassword(e.target.value)} ></input>
        <label htmlFor='confirm-password'>Confirm Password</label>
        <input type='password' id='confirm-password' onChange={(e)=>setConfirmPassword(e.target.value)} ></input>
        <p>{wrongPW}</p>
        <button type='submit' onClick={signupHandler}>Signup</button>
        <p>Already have an account?<Link to='/'>Login</Link></p>
    </form>
  )
}

export default Signup