import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-2'>
        <div>
            <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>Easy Exchange Policy</p>
            <p className='text-gray-400 '>We Offer Hassel Free exchange Policy</p>
        </div>
        <div>
            <img src={assets.product_icon} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>Easy Exchange Policy</p>
            <p className='text-gray-400 '>We Offer Hassel Free exchange Policy</p>
        </div>
        <div>
            <img src={assets.cust_icon} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>Easy Exchange Policy</p>
            <p className='text-gray-400 '>We Offer Hassel Free exchange Policy</p>
        </div>



    </div>
  )
}

export default OurPolicy