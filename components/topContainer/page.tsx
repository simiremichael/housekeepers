"use client"
import Image from 'next/image'
import React from 'react'
import team from '../../public/Vector1.svg'
import clients from '../../public/Vector2.svg'
import completed from '../../public/Vector3.svg'

function TopContainer() {
  
  return (
    <div>
   <div className='w-full bg-image-gif md:h-top-container-h grid grid-cols-1 gap-4 md:grid-cols-2'>
      <div className='pt-20'>
       <h1 className='heading lg:text-4xl md:text-3xl max-md:mb-0 max-md:mt-0'>Professional <span className='heading-span max-md:mb-0 max-md:mt-0 lg:text-4xl md:text-3xl'>Cleaning Service Provider</span></h1>
      <p className='para pt-4 max-sm:text-base'>Elevating spaces into sanctuaries of cleanliness</p>
      <div className="pt-10">
    <a className="btn bg-navbar-btn topContainer-btn">Book now</a>
  </div>
      </div>
      <div className='flex w-full justify-center lg:ml-10'>
       <div className='top-image-container-1 md:h-top-image-h md:w-top-image-w'>
       </div>
       <div className='flex-auto lg:ml-10'>
       <div className='top-office-container md:h-top-office-h md:w-top-office-w'>
       </div>
       <div className='top-desk-container bg-top-desk-container'>
       </div>
       </div>
      </div>
    </div>
    <div className='top-container-bottom bg-top-container-bottom grid md:grid-cols-4 max-md:grid-cols-2'>
      <h6 className='items md:text-base'>Office Cleaning</h6>
      <h6 className='items md:text-base'>Furniture Cleaning</h6>
      <h6 className='items md:text-base'>Apartment Cleaning</h6>
      <h6 className='items md:text-base'>Event Cleaning</h6>
    </div>
    <div className='top-container-bottom-1 bg-top-container-bottom-1 flex items-center justify-around'>
      <div  className='flex-col justify-center items-center'>
        <div className='icon-container md:w-24 md:h-24 justify-center items-center flex m-auto'>
         <Image src={team} alt='icon' />
        </div>
        <h3 className='text-center md:text-2xl text-heading mt-2'>30+</h3>
        <p className='text-center md:text-lg text-para mt-2'>Expert Team</p>
      </div>
      <div  className='flex-col justify-around items-center'>
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
