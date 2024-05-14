import AdminNavbar from '@/components/AdminNavbar/page'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import drawer1 from '../../public/drawer-icon1.png'
import drawer2 from '../../public/drawer-icon2.png'
import cardIcon1 from '../../public/admin-card-icon1.png'
import cardIcon2 from '../../public/admin-card-icon2.png'
import cardIcon3 from '../../public/admin-card-icon3.png'

function page() {
  return (
    <div className='admin-container relative'>
        <AdminNavbar />
        <div className='admin-body-container md:grid md:grid-cols-6'>
            <div className='flex items-center drawer-search-container max-md:mt-3 md:hidden'>
            <div className="drawer md:hidden w-2/6">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    <label htmlFor="my-drawer" className="btn  drawer-button"><svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg></label>
  </div> 
  <div className="drawer-side ">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-3/6 min-h-full drawer-container-sm text-base-content">
      <li className='text-white'><Link href=''><Image src={drawer1} className='w-4 mr-2' alt='icon'  />Dashboard</Link></li>
      <li className='text-white'><Link href=''><Image src={drawer2} className='w-4 mr-2' alt='icon'  />Availability</Link></li>
    </ul>
  </div>
</div>
 <div className='search-m-container md:hidden w-full'>
     <label className="input input-bordered flex items-center gap-2 bg-white">
      <svg width={12} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
     <input type="text" className="grow" placeholder="Search" />
     </label>
    </div>
</div>
  <div className='drawer-container-lg max-md:hidden pt-3'> 
      <ul className="menu p-4 min-h-full text-base-content">
      <li className='text-white'><Link className='text-white' href=''><Image src={drawer1} className='w-4 mr-2' alt='icon'  />Dashboard</Link></li>
      <li className='text-white'><Link className='text-white' href=''><Image src={drawer2} className='w-4 mr-2' alt='icon'  />Availability</Link></li>
    </ul>
    </div>
    <div className='admin-main-content-container col-span-5'>
     <h1 className='border-b-gray border-b-2 w-20 max-md:mt-5'>Dashboard</h1>
     <div className='admin-card-container flex md:gap-4 gap-2 mt-4'>
       <div className='admin-card bg-white flex items-center justify-center md:h-32'>
        <h2 className='admin-card-figure font-bold md:mb-4 md:text-xl lg:text-2xl'>34</h2>
        <p className='admin-card-text md:text-base'>New Bookings</p>
        <Image src={cardIcon1} className=' max-md:w-3 mt-2 admin-card-icon absolute md:-mt-12 md:mr-3 lg:mr-16' alt='icon' />
       </div>
        <div className='admin-card bg-white flex items-center justify-center md:h-32'>
        <h2 className='admin-card-figure font-bold md:mb-4 md:text-xl lg:text-2xl'>34</h2>
        <p className='admin-card-text md:text-base'>Upcoming Appointments</p>
        <Image src={cardIcon2} className='max-md:w-6 admin-card-icon absolute md:-mt-12 md:mr-3 lg:mr-16' alt='icon' />
       </div>
        <div className='admin-card bg-white flex items-center justify-center md:h-32'>
        <h2 className='admin-card-figure font-bold md:mb-4 md:text-xl lg:text-2xl'><span className='mr-1'>₦</span>34</h2>
        <p className='admin-card-text md:text-base'>Revenue</p>
        <Image src={cardIcon3} className='max-md:w-6 admin-card-icon absolute md:-mt-12 md:mr-3 lg:mr-16 ' alt='icon' />
       </div>
     </div>
     </div>
     </div>
    </div>
  )
}

export default page
