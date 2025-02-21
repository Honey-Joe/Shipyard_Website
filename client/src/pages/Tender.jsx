import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Tender = () => {
  const {tenderData,setTenderData} = useContext(AppContext)
  console.log(tenderData);
  return (
    <div className=' sm:px-[10%] px-6 pt-28 pb-20'>
      <div>
        <div>
          <p>All tenders</p>
        </div>
        <div>
          {
            tenderData.map((e,index)=>(
              <div key={index}>
                <p>{e.name}</p>
                <p>{e.deadline}</p>
                <p>{e.status}</p>
                <p>{e.description}</p>
              </div>
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Tender