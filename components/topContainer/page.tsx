import Image from 'next/image'
import React from 'react'
import team from '../../public/Vector1.svg'
import clients from '../../public/Vector2.svg'
import completed from '../../public/Vector3.svg'
import Link from 'next/link'

function TopContainer() {
  
  return (
    <div>
   <div className='w-full bg-image-gif md:h-top-container-h grid grid-cols-1 gap-4 md:grid-cols-2'>
      <div className='pt-20 max-md:pt-10'>
       <h1 className='heading lg:text-4xl md:text-3xl max-md:mb-0 max-md:mt-0'>Professional <span className='heading-span max-md:mb-0 max-md:mt-0 lg:text-4xl md:text-3xl'>Cleaning Service Provider</span></h1>
      <p className='para pt-4 max-sm:text-base'>Elevating spaces into sanctuaries of cleanliness</p>
      <div className="pt-10">
     <Link href='/booking' className="btn bg-navbar-btn topContainer-btn">Book now</Link>
    </div>
      </div>
      <div className='flex w-full justify-center lg:ml-8'>
       <div className='top-image-container-1 md:h-top-image-h md:w-top-image-w'>
       </div>
       <div className='flex-auto lg:ml-8'>
       <div className='top-office-container md:h-top-office-h md:w-top-office-w'>
       </div>
       <div className='top-desk-container bg-top-desk-container'>
       </div>
       </div>
      </div>
    </div>
    <div className='top-container-bottom bg-top-container-bottom grid md:grid-cols-4 max-md:grid-cols-2'>
      <h6 className='items md:text-base flex items-center'>
        <svg width={14} fill=' #E3B510' className='mr-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M181.3 32.4c17.4 2.9 29.2 19.4 26.3 36.8L197.8 128h95.1l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3s29.2 19.4 26.3 36.8L357.8 128H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H347.1L325.8 320H384c17.7 0 32 14.3 32 32s-14.3 32-32 32H315.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l9.8-58.7H155.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8L90.2 384H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l21.3-128H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3zM187.1 192L165.8 320h95.1l21.3-128H187.1z"/></svg>
        Office Cleaning</h6>
      <h6 className='items md:text-base flex items-center'>
         <svg width={14} fill=' #E3B510' className='mr-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M181.3 32.4c17.4 2.9 29.2 19.4 26.3 36.8L197.8 128h95.1l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3s29.2 19.4 26.3 36.8L357.8 128H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H347.1L325.8 320H384c17.7 0 32 14.3 32 32s-14.3 32-32 32H315.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l9.8-58.7H155.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8L90.2 384H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l21.3-128H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3zM187.1 192L165.8 320h95.1l21.3-128H187.1z"/></svg>
        Furniture Cleaning</h6>
      <h6 className='items md:text-base flex items-center'>
         <svg width={14} fill=' #E3B510' className='mr-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M181.3 32.4c17.4 2.9 29.2 19.4 26.3 36.8L197.8 128h95.1l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3s29.2 19.4 26.3 36.8L357.8 128H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H347.1L325.8 320H384c17.7 0 32 14.3 32 32s-14.3 32-32 32H315.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l9.8-58.7H155.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8L90.2 384H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l21.3-128H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3zM187.1 192L165.8 320h95.1l21.3-128H187.1z"/></svg>
        Apartment Cleaning</h6>
      <h6 className='items md:text-base flex items-center'>
         <svg width={14} fill=' #E3B510' className='mr-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M181.3 32.4c17.4 2.9 29.2 19.4 26.3 36.8L197.8 128h95.1l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3s29.2 19.4 26.3 36.8L357.8 128H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H347.1L325.8 320H384c17.7 0 32 14.3 32 32s-14.3 32-32 32H315.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l9.8-58.7H155.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8L90.2 384H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l21.3-128H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3zM187.1 192L165.8 320h95.1l21.3-128H187.1z"/></svg>
        Event Cleaning</h6>
    </div>
    <div className='top-container-bottom-1 bg-top-container-bottom-1 flex items-center justify-around'>
      <div  className='flex-col justify-center items-center'>
        <div className='icon-container md:w-24 md:h-24 justify-center items-center flex m-auto'>
         <Image src={team} alt='icon' />
        </div>
        <h3 className='text-center md:text-2xl text-heading mt-2'>30+</h3>
        <p className='text-center md:text-lg text-para mt-2'>Expert Team</p>
      </div>
      <div  className='flex-col justify-around items-center' style={{marginRight: '-5%'}}>
        <div className='icon-container md:w-24 md:h-24 justify-center items-center flex m-auto'>
        <Image src={clients} alt='icon' />
        </div>
        <h3 className='text-center md:text-2xl  text-heading mt-2'>50+</h3>
        <p className='text-center md:text-lg text-para mt-2'>Happy Clients</p>
      </div>
      <div  className='flex-col justify-center items-center'>
        <div className='icon-container md:w-24 md:h-24 justify-center items-center flex m-auto'>
          <Image src={completed} alt='icon' />
        </div>
        <h3 className='text-center md:text-2xl  text-heading mt-2'>90+</h3>
        <p className='text-center md:text-lg text-para mt-2'>Cleaning Completed</p>
      </div>
    </div>
    </div>
  )
}

export default TopContainer
