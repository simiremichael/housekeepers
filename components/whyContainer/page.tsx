import React from 'react'
import whyBig from '../../public/why-big.png'
import Image from 'next/image'

function WhyContainer() {
  return (
    <div className='why-container grid grid-cols-1 sm:grid-cols-2'>
      <div className='why-left-container'>
      <Image src={whyBig} alt='clean   up' className=' sm:min-w-full rounded-3xl' />
      <div className='z-30 absolute sm:ml-why-small-img -mt-24 sm:-mt-28 why-small-img bg-why-small-img w-20 h-24 max-w-24 sm:h-28'></div>
      </div>
      <div className='why-right-container md:ml-why-right-container'>
       <h3 className='why-h mt-5'>Why Choose Us</h3>
       <p className='why-p mt-3'>The Expertise You Can Trust</p>
       <ul className='why-list-container mt-3'>
        <li className='flex mb-1'>
            <svg fill='#0A86B6' style={{marginRight: 10}} width={14} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>
            <span className='why-span'>Professional Excellence</span></li>
        <li className='flex mb-1'>
             <svg fill='#0A86B6' style={{marginRight: 10}} width={14} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>
            <span className='why-span'>Customized Solution</span></li>
        <li className='flex mb-1'>
             <svg fill='#0A86B6' style={{marginRight: 10}} width={14} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>
           <span className='why-span'>Affordable Pricing</span></li>
        <li className='flex mb-1'>
             <svg fill='#0A86B6' style={{marginRight: 10}} width={14} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>
           <span className='why-span'>Time Management</span></li>
       </ul>
      </div>
    </div>
  )
}

export default WhyContainer
