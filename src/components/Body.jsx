import React from 'react'
import SideBar from './SideBar'
import MainContainer from './MainContainer'
import { Route, Routes } from 'react-router-dom'
import WatchPage from './WatchPage'
import SearchPage from './SearchPage'
import User from './User'

const Body = () => {
  return (
    <div className='flex'>
        <SideBar />
        <Routes>
          <Route path='/' element = {<MainContainer />} />
          <Route path='/watch' element = {<WatchPage />} />
          <Route path='/search' element = {<SearchPage />} />
          <Route path = "/user" element = {<User/>} /> 
        </Routes>
    </div>
  )
}

export default Body




