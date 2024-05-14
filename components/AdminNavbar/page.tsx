import Link from 'next/link'
import React from 'react'
import logo from '../../public/logo.svg'
import Image from 'next/image'

function AdminNavbar() {

 const dates = new Date();
    const futureDate = dates.getDate();
    dates.setDate(futureDate);
    const defaultDate = dates.toLocaleDateString('en-CA');
  return (
    <div>
    <div className='admin-navbar'>
      <Link className="btn btn-ghost text-xl" href='/'>
        <Image style={{height: 'auto'}} priority src={logo} width={180} alt='logo'/>
        </Link>
     <label className="input input-bordered flex items-center gap-2 bg-white max-md:hidden">
      <svg width={12} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
     <input type="text" className="grow" placeholder="Search" />
     </label>
      <input type="date" defaultValue={defaultDate} className="btn" placeholder="" />
    </div>
    </div>
  )
}

export default AdminNavbar
