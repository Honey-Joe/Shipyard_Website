import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'

const UserManagement = () => {
  const{tenderAppData} = useContext(AdminContext)
  console.log(tenderAppData)
  return (
    <div>

      {
        tenderAppData.map((e)=>{
          return(
            <>
            {e.name}
            </>
          )
        })
      }
    </div>
  )
}

export default UserManagement