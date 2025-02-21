import React, { createContext, useState } from 'react'
import { teams } from '../assets/api/teams';

export const AppContext = createContext();

const AppContextProvider = (props) => {
    // const [team, setTeam] = useState([])
    const name = "SJC"

    const value = {
        name,
    }
  return (
    <AppContext.Provider value={value}> 
        {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider