'use client'
import { getBooking } from '@/app/api/router'
import { useQuery } from '@tanstack/react-query'
import React, { useEffect } from 'react'

function BookingDetails(id:any) {

     const querys = useQuery({ queryKey: ['bookings', id], queryFn: () => getBooking(id?.id)})

   const { data, isLoading, isSuccess, error} = querys

  return (
    <div>
      {/* @ts-ignore:next-line */}
{/* <button className="btn" }>open modal</button> */}
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg text-center mb-4">Booking Detals</h3>
    <div className='grid grid-cols-2 gap-4'>
        <div className=''>
            <label className='block font-bold'>Full Name</label>
             <span className='block text-sm border-solid border-2 p-2'>{data?.name}</span>
        </div>
        <div>
            <label className='block font-bold'>Email</label>
             <span className='block text-sm border-solid border-2 p-2'>{data?.email}</span>
        </div>
         <div>
            <label className='block font-bold'>Phone</label>
             <span className='block text-sm border-solid border-2 p-2'>{data?.phone}</span>
        </div>
        <div>
            <label className='block font-bold'>Address</label>
             <span className='block text-sm border-solid border-2 p-2'>{data?.address}</span>
        </div>
        <div>
            <label className='block font-bold'>Service Type</label>
             <span className='block text-sm border-solid border-2 p-2'>{data?.serviceType}</span>
        </div>
        <div>
            <label className='block font-bold'>Time</label>
             <span className='block text-sm border-solid border-2 p-2'>{data?.time}</span>
        </div>
        <div>
            <label className='block font-bold'>Date</label>
             <span className='block text-sm border-solid border-2 p-2'>{data?.bookingDate}</span>
        </div>
        <div>
            <label className='block font-bold'>Amount</label>
             <span className='block text-sm border-solid border-2 p-2'>{data?.price !== 'Custom price' ? '₦' : ''}{data?.price}</span>
        </div>
        <div>
            <label className='block font-bold'>State</label>
             <span className='block text-sm border-solid border-2 p-2'>{data?.state}</span>
        </div>
        <div>
            <label className='block font-bold'>Location</label>
             <span className='block text-sm border-solid border-2 p-2'>{data?.location}</span>
        </div>
        <div>
            <label className='block font-bold'>State</label>
             <div className='block border-solid border-2 p-2'>
             <span className='text-xs '><strong>Beddroom:</strong> {data?.bedroom}, </span>
             <span className='text-xs '><strong>Bathroom:</strong> {data?.bathroom}, </span>
             <span className='text-xs '><strong>Living room:</strong> {data?.livingRoom}, </span>
             <span className='text-xs '><strong>Kitchen:</strong> {data?.kitchen}, </span>
             <span className='text-xs '><strong>Toilet:</strong> {data?.toilet}</span>
             </div>
        </div>
        <div>
            <label className='block font-bold'>More info</label>
             <span className='block text-sm border-solid border-2 p-2'>{data?.moreInfo}</span>
        </div>
    </div>
    <form method="dialog">
      <button className="btn bottom-btn self-center btn-sm mt-3 bg-sky-800 text-white">Close</button>
    </form>
  </div>
</dialog>
    </div>
  )
}

export default BookingDetails
