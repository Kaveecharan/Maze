import './adminPage.scss'
import Header from '../../Components/Header/Header'
import Topbar from '../../Components/Topbar/Topbar'
import Users from './Users'
import { useSelector } from 'react-redux'

const AdminPage =()=>{
  const user = useSelector((state) => state.currentUser); 

    return(<>
        <Topbar user={user}/>
        <Header user={user} />
        <Users user={user}/>
    </>
    )
}


export default AdminPage