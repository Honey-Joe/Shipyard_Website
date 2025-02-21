import React from 'react'

const ServiceCard = ({img, des, service, id}) => {
  return (
    <div>
        <div className=' p-4 bg-gray-50 rounded-lg shadow-lg hover:shadow-2xl'>
            <img src={img} alt="Service Image" className='' />
            <p>{service}</p>
        </div>
    </div>
  )
}

export default ServiceCard