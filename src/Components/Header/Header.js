import './header.scss'
import dp from '../../Assests/dp.jpg'
import cover from '../../Assests/cover.jpg'
import { useSelector } from "react-redux";

const Header = ({user}) => {

  return (
    <div className='header-container'>
        <img src={cover} alt='cover' className='cover-img'/>
        <div className='personal-detail'>
          <img src={dp} alt='dp' className='dp-img'/>
          <h2>{user.username}</h2>
          <p>{user._id}</p>
        </div>
    </div>
  )
}

export default Header