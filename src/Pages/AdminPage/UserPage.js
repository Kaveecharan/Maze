import './adminPage.scss'
import Header from '../../Components/Header/Header'
import Topbar from '../../Components/Topbar/Topbar'
import Users from './Users'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import About from '../../Components/About/About';

const UserPage =()=>{
    const {id} = useParams()
    const [user, setUser] = useState({})

    useEffect(()=>{
        const fetchUsers=async()=>{
            try{
                const res = await axios.get(`http://localhost:8800/api/users/find/`+ id);
                setUser(res.data)
            }catch(err){ console.log(err)}
        }
        fetchUsers()
    }, [id])

    console.log(user, id)

return(<>
        <Topbar/>
        <Header user={user}/>
        <About user={user}/>
    </>
    )
}


export default UserPage