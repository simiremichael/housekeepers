 'use client'
import React, { useEffect, useState } from 'react'
import { getBooking, updateBooking } from '@/app/api/router';
import { useRouter } from 'next/navigation'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { number } from 'zod';
import Toast from 'awesome-toast-component'


function EditBooking(id:any, EditMutation: any) {

  const queryClient = useQueryClient()
  
     const router = useRouter()

   const dates = new Date();
    const futureDate = dates.getDate() + 1;
    dates.setDate(futureDate);
    const defaultDate = dates.toLocaleDateString('en-CA');

const [price, setPrice ] = useState({livingRoom: '', bedroom: '', state: '', location: '', bathroom: '', toilet: '', serviceType: '', price: '', time: '', bookingDate: '', kitchen: '', name: '', email: '', phone: '', address: '', moreInfo: '', id: number })
 let livingroomPrice = 5000
 let roomPrice = 3000
 let toiletPrice = 1000
 let bathroomPrice = 1500
 let kitchenPrice = 3000
 const [finalPrice, setFinalPrice ] = useState('')
 let roomFumigationPrice = 7500
 let livingRoomFumigationPrice = 10000

 const querys = useQuery({ queryKey: ['bookings', id], queryFn: () => getBooking(id?.id)})

   const { data, isLoading, isSuccess, error} = querys
console.log(data)
  useEffect(() => {
     {/* @ts-ignore:next-line */}
    setPrice(data);
  }, [isSuccess]);

const totalFumgatonPrice = roomFumigationPrice * Number(price?.bedroom) + livingRoomFumigationPrice * Number(price?.livingRoom) + 10000
    const totalPrice = livingroomPrice * Number(price?.livingRoom) + roomPrice * Number(price?.bedroom) + bathroomPrice * Number(price?.bathroom) + toiletPrice * Number(price?.toilet) + kitchenPrice * Number(price?.kitchen) + 5000

useEffect(() => {
if(price?.serviceType === 'Residential Fumigation') {
    setFinalPrice(totalFumgatonPrice.toString())
}
if(price?.serviceType === 'Office Fumigation') {
    setFinalPrice('Custom price')
}
if(price?.serviceType === 'Residential Cleaning') {
    setFinalPrice(totalPrice.toString())
}
if(price?.serviceType === 'Office Cleaning') {
    setFinalPrice('Custom price')
}
if(price?.serviceType === 'Event Cleaning') {
    setFinalPrice('Custom price')
}
if(price?.serviceType === 'Post Construction Cleaning') {
    setFinalPrice('Custom price')
}

},[price?.bathroom, price?.bedroom, price?.serviceType, price?.bookingDate, price?.livingRoom, price?.toilet, price?.price, finalPrice, price?.kitchen])

const mutation = useMutation({
    mutationFn: updateBooking,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['bookings'] })
    //   router.push('/admin')
      new Toast('Bookings updated successfully', {position: 'top'})
    },
    onError: (error) => {
      console.log(error)
    }
  })

const handleEdit = () => {
          mutation.mutate(price)
}

  return (
    <dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <div className='booking-container'>
        <div className='booking-inner-container'>
            <form method="dialog">
        <button className="btn">Close</button>
        </form>
      <h1 className='text-center font-bold'>Edit Booking</h1>
      <form action={handleEdit}>
      <div className='date-time-container grid md:grid-cols-3 gap-4 mt-5 mb-5'>
     <div className=''>
        <p className='mb-4'>Choose a date</p>
      <input id='date' aria-label='Date' value={price?.bookingDate} placeholder='Date' type='date' name='bookingDate' title='Date' className='btn btn-outline w-30' onChange={(e:any) => setPrice({...price, bookingDate: e.target.value})}  />
    </div>
    <div className='time-container max-md:mb-4 flex col-span-2 md:justify-end max-md:mt-2'>
   <div>
    <p className='mb-4'>Please choose time</p>
    <input className='time-input btn btn-outline mr-2 md:w-10' aria-label='8am' id='first' type='radio' name='time' value='8am' onChange={(e:any) => setPrice({...price, time: e.target.value})} />
    <input className='time-input btn btn-outline mr-2 md:w-10' id='second' aria-label='10am' type='radio' name='time' value='10am' onChange={(e:any) => setPrice({...price, time: e.target.value})}  />
    <input className='time-input btn btn-outline mr-2 md:w-10' id='third' aria-label='12pm' type='radio' name='time' value='12pm' onChange={(e:any) => setPrice({...price, time: e.target.value})} />
    <input className='time-input btn btn-outline md:w-10' aria-label='2pm' id='fourth' type='radio' name='time' value='2pm' onChange={(e:any) => setPrice({...price, time: e.target.value})} />
    </div>
    </div>
    </div>
    <div className='other-input-container grid md:grid-cols-2 gap-4'>
    <div className='group-input'>
     <label className='other-input-label'>Full Name</label>
     <input type="text" name='name' placeholder="Full name" className="input input-bordered w-full" value={price?.name} required onChange={(e:any) => setPrice({...price, name: e.target.value})} />
    </div>
    <div className='group-input'>
     <label className='other-input-label'>Email</label>
     <input type="email" name='email' placeholder="Email" className="input input-bordered w-full" value={price?.email} onChange={(e:any) => setPrice({...price, email: e.target.value})} />
    </div>
    <div className='group-input'>
     <label className='other-input-label'>Phone</label>
     <input type='tel' name='phone' placeholder="Phone" className="input input-bordered w-full" value={price?.phone} required onChange={(e:any) => setPrice({...price, phone: e.target.value})} />
    </div>
    <div className='group-input'>
     <label className='other-input-label'>Address</label>
     <input type='text' name='address' placeholder="Address" className="input input-bordered w-full" value={price?.address} required onChange={(e:any) => setPrice({...price, address: e.target.value})} />
    </div>
    <div className='group-input'>
     <label className='other-input-label'>Location</label>
     <input type='text' name='location' placeholder="Location" className="input input-bordered w-full" value={price?.location} required onChange={(e:any) => setPrice({...price, location: e.target.value})} />
    </div>
    <div className='group-input'>
     <label className='other-input-label'>State</label>
     <select name='state' className="select select-bordered w-full" value={price?.state} onChange={(e:any) => setPrice({...price, state: e.target.value})} required>
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
    <select name='serviceType' className="select select-bordered w-full" required value={price?.serviceType} onChange={(e:any) => setPrice({...price, serviceType: e.target.value})}>
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
    { price?.serviceType === 'Residential Fumigation' || price?.serviceType === 'Residential Cleaning' ?
    <div className='group-input'>
     <label className='other-input-label'>Bedroom</label>
     <select name='bedroom' className="select select-bordered w-full" value={price?.bedroom} onChange={(e:any) => setPrice({...price, bedroom: e.target.value})}>
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
    { price?.serviceType === 'Residential Fumigation' || price?.serviceType === 'Residential Cleaning' ?
    <div className='group-input'>
     <label className='other-input-label'>Bathroom</label>
     <select name='bathroom' className="select select-bordered w-full" value={price?.bathroom} onChange={(e:any) => setPrice({...price, bathroom: e.target.value})}>
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
    { price?.serviceType === 'Residential Fumigation' || price?.serviceType === 'Residential Cleaning' ?
    <div className='group-input'>
     <label className='other-input-label'>Living Room</label>
     <select name='livingRoom' className="select select-bordered w-full" value={price?.livingRoom} onChange={(e:any) => setPrice({...price, livingRoom: e.target.value})}>
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
     <select name='toilet' className="select select-bordered w-full" value={price?.toilet} onChange={(e:any) => setPrice({...price, toilet: e.target.value})}>
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
    { price?.serviceType === 'Residential Fumigation' || price?.serviceType === 'Residential Cleaning' ?
    <div className='group-input'>
     <label className='other-input-label'>Kitchen</label>
     <select name='kitchen' className="select select-bordered w-full" value={price?.kitchen} onChange={(e:any) => setPrice({...price, kitchen: e.target.value})}>
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
     <textarea className="textarea textarea-bordered w-full" value={price?.moreInfo}  name='moreInfo'  placeholder="More Details" onChange={(e:any) => setPrice({...price, moreInfo: e.target.value})}></textarea>
    </div>
    </div>
    <div className='group-input mt-5'>
     <label className='other-input-label border-2 p-2 font-bold mt-4  bg-slate-600 text-white'>Price: <span className='ml-4 text-white'>{finalPrice !== 'Custom price'? 'NGN' : ''} {finalPrice}</span></label>
     <input type='text' name='price' value={finalPrice} placeholder="price" className="input input-bordered w-full hidden" onChange={() => setPrice({...price, price: finalPrice})}  />
    </div>
    {finalPrice === 'Custom price' &&
      <h5 className='text-xs text-blue-800 mt-5'>Please note that we need to carry out inspection to determine the price.</h5>
      }
       {/* @ts-ignore:next-line */}
    <button type='submit' className='btn mt-5' onClick={()=> document.getElementById('my_modal_1')?.close()}>Submit</button>
    </form>
    </div>
    </div>
    </div>
</dialog>
  )
}

export default EditBooking
