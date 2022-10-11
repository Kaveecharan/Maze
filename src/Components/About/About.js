import './about.scss'
import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faFloppyDisk, faGear, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios'
import { logout, userUpdate } from "../../redux/userRedux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const About = ({user}) => {
  const [_id, set_Id] = useState(user._id)
  const profileUserId = useSelector((state) => state.currentUser._id);
  const admin = useSelector((state) => state.currentUser.isAdmin);
  const [username, setUsername] = useState(user.username)
  const [email, setEmail] = useState(user.email)
  const [position, setPosition] = useState(user.position)
  const [password, setPassword] = useState('')
  const [confirmDelete, setConfirmDelete] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isEdit, setIsEdit] = useState(false)
  const changeChecker = profileUserId === user._id
  const editChecker = profileUserId === user._id || admin

  
  const deleteUser=async(e)=>{
    e.preventDefault()
    toast.error('User deleted', {position: toast.POSITION.BOTTOM_RIGHT, autoClose: 500})
    try{
      await axios.delete(`http://localhost:8800/api/users/${user._id}`);
    }catch(err){console.log(err)}
    dispatch(logout());
    {changeChecker ? navigate('/') : navigate(`/users`)}
    
  }

  const formEditHandler=(e)=>{
    e.preventDefault()
    setIsEdit(!isEdit)
  }

  const formSubmitHandler=async(e)=>{
    e.preventDefault()
    toast.success('User updated', {position: toast.POSITION.BOTTOM_RIGHT,  autoClose: 500})
    const userDetails ={
      _id: _id,
      username: username,
      email: email,
      position: position,
      passwrod: password
    }

    try{
      await axios.put(`http://localhost:8800/api/users/${user._id}`, userDetails)
    }catch(err){console.log(err)}

    {changeChecker && dispatch(userUpdate(userDetails))}
    {!changeChecker && navigate(`/users`)}

    setIsEdit(false)
  }

  return (
    <div className='about-container'>
      <form className='about-details'>
        <div className='about-detail'>
        <h2> About </h2>
        <label>Username</label>
        { isEdit ? <input value={username} onChange={(e)=>setUsername(e.target.value)} /> : <p>{user.username}</p>}
        <label>Position</label>
        { isEdit ? <input value={position} onChange={(e)=>setPosition(e.target.value)} /> : <p>{user.position}</p>}
        <label>Email Id</label>
        { isEdit ? <input value={email}  onChange={(e)=>setEmail(e.target.value)} /> : <p>{user.email}</p>}
        <label>Password</label>
        { isEdit ? <input password={password}  onChange={(e)=>setPassword(e.target.value)} /> : <p>******</p>}
        </div>

        { editChecker && <button type='button' className='edit-btn'   onClick={formEditHandler}  >
            { isEdit ? <FontAwesomeIcon icon={faClose} className='faIcon'/>
            : <FontAwesomeIcon icon={faGear} className='faIcon' /> } </button> }
        { isEdit && <button type='submit' className='edit-btn' onClick={formSubmitHandler}>
            <FontAwesomeIcon icon={faFloppyDisk} className='faIcon'/> </button> }

        <div className='delete-div'>
        {editChecker && <h2 className='delete-btn' onClick={()=>setConfirmDelete(!confirmDelete)}>
          {confirmDelete ? 'Cancel' : 'Delete Account'}</h2>} 
        { confirmDelete && <h2 onClick={deleteUser} className='dlt-cnfrm'>Confirm</h2>}

        </div>
        
      </form>
      <div className='users-div'>
        <h2 onClick={()=> navigate('/users')}>All users</h2>
      </div>
        <ToastContainer />
    </div>
  )
}

export default About