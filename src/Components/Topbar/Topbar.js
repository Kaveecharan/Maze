import './topbar.scss'
import logo from '../../Assests/M.png'
import TopbarDiv from './TopbarDiv'
import { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Topbar = () => {

  const navigate = useNavigate();
  const [showDiv, setShowDiv] = useState(false)
  const [location, setLocation] = useState({})
  const user = useSelector((state) => state.currentUser); 

  const logoutDivHandler=(e)=>{
    const temp = e.target.getBoundingClientRect()
    const center = (temp.left + temp.right - 100)/2
    const bottom = temp.bottom + 20
    openSubMenu({center, bottom})
  }

  const openSubMenu=(location)=>{
    setShowDiv(!showDiv)
    setLocation(location)
  }

  return (<>
    <div className='topbar-container'>
        <img src={logo} alt='logo' className='navbar-logo' onClick={()=> navigate(`/${user?._id}`)}/>
        <h2 onClick={logoutDivHandler}>{user?.username}</h2>
    </div>
    <TopbarDiv showDiv={showDiv} location={location}/>
    </>
  )
}

export default Topbar