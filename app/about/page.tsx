import Footer from '@/components/footer/page'
import Navbar from '@/components/navbar/page'
import React from 'react'
import Image from 'next/image'
import icon1 from '../../public/about-icon1.png'
import icon2 from '../../public/about-icon2.png'
import icon3 from '../../public/about-icon3.png'
import icon4 from '../../public/about-icon4.png'

function page() {
  return (
    <div className='about-container'>
        <Navbar />
        <div >
   <div className='w-full about-bg md:h-top-container-h grid grid-cols-1 gap-4 md:grid-cols-2'>
      <div className='pt-20 max-md:pt-10'>
       <h1 className='about-heading lg:text-4xl md:text-3xl max-md:mb-0 max-md:mt-0'>Trusted and <span className='about-heading-span max-md:mb-0 max-md:mt-0 lg:text-4xl md:text-3xl'>Reliable Cleaning Services</span></h1>
      <p className='about-para pt-4 max-sm:text-base'>We are premier cleaning services in your local area. We offer reliable and high-quality cleaning services across the city.</p>
      <div className="pt-10">
    <a className="btn bg-navbar-btn topContainer-btn">Book now</a>
  </div>
      </div>
      <div className='flex w-full justify-center lg:ml-8'>
       <div className='about-img-big md:h-top-image-h md:w-top-image-w'>
       </div>
       <div className='flex-auto lg:ml-8'>
       <div className='about-img-mid md:h-top-office-h md:w-top-office-w'>
       </div>
       <div className='about-img-sm bg-top-desk-container'>
       </div>
       </div>
      </div>
    </div>
     <div className='about-middle-container'>
       <div className='about-middle-inner-container grid grid-cols-2 max-md:grid-cols-1'>
       <div className='about-middle-inner-l grid grid-cols-2 gap-2'>
        <div className='about-card lg:w-48 lg:h-40 flex flex-col justify-center items-center'>
          <div className='about-card-icon-container'>
          <Image src={icon1} alt='icon' />
          </div>
          <h3 className='about-card-figure'>45+</h3>
           <p className='about-card-para'>Project finished</p>
        </div>

         <div className='about-card lg:w-48 lg:h-40  flex flex-col justify-center items-center'>
          <div className='about-card-icon-container'>
          <Image src={icon2} alt='icon' />
          </div>
          <h3 className='about-card-figure'>5+</h3>
           <p className='about-card-para'>Years of experience</p>
        </div>
         <div className='about-card lg:w-48 lg:h-40  flex flex-col justify-center items-center'>
          <div className='about-card-icon-container'>
          <Image src={icon3} alt='icon' />
          </div>
          <h3 className='about-card-figure'>10+</h3>
           <p className='about-card-para'>Happy customers</p>
        </div>
         <div className='about-card lg:w-48 lg:h-40  flex flex-col justify-center items-center'>
          <div className='about-card-icon-container'>
          <Image src={icon4} alt='icon' />
          </div>
          <h3 className='about-card-figure'>55+</h3>
           <p className='about-card-para'>Professionals</p>
        </div>
       </div>
       <div className='about-middle-inner-r'>
        <div className='about-middle-inner-r-text-container'>
          <h3
          className='about-middle-r-h'>We Are The Fastest Growing Cleaning Companies</h3>
         <p className='about-middle-r-text'>Our cleaning services is growing quickly. We
provide excellent service that keeps customers
coming back. Our staff work hard to keep your
home and office clean. You can trust us to do
the right job. We use eco-friendly products
so you can have a clean home without harsh
chemicals. We would love to have you as a new
customers.</p>
        </div>
       </div>
       </div>
      </div>
      <div className='middle-container'>
      <div className='big-frame-container grid grid-cols-1 md:grid-cols-2 pb-10'>
      <div className='left-container'>
       <div className='inner-container md:ml-16 lg:ml-4'>
        {/* <h2 className='innter-about'>About Us</h2> */}
        <h3 className='inner-heading'>We Make Cleaning Easier and More Convenient </h3>
        <p className='inner-para md:text-base lg:text-lg'>We offer convenient, professional cleaning services
to help make your life easier. Our experienced, trained
cleaners use top quality products and equipment's to
deliver thorough, efficient cleaning. We strike to provide
a hassle-free experience, with cleaners who are punctual,
reliable, and committed to exceptional results.
<br/>
<br/>
Whether you need a one time cleaning or a regular 
cleaning service, our professional team is here to meet
your needs. We offer flexible scheduling options and 
customizable cleaning plans to ensure that your home or
office is cleaned to your satisfaction
</p>
{/* <div className='mt-10'>
  <a href='/about' className='flex '>
<p className='inner-more'>Learn more </p>
<svg fill='#10536D' style={{width: '12px', marginLeft: 10, marginTop: 2}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
</a>
</div> */}
       </div>
      </div>
      <div className='about-bottom-inner-container flex justify-center align-center'>
      <div className='about-big-frame h-72 w-56 md:h-90 md:w-60 lg:h-96 lg:w-72'></div>
      <div className='about-small-frame h-32 w-48 md:w-56 md:h-40 mt-10 md:mt-8 md:left-3/4'></div>
      {/* <div className='little-frame bg-white h-24 mt-60 md:mt-little-frame w-36 flex-1 '>
        <h3 className='ml-3 mb-0 mt-2 little-frame-h'>5+</h3>
        <p className='ml-3 mt-0 little-frame-p'>Years Experience</p>
      </div> */}
      </div>
      </div>
    </div>
    </div>
    <Footer />
    </div>
  )
}

export default page
