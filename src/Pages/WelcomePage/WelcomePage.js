import './welcomePage.scss'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import Loader from 'react-loaders'

const WelcomePage = () => {
  return (
    <>
    <div className='welcome-page-container'>
      <Sidebar/>
      <Outlet/>
    </div>
    <Loader type="pacman"/>
    </>
  )
}

export default WelcomePage