import React, { useState } from 'react'
import { createContext } from "react"
import axios from 'axios'
import { toast } from 'react-toastify'

export const AdminContext = createContext()
const AdminContextProvider = (props) => {

  const [userData, setUserData] = useState([])

  const [aToken, setAToken] = useState(localStorage.getItem('aToken') ? localStorage.getItem('aToken') : '')

  const backendUrl = import.meta.env.VITE_BACKEND_URL

  const getUserData = async () => {
    try {

      const {data} = await axios.get(backendUrl + '/api/admin/user', {
        headers: {
          Authorization: `Bearer ${aToken}`
        }
      })

      setUserData(data.data)

      toast.success(data.message)
      
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  }

    name = "sjc"
    const value = {
        name,
        aToken,
        setAToken,
        backendUrl,
        setUserData,
        userData,
        getUserData
    }

  return (
    <AdminContext.Provider value={value}>
        {props.children} 
    </AdminContext.Provider>
  )
}

export default AdminContextProvider