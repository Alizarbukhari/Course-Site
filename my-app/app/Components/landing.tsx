import React from 'react'
import Button from './button'
import Image from 'next/image'

function Landing() {
  return (
    <div className="w-full h-[960px] relative">  
      <div className='w-full h-full relative'>
        <Image className='w-full h-full' src="/images/header.png" width={950} height={960} alt='header' />
        
        {/* Left side per content */}
        <div className='bg-[#FFEFD6] w-[50%] h-full absolute top-0 left-0'>
          <div className='mx-[80px]'>
            <h1 className='mt-[240px] text-[40px]'>Space Density</h1>
            <p>
              Space Density offers creative classes and events in a special location in front of Gyeonghuigung Palace. Come together to create new ideas.
            </p>
            <div className='mt-[450px]'>
              <Button color='#FF6016' title="What is Space Density?" />
            </div>  
          </div>
        </div>
        
        {/* Right side per Space Introduction */}
        <div className = ' absolute top-[210px] right-[230px]'>
          <div className=' bg-[#FFFFFF] w-[450px] h-[320px]   '>
            <h1 className='mt-[80px] text-[20px] ml-2'>Space Introduction</h1>
          </div>
          {/* <div> <p className='mt-[20px]'>
              Various classes offered at Space Density provide a new perspective for creation and growth. Experience a rich program including design, art, workshops, and more.
            </p></div> */}
        </div>
      </div>      
    </div>
  )
}

export default Landing
