import React from 'react'

const ServiceCard = ({img, des, service, id}) => {
  return (
    <div>
        <div className=' p-4 bg-gray-50 rounded-lg shadow-lg hover:shadow-2xl transition-all border-2'>
            <img src={img} alt="Service Image" className=' rounded-lg' />
            <p className=' font-[poppins] text-base md:text-lg font-bold pt-3'>{service}</p>
            <p className=' text-slate-700 py-2'>{des}</p>
            <div className=' flex items-center justify-center py-2'>
             <button className=' bg-[#FF6600] py-2 px-6 rounded-lg text-center hover:bg-white hover:text-[#FF6600] hover:border-[#ff6600] border text-white hover:-translate-y-2 transition-all'>Order Now</button>
            </div>
        </div>
    </div>
  )
}

export default ServiceCard