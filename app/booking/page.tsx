 'use client'
import React, { useEffect, useState } from 'react'
import { postBooking } from '@/app/action';
import { useFormState } from 'react-dom';
import { useRouter } from 'next/navigation'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postBookings } from '../api/router';
import BookingDetails from '@/components/bookingDetails/page';
import Toast from 'awesome-toast-component';
import Link from 'next/link';


function page() {

  const queryClient = useQueryClient()

  // const mutation = useMutation({
  //   mutationFn: postBooking,
  //   onSuccess: () => {
  //     // Invalidate and refetch
  //     queryClient.invalidateQueries({ queryKey: ['bookings'] })
  //   },
  // })
  
     const router = useRouter()

   const dates = new Date();
    const futureDate = dates.getDate() + 1;
    dates.setDate(futureDate);
    const defaultDate = dates.toLocaleDateString('en-CA');

const [price, setPrice ] = useState({livingRoom: '', bedroom: '', state: '', location: '', bathroom: '', toilet: '', serviceType: '', price: '', time: '', bookingDate: '', kitchen: '', name: '', email: '', phone: '', address: '', moreInfo: '' })
 let livingroomPrice = 5000
 let roomPrice = 3000
 let toiletPrice = 1000
 let bathroomPrice = 1500
 let kitchenPrice = 3000
 const [finalPrice, setFinalPrice ] = useState('')
 let roomFumigationPrice = 7500
 let livingRoomFumigationPrice = 10000


  //const [ state, formAction] = useFormState(postBooking, undefined)

// useEffect(() => {
//  if (state?.success) {
//     router.push('/')
//  }
// },[state?.success]);

const totalFumgatonPrice = roomFumigationPrice * Number(price.bedroom) + livingRoomFumigationPrice * Number(price.livingRoom) + 10000
    const totalPrice = livingroomPrice * Number(price.livingRoom) + roomPrice * Number(price.bedroom) + bathroomPrice * Number(price.bathroom) + toiletPrice * Number(price.toilet) + kitchenPrice * Number(price.kitchen) + 5000

useEffect(() => {
if(price.serviceType === 'Residential Fumigation') {
    // setFinalPrice(totalFumgatonPrice.toString())
    setPrice({...price, price: totalFumgatonPrice.toString()})
}
if(price.serviceType === 'Office Fumigation') {
    // setFinalPrice('Custom price')
    setPrice({...price, price: 'Custom price'})
}
if(price.serviceType === 'Residential Cleaning') {
    // setFinalPrice(totalPrice.toString())
    setPrice({...price, price: totalPrice.toString()})
}
if(price.serviceType === 'Office Cleaning') {
    // setFinalPrice('Custom price')
    setPrice({...price, price: 'Custom price'})
}
if(price.serviceType === 'Event Cleaning') {
    // setFinalPrice('Custom price')
    setPrice({...price, price: 'Custom price'})
}
if(price.serviceType === 'Post Construction Cleaning') {
    // setFinalPrice('Custom price')
    setPrice({...price, price: 'Custom price'})
}

// if(finalPrice) {
// setPrice({...price, price: finalPrice});
// }

},[price.bathroom, price.bedroom, price.serviceType, price.bookingDate, price.livingRoom, price.toilet, price.price, finalPrice, price.kitchen])

const mutation = useMutation({
    mutationFn: postBookings,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['bookings'] })
      router.push('/')
       new Toast('Booking successful', {position: 'top'})
    },
    onError: (error) => {
      console.log(error)
    }
  })

const handleSubmit = () => {
          mutation.mutate(price)
}

  return (
    <div className='booking-container'>
        <div className='booking-inner-container'>
    <button onClick={() => router.back()} className='btn'>back</button>
      <h1 className='text-center font-bold'>Booking</h1>
      <h5 className='text-xs font-bold text-blue-800 mt-3'>Please note that monthly package is also available. Call us today to book monthly package</h5>
      <Link className='text-xs font-bold' href='tel:+2347078482944'>Mobile: <span className='text-blue-600'> 07078482944</span></Link>
      <form action={handleSubmit}>
      <div className='date-time-container grid md:grid-cols-3 gap-4 mt-5 mb-5'>
     <div className=''>
        <p className='mb-4'>Choose a date</p>
      <input id='date' aria-label='Date' defaultValue={defaultDate} placeholder='Date' type='date' name='bookingDate' title='Date' className='btn btn-outline w-40' onChange={(e:any) => setPrice({...price, bookingDate: e.target.value})}  />
    </div>
    <div className='time-container max-md:mb-4 flex col-span-2 md:justify-end max-md:mt-2'>
   <div>
    <p className='mb-4'>Please choose time</p>
    <input className='time-input btn btn-outline mr-2' aria-label='8am' id='first' type='radio' name='time' value='8am' onChange={(e:any) => setPrice({...price, time: e.target.value})} />
    <input className='time-input btn btn-outline mr-2' id='second' aria-label='10am' type='radio' name='time' value='10am' onChange={(e:any) => setPrice({...price, time: e.target.value})}  />
    <input className='time-input btn btn-outline mr-2' id='third' aria-label='12pm' type='radio' name='time' value='12pm' onChange={(e:any) => setPrice({...price, time: e.target.value})} />
    <input className='time-input btn btn-outline' aria-label='2pm' id='fourth' type='radio' name='time' value='2pm' onChange={(e:any) => setPrice({...price, time: e.target.value})} />
    </div>
    </div>
    </div>
    <div className='other-input-container grid md:grid-cols-2 gap-4'>
    <div className='group-input'>
     <label className='other-input-label'>Full Name</label>
     <input type="text" name='name' placeholder="Full name" className="input input-bordered w-full" required onChange={(e:any) => setPrice({...price, name: e.target.value})} />
    </div>
    <div className='group-input'>
     <label className='other-input-label'>Email</label>
     <input type="email" name='email' placeholder="Email" className="input input-bordered w-full" onChange={(e:any) => setPrice({...price, email: e.target.value})} />
    </div>
    <div className='group-input'>
     <label className='other-input-label'>Phone</label>
     <input type='tel' name='phone' placeholder="Phone" className="input input-bordered w-full" required onChange={(e:any) => setPrice({...price, phone: e.target.value})} />
    </div>
    <div className='group-input'>
     <label className='other-input-label'>Address</label>
     <input type='text' name='address' placeholder="Address" className="input input-bordered w-full" required onChange={(e:any) => setPrice({...price, address: e.target.value})} />
    </div>
    <div className='group-input'>
     <label className='other-input-label'>Location</label>
     <input type='text' name='location' placeholder="Location" className="input input-bordered w-full" required onChange={(e:any) => setPrice({...price, location: e.target.value})} />
    </div>
    <div className='group-input'>
     <label className='other-input-label'>State</label>
     <select name='state' className="select select-bordered w-full" onChange={(e:any) => setPrice({...price, state: e.target.value})} required>
  <option className='text-gray-400' defaultValue=''>State</option>
  <option defaultValue=''>STATE</option>
      <option>Lagos</option>
      <option>Abuja</option>
      <option>Rivers</option>
      <option>Edo</option>
      <option>Delta</option>
</select>
     {/* <input type='text' name='bedroom' placeholder="Bedroom" className="input input-bordered w-full" onChange={(e:any) => setPrice({...price, bedroom: e.target.value})} /> */}
    </div>
    <div className='group-input'>
     <label className='other-input-label'>Service type</label>
    <select name='serviceType' className="select select-bordered w-full" required onChange={(e:any) => setPrice({...price, serviceType: e.target.value})}>
  <option className='text-gray-400' defaultValue=''>Service Type</option>
  <option>Residential Cleaning</option>
  <option>Office Cleaning</option>
  <option>Event Cleaning</option>
  <option>Post Construction Cleaning</option>
  <option>Residential Fumigation</option>
  <option>Office Fumigation</option>
</select>
</div>
    {/* <div className='group-input'>
     <label className='other-input-label'>Type Of Property</label>
     <input type='text' name='propertyType' placeholder="Type of property" className="input input-bordered w-full"  required  />
    </div> */}
    { price.serviceType === 'Residential Fumigation' || price.serviceType === 'Residential Cleaning' ?
    <div className='group-input'>
     <label className='other-input-label'>Bedroom</label>
     <select name='bedroom' className="select select-bordered w-full" onChange={(e:any) => setPrice({...price, bedroom: e.target.value})}>
  <option className='text-gray-400' defaultValue=''>Bedroom</option>
  <option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>
  <option>5</option>
  <option>6</option>
  <option>7</option>
  <option>8</option>
  <option>9</option>
  <option>10</option>
   <option>10+</option>
</select>
     {/* <input type='text' name='bedroom' placeholder="Bedroom" className="input input-bordered w-full" onChange={(e:any) => setPrice({...price, bedroom: e.target.value})} /> */}
    </div>
: ''}
    { price.serviceType === 'Residential Fumigation' || price.serviceType === 'Residential Cleaning' ?
    <div className='group-input'>
     <label className='other-input-label'>Bathroom</label>
     <select name='bathroom' className="select select-bordered w-full" onChange={(e:any) => setPrice({...price, bathroom: e.target.value})}>
  <option className='text-gray-400' defaultValue=''>Bathroom</option>
  <option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>
  <option>5</option>
  <option>6</option>
  <option>7</option>
  <option>8</option>
  <option>9</option>
  <option>10</option>
   <option>10+</option>
</select>
     {/* <input type='text' name='bathroom' placeholder="Bathroom" className="input input-bordered w-full" onChange={(e:any) => setPrice({...price, batheroom: e.target.value})} /> */}
    </div>
 : ''}
    { price.serviceType === 'Residential Fumigation' || price.serviceType === 'Residential Cleaning' ?
    <div className='group-input'>
     <label className='other-input-label'>Living Room</label>
     <select name='livingRoom' className="select select-bordered w-full" onChange={(e:any) => setPrice({...price, livingRoom: e.target.value})}>
  <option className='text-gray-400' defaultValue=''>Living Room</option>
  <option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>
  <option>5+</option>
</select>
     {/* <input type='text' name='livingRoom' placeholder="Living room" className="input input-bordered w-full" onChange={(e:any) => setPrice({...price, livingRoom: e.target.value})} /> */}
    </div>
   : ''}
    <div className='group-input'>
     <label className='other-input-label'>Toilet</label>
     <select name='toilet' className="select select-bordered w-full" onChange={(e:any) => setPrice({...price, toilet: e.target.value})}>
  <option className='text-gray-400' defaultValue=''>Toilet</option>
  <option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>
  <option>5</option>
  <option>6</option>
  <option>7</option>
  <option>8</option>
  <option>9</option>
  <option>10</option>
   <option>10+</option>
</select>
     {/* <input type='text' name='toilet' placeholder="Toilet" className="input input-bordered w-full" onChange={(e:any) => setPrice({...price, toilet: e.target.value})} /> */}
    </div>
    { price.serviceType === 'Residential Fumigation' || price.serviceType === 'Residential Cleaning' ?
    <div className='group-input'>
     <label className='other-input-label'>Kitchen</label>
     <select name='kitchen' className="select select-bordered w-full" onChange={(e:any) => setPrice({...price, kitchen: e.target.value})}>
  <option className='text-gray-400' defaultValue=''>Kitchen</option>
  <option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>
  <option>5+</option>
</select>
     {/* <input type='text' name='kitchen' placeholder="Kitchen" className="input input-bordered w-full" /> */}
    </div>
  : '' }
    <div className='group-input'>
     <label className='other-input-label '>More Details</label>
     <textarea className="textarea textarea-bordered w-full"  name='moreInfo'  placeholder="More Details" onChange={(e:any) => setPrice({...price, moreInfo: e.target.value})}></textarea>
    </div>
    </div>
    <div className='group-input mt-5'>
     <label className='other-input-label border-2 p-2 font-bold mt-4  bg-slate-600 text-white'>Price: <span className='ml-4 text-white'>{price.price !== 'Custom price'? 'NGN' : ''} {price.price}</span></label>
     {/* <input type='text' name='price' value={price?.price} placeholder="price" className="input input-bordered w-full hidden" onChange={(e:any) => setPrice({...price, price: e.target.value})}  /> */}
    </div>
    {finalPrice === 'Custom price' &&
      <h5 className='text-xs text-blue-800 mt-5'>Please note that we need to carry out inspection to determine the price.</h5>
      }
    <button type='submit' className='btn mt-5'>{mutation.isPending ? <span className="loading loading-spinner loading-xs"></span> : 'Submit'}</button>
    </form>
    </div>
    {/* {state?.success &&
    <div className="toast toast-top toast-end">
  <div className="alert alert-success"> 
    <span style={{color: '#ffffff'}}>{state?.success}</span>
  </div>
</div>
} */}
{/* {state?.errors &&
<div role="alert" className="alert alert-error">
  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  <span>Error! {state?.errors}.</span>
</div>
  } */}
    </div>
  )
}

export default page
