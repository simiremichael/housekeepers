import React from 'react'
import img1 from '../../public/img-1.png'
import img2 from '../../public/img-2.png'
import img3 from '../../public/img-3.png'
import img4 from '../../public/img-4.png'
import img5 from '../../public/img-5.png'
import img6 from '../../public/img-6.png'
import img7 from '../../public/img-7.png'
import img8 from '../../public/img-8.png'
import Image from 'next/image'

function ServiceContainer() {
  return (
    <div className='service-container bg-service-container'>                                                                                                                                                                                                                                                                                                                                                                                                                                         
      <div className='h-full w-full glass'>
        <div className='grid grid-cols-1 sm:grid-cols-2 mb-20'>
        <div>
        <h4 className='service-l-h text-base md:text-xl'>Service</h4>
        <p className='service-l-p sm:text-xl md:text-2xl lg:text-3xl'>Revamp Your Space With Our Assistance</p>
        </div>
        <div>
         <p className='service-r-p text-base md:text-xl max-sm:mt-4'>Our cleaning services bring a higher level of cleanliness to your space. We prioritize attention to detail and eco-friendly practices.</p>
           <div className="navbar-end mt-10">
           <a className="btn bg-navbar-btn navbar-btn">Book us now</a>
          </div>
        </div>
        </div>
        <div className='card-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
           <div className="card card-compact w-full h-60 sm:h-80 bg-card1 bg-base-100 shadow-xl rounded-t-md">
  <Image src={img1} className='h-full w-full rounded-t-md' alt="office cleaning" />
  <div className="card-body"> 
    <p className='text-center card-text'>Office Cleaning</p>
    </div>
  </div>
   <div className="card card-compact w-full h-60 sm:h-80 bg-card1 bg-base-100 shadow-xl rounded-t-md">
  <Image src={img2} className='h-full w-full rounded-t-md' alt="office cleaning" />
  <div className="card-body"> 
    <p className='text-center card-text'>Kitchen Cleaning</p>
    </div>
  </div>
   <div className="card card-compact w-full h-60 sm:h-80 bg-card1 bg-base-100 shadow-xl rounded-t-md">
  <Image src={img3} className='h-full w-full rounded-t-md' alt="office cleaning" />
  <div className="card-body"> 
    <p className='text-center card-text'>Furniture Cleaning</p>
    </div>
  </div>
   <div className="card card-compact w-full h-60 sm:h-80 bg-card1 bg-base-100 shadow-xl rounded-t-md">
  <Image src={img4} className='h-full w-full rounded-t-md' alt="office cleaning" />
  <div className="card-body"> 
    <p className='text-center card-text'>Apartment Cleaning</p>
    </div>
  </div>
   <div className="card card-compact w-full h-60 sm:h-80 bg-card1 bg-base-100 shadow-xl rounded-t-md">
  <Image src={img5} className='h-full w-full rounded-t-md' alt="office cleaning" />
  <div className="card-body"> 
    <p className='text-center card-text'>Rug Cleaning</p>
    </div>
  </div>
   <div className="card card-compact w-full h-60 sm:h-80 bg-card1 bg-base-100 shadow-xl rounded-t-md">
  <Image src={img6} className='h-full w-full rounded-t-md' alt="office cleaning" />
  <div className="card-body"> 
    <p className='text-center card-text'>Event Cleaning</p>
    </div>
  </div>
   <div className="card card-compact w-full h-60 sm:h-80 bg-card1 bg-base-100 shadow-xl rounded-t-md">
  <Image src={img7} className='h-full w-full rounded-t-md' alt="office cleaning" />
  <div className="card-body"> 
    <p className='text-center card-text'>Fumigation</p>
    </div>
  </div>
   <div className="card card-compact w-full h-60 sm:h-80 bg-card1 bg-base-100 shadow-xl rounded-t-md">
  <Image src={img8} className='h-full w-full rounded-t-md' alt="office cleaning" />
  <div className="card-body"> 
    <p className='text-center card-text'>Post Construction Cleaning</p>
    </div>
  </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceContainer
