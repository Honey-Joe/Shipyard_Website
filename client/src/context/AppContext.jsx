import axios from 'axios';
import React, { createContext, useState ,useEffect} from 'react'
// import { teams } from '../assets/api/teams';

export const AppContext = createContext();

const AppContextProvider = (props) => {
    // const [team, setTeam] = useState([])
    const [tenderData, setTenderData] = useState([])
    const name = "SJC"
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [token , setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : false )
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

    const value = {
        name,
        backendUrl,
        token,
        setToken,
        tenderData,
        setTenderData,
        logout
    }
  return (
    <AppContext.Provider value={value}> 
        {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider