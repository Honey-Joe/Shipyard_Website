import axios from 'axios';
<<<<<<< HEAD
import React, { createContext, useState ,useEffect} from 'react'
=======
import React, { createContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
>>>>>>> 9e479ff77fa26fc4c5b8bb95b45ee21cf07b8ed7
// import { teams } from '../assets/api/teams';

export const AppContext = createContext();

const AppContextProvider = (props) => {
<<<<<<< HEAD
    // const [team, setTeam] = useState([])
    const [tenderData, setTenderData] = useState([])
    const name = "SJC"
=======

    // const [team, setTeam] = useState([])
    const [tenderData, setTenderData] = useState([])
>>>>>>> 9e479ff77fa26fc4c5b8bb95b45ee21cf07b8ed7
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [token , setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : false )
    const [userdata, setUserdata] = useState(false)
    
    const logout =()=>{
        localStorage.removeItem('token')
        setToken(false)
    }
    const gettenderData = async () => {
        try {
            const response = await axios.get(`${backendUrl}/api/tenders`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,	
                },
            });
            
            console.log(response.data);  
            setTenderData(response.data)
        } catch (error) {
            console.error("Error:", error);
        }
    }
    useEffect(() => {  
        gettenderData()

    }, [])

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
<<<<<<< HEAD
=======
        logout,
        userdata,
        setUserdata,
        getUserData,
>>>>>>> 9e479ff77fa26fc4c5b8bb95b45ee21cf07b8ed7
        tenderData,
        setTenderData,
        logout
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