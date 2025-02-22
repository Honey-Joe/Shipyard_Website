import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Navbar from './components/Navbar'
import SideNavbar from './components/SideNavbar'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import TenderApplication from './pages/TenderApplication'
import UserManagement from './pages/UserManagement'

const App = () => {
  const atoken = localStorage.getItem('aToken');
  return atoken? (
    <div className='bg-[#F8F9FD]'>
      <ToastContainer/>
      <Navbar/>
      <div className=' flex items-start'>
        <SideNavbar/>
        <Routes>
          <Route path='/admin-dashboard' element={<Dashboard/>} />
          <Route path='/all-tenders' element={<TenderApplication/>} />
          <Route path='/user-management' element={<UserManagement></UserManagement>} />
        </Routes>
      </div>
    </div>
  ):(<><Login></Login></>)
}

export default App