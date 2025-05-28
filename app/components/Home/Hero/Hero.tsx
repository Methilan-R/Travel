import React from 'react'
 
const Hero = () => {
  return (
    <div className='relative w-full h-[120vh]'>
        {/*Overlay */}
      <div className='absolute top-0 left-0 w-full h-full bg-gray-800 opacity-70'></div>
      <video src="/asset/hero1.mp4"
      autoPlay 
      muted 
      loop preload='metadata'
      className='w-full h-full object-cover
      '/>
      {/*Text Content */}
      <div className="absolute z-[100] w-full h-full top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
        <div className="flex items-center justify-center flex-col w-full h-full">
          <div>
            <h1 className="text-[25px] mb-4 md:mb-0 text-center md:text-[35px] lg:text-[45px] tracking-[0.7rem]
            text-white font-bold uppercase">Let's Enjoy The Nature</h1>
            <p className='md:text-base text-center text-lg text-white font-normal [word-spacing:5px]'>Get the best prices on 2,00,000+ properties,worldwide</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
