"use client"
import Image from 'next/image'
import React from 'react'
import logo from '../../public/logo.svg'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Navbar() {

  const pathname = usePathname()

  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start max-sm:flex max-sm:justify-between max-sm:w-full">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link style={{textDecoration: 'none'}} className={`link ${pathname === '/about' ? 'active' : ''}`} href='/about'>About</Link></li>
        <li><Link style={{textDecoration: 'none'}} className={`link ${pathname === '/contact' ? 'active' : ''}`} href='/contact'>Contact Us</Link></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl" href='/'>
        <Image style={{height: 'auto'}} priority src={logo} width={180} alt='logo'/>
        </a>
  </div>
  <div className="navbar-start hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-sora">
      <li><Link style={{textDecoration: 'none', fontWeight: pathname === '/about' ? 'bold' : '' }} className={`link ${pathname === '/about' ? 'active' : ''}`} href='/about'>About</Link></li>
      <li><Link style={{textDecoration: 'none',  fontWeight: pathname === '/contact' ? 'bold' : ''}} className={`link ${pathname === '/contact' ? 'active' : ''}`} href='/contact'>Contact Us</Link></li>
    </ul>
  </div>
  <div className="navbar-end max-sm:hidden">
    <a className="btn bg-navbar-btn navbar-btn">Book us now</a>
  </div>
</div>
  )
}

export default Navbar
 