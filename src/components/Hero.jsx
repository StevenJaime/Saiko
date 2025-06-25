import React from 'react'

import Hero1 from '../assets/hero1.jpg'


const Hero = () => {
  return (
    <div className='flex py-5 gap-7'>

      <div className="lft-box flex w-[50%] items-center">
        <div className='pt-5 pb-6'>
          <span className='text-[16px] font-normal tracking-widest'>PERFECT FITNESS WEAR</span>
          <h2 className='text-7xl font-bold pb-4 leading-20'>
            TEAR & WEAR<br />
            ITS A FASHION
          </h2>
          <button className='rounded-full px-8 py-2 border-2 border-black bg-white'>SHOP NOW</button>
        </div>
      </div>

      <div className="right-box w-[75%] ">
        <img src={Hero1} alt="" className='w-full' />
      </div>
      
    </div>
  )
}

export default Hero