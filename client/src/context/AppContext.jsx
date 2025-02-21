import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
// import { teams } from '../assets/api/teams';

export const AppContext = createContext();

const AppContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [token , setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : false )
    const [userdata, setUserdata] = useState(false)
    
    const logout =()=>{
        localStorage.removeItem('token')
        setToken(false)
    }

    // get user data 
    const getUserData = async () =>{
      try {  
            const res = await axios.get(backendUrl + '/api/users/profile' , {headers: {Authorization: `Bearer ${token}`}})
            if(res){
                setUserdata(res.data)
            }else{
                toast.error(data.message)
            }
          } catch (error) {
              console.log(error)
              toast.error("Failed to fetch user data")
          }
      }

    const value = {
        backendUrl,
        token,
        setToken,
        logout,
        userdata,
        setUserdata,
        getUserData
    }

    useEffect(()=>{
      if (token) {
          getUserData()
      }else{
          setUserdata(false)
      }

  },[token])
  return (
    <AppContext.Provider value={value}> 
        {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider