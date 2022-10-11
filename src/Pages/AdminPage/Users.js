import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './adminPage.scss'
import dp from '../../Assests/dp.png'
import Pagination from './Pagination'
import { useNavigate } from "react-router-dom";

const Users = () => {

    const navigate = useNavigate()
    const [users, setUsers] = useState([])
    const [currentpage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(8)
    const [loading, setLoading] =useState(true)

    const lastPostIndex = currentpage * postPerPage
    const firstPostIndex = lastPostIndex - postPerPage

    const currentPosts = users.slice(firstPostIndex, lastPostIndex)

    useEffect(()=>{
        const fetchUsers=async()=>{
            try{
                const res = await axios.get("http://localhost:8800/api/users/");
                setUsers(res.data)
            }catch(err){ console.log(err)}
        }
        fetchUsers()
        setLoading(false)
    }, [])

    const userClick=(_id)=>{
        navigate(`/user/${_id}`)
    }

  return (<>
    <div className='app-users'>
        {loading && <h2 className='loading'>Loading...</h2> }
        {currentPosts.map((user)=>{
            const {username, position, _id} =user
            return(
                <div key={_id} className='app-user' onClick={()=>userClick(_id)}>
                    <img src={dp} className='user-dp' alt='user-dp'/>
                    <h2>{username}</h2>
                    <p>{position}</p>
                </div>
            )
        })}
    </div>
    
    <Pagination totalPosts={users.length}
    postPerPage={postPerPage}
    currentpage={currentpage}
    setCurrentPage={setCurrentPage}/>
  </>)
}

export default Users