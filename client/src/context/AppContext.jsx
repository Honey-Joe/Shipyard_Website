import React, { createContext, useState } from 'react'
import { teams } from '../assets/api/teams';

export const AppContext = createContext();

const AppContextProvider = (props) => {
    // const [team, setTeam] = useState([])
    const name = "SJC"
    const backendUrl = import.meta.env.BASE_URL;
    const value = {
        name,
        backendUrl
    }
  return (
    <AppContext.Provider value={value}> 
        {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider