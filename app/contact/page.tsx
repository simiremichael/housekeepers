'use client'
import Footer from '@/components/footer/page'
import Navbar from '@/components/navbar/page'
import Link from 'next/link'
import React from 'react'
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/navigation'

function page() {

  const [formData, setFormData] = React.useState({name: '', email: '', phone: '', message: ''})

  const [alert, setAlert] = React.useState('')

  const router = useRouter()

   const sendMail = React.useRef();

  const sendEmail = (e:any) => {
    e.preventDefault();

    // @ts-ignore
    emailjs.sendForm('service_rj85u9b', 'template_08yurua', sendMail?.current, 'user_OjPcBuLBsMA0wASXXMw7Z')
      .then((result) => {
          console.log(result.text);
          setAlert(result.text);
      }, (error) => {
          console.log(error.text);
      });

      // router.push('/')
  };

  React.useEffect(() => {
    if (alert !== ''){
   router.push('/')
    }
  },[alert])

  return (
    <div className='bg-white'>
        <Navbar />
      <div className='contact-container mt-5'>
      <div className='contact-inner-container grid md:grid-cols-2'>
       <div className='contact-right-container'>
        <h1 className='contact-heading mb-5'>Send us a Message</h1>
       <div className='input-container'>
         {/* @ts-ignore */}
        <form ref={sendMail} onSubmit={sendEmail}>
        <div className='inner-input-container mb-2'>
        <label className='contact-label' id='name' style={{display: 'block'}}>Name</label>
        <input id='name' name='name' type="text" placeholder="Name" className="input input-bordered w-full" onChange={(e:any) => setFormData({...formData, name: e.target.value})} required />
       </div>
       <div className='inner-input-container mb-2'>
        <label className='contact-label' id='email' style={{display: 'block'}}>Email</label>
        <input id='email' name='email' type="text" placeholder="email" className="input input-bordered w-full" onChange={(e:any) => setFormData({...formData, email: e.target.value})} required />
       </div>
       <div className='inner-input-container mb-2'>
        <label className='contact-label' id='phone' style={{display: 'block'}}>Phone</label>
        <input id='phone' name='phone' type="text" placeholder="Phone" className="input input-bordered w-full" onChange={(e:any) => setFormData({...formData, phone: e.target.value})} required />
       </div>
       <div className='inner-input-container mb-2'>
        <label className='contact-label' id='message' style={{display: 'block'}}>Message</label>
        <textarea className="textarea textarea-bordered w-full" name='message' id='message' placeholder="Message" onChange={(e:any) => setFormData({...formData, message: e.target.value})} required></textarea>
       </div>
       <div className='flex justify-center mt-5 mb-5'>
       <button className="btn bg-navbar-btn topContainer-btn">Submit</button>
       </div>
       </form>
       </div>
       </div>
       <div className='contact-left-container'>
       <div className='contact-left-inner-container md:ml-10 md:mt-12'>
         <div className='contact-left-details-container flex-1 items-center'>
          <h3 className='contact-left-heading'>Contact Us</h3>
           <p className='contact-left-para'>Phone: <Link href='tel:+2347078482944' className='ml-5 font-normal'>07078482944</Link></p>
           <p className='contact-left-para max-sm:mt-4'>Email: <Link href='mailto:info@housekeeping.com.ng' className='ml-5 font-normal'>info@housekeeping.com.ng</Link></p>
         </div>
       </div>
       </div>
      </div>
      </div>
      <div className='top-container-bottom bg-top-container-bottom grid md:grid-cols-4 max-md:grid-cols-2 mt-4'>
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
    <>
    { alert !== '' ?
    <div className="toast toast-top toast-end">
  <div className="alert alert-success">
    <span style={{color: '#ffffff'}}>Meesage sent successfully</span>
  </div>
</div>
  : '' } </>
      <Footer />
    </div>
  )
}

export default page
