import Image from 'next/image'
import React from 'react'
import processIcon1 from '../../public/process-icon1.png'
import processIcon2 from '../../public/process-icon2.png'
import processIcon3 from '../../public/process-icon3.png'
import processIcon4 from '../../public/process-icon4.png'

function ProcessContainer() {
  return (
    <div className='process-container'>
     <div className='inner-process-container'>
        <div className='process-heading-container sm:pl-process-heading-container md:pl-process-heading-container-ls'>
        <h3 className='process-h md:text-xl'>The Process</h3>
        <p className='process-p md:text-2xl'>Here's How it Works</p>
        </div>
    <div className='proces-diagram-container sm:flex-row'>
        <div className='diagram-container'>
            <div className='process-diagram-inner sm:w-16 sm:h-16 md:w-28 md:h-28 sm:p-4'>
         <Image src={processIcon1} alt='process-icon' />
         <div className='figure sm:mt-0 md:ml-28 sm:ml-16 sm:w-6 sm:h-6 md:w-9 md:h-9'><span className='text-xs font-bold sm:text-sm'>1</span></div>
         </div> 
         <p className='process-text sm:ml-0 sm:mt-6 md:text-lg'>Make Booking</p>
        </div>
        <div className='process-divider sm:h-0 sm:ml-0 sm:w-28 sm:mt-8 md:mt-14'></div>
        <div className='diagram-container'>
            <div className='process-diagram-inner sm:w-16 s sm:h-16 md:w-28 md:h-28 sm:p-4'>
         <Image src={processIcon2} alt='process-icon' />
         <div className='figure sm:mt-0 md:ml-28 sm:ml-16 sm:w-6 sm:h-6 md:w-9 md:h-9'><span className='text-xs font-bold sm:text-sm'>2</span></div>
         </div>
         <p className='process-text sm:ml-0 sm:mt-6 md:text-lg'>Team Arrives</p>
        </div>
        <div className='process-divider sm:h-0 sm:ml-0 sm:w-28 sm:mt-8 md:mt-14'></div>
        <div className='diagram-container'>
            <div className='process-diagram-inner sm:w-16 sm:h-16 md:w-28 md:h-28 sm:p-4'>
          <Image src={processIcon3} alt='process-icon' />
          <div className='figure sm:mt-0 md:ml-28 sm:ml-16 sm:w-6 sm:h-6 md:w-9 md:h-9'><span className='text-xs font-bold sm:text-sm'>3</span></div>
          </div>
          <p className='process-text sm:ml-0 sm:mt-6 md:text-lg'>Cleaning Process</p>
        </div>
        <div className='process-divider sm:h-0 sm:w-28 sm:ml-0 sm:mt-8 md:mt-14'></div>
        <div className='diagram-container'>
            <div className='process-diagram-inner sm:w-16 sm:h-16 md:w-28 md:h-28 sm:p-4'>
         <Image src={processIcon4} alt='process-icon' />
         <div className='figure sm:mt-0 md:ml-28 sm:ml-16 sm:w-6 sm:h-6 md:w-9 md:h-9'><span className='text-xs font-bold sm:text-sm'>4</span></div>
         </div>
         <p className='process-text sm:ml-0 sm:mt-6 md:text-lg'>Final Result</p>
        </div>
    </div>
     </div>
    </div>
  )
}

export default ProcessContainer
