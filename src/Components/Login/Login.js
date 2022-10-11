import './login.scss'
import {Link} from 'react-router-dom'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginFailure, loginStart, loginSuccess} from '../../redux/userRedux'
import axios from 'axios'
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.currentUser);
  const error = useSelector((state) => state.error);

  const handleClick = async(e) => {
    e.preventDefault();
    dispatch(loginStart());
  try {
    const res = await axios.post("http://localhost:8800/api/auth/login", {email, password});
    dispatch(loginSuccess(res.data));
    console.log(res.data.isAdmin)
    { res.data.isAdmin ? navigate('/admi')  : navigate(`/admin`) }
  } catch (err) {
    dispatch(loginFailure('wrong credentials'));
  }
  };

  return (
    <form className='login-form'>
        <h1>LOGIN</h1>
        <label htmlFor='email'>Email Id</label>
        <input type='email' id='email' onChange={(e) => setEmail(e.target.value)}></input>
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' onChange={(e) => setPassword(e.target.value)}></input>
        <button onClick={handleClick} > Login </button>
        { error && <p>{error}</p> }
        <p>Forget password</p>
        <p>Don't have an account<Link to='/signup'>Sign up</Link></p>
    </form>
  )
}

export default Login