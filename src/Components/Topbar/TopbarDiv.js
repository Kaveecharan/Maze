import './topbar.scss'
import { logout } from "../../redux/userRedux";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

const TopbarDiv = ({showDiv, location}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {center, bottom} = location
    
const logoutHandler=()=>{
    try{
      dispatch(logout())
      navigate('/')
    }
    catch(err){console.log(err)}
    
  }

  return (<>
    { showDiv && <div className='topbar-div'  style={{ left : `${center}px`, top: `${bottom}px` }}>
        <h2 onClick={logoutHandler}>Logout</h2>
    </div>}
  </>)
}

export default TopbarDiv