import React from 'react'
import Topbar from '../../Components/Topbar/Topbar'
import Header from '../../Components/Header/Header'
import About from '../../Components/About/About'
import { useSelector } from 'react-redux'

const HomePage = () => {
  const user = useSelector((state) => state.currentUser); 

  return (
    <>
    <Topbar user={user}/>
    <Header user={user}/>
    <About user={user}/>
    </>
  )
}

export default HomePage