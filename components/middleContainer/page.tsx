
import React from 'react'

function MiddleContainer() {
  return (
    <div className='middle-container bg-white'>
      <div className='big-frame-container grid grid-cols-1 md:grid-cols-2 pb-10'>
      <div className='right-container flex justify-center align-center'>
      <div className='big-frame bg-big-frame h-72 w-56 md:h-96 md:w-72'></div>
      <div className='small-frame bg-small-frame h-32 w-48 md:w-56 md:h-40 mt-10 md:mt-8 md:left-1/4'></div>
      <div className='little-frame bg-white h-24 mt-60 md:mt-little-frame w-36 flex-1 '>
        <h3 className='ml-3 mb-0 mt-2 little-frame-h'>5+</h3>
        <p className='ml-3 mt-0 little-frame-p'>Years Experience</p>
      </div>
      </div>
      <div className='left-container'>
       <div className='inner-container md:ml-16 lg:ml-4'>
        <h2 className='inner-about'>About Us</h2>
        <h3 className='inner-heading'>We Make Places Clean and Sparkle</h3>
        <p className='inner-para md:text-base lg:text-lg'>From home to offices, our experienced team employs
cutting edge techniques and top-quality products.
Transforming spaces into sanctuaries of cleanliness,
our meticulous cleaning services go beyond the
surface. With a keen eye for detail and eco-friendly
practices.</p>
<div className='mt-10'>
  <a href='/about' className='flex '>
<p className='inner-more'>Learn more </p>
<svg fill='#10536D' style={{width: '12px', marginLeft: 10, marginTop: 2}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
</a>
</div>
       </div>
      </div>
      </div>
    </div>
  )
}

export default MiddleContainer
