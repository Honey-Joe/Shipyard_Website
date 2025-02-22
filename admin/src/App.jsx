import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Navbar from './components/Navbar'
import SideNavbar from './components/SideNavbar'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <div className='bg-[#F8F9FD]'>
      <ToastContainer/>
      <Navbar/>
      <div className=' flex items-start'>
        <SideNavbar/>
        <Routes>
          <Route path='/admin-dashboard' element={<Dashboard/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App