"use client"
import AdminNavbar from '@/components/AdminNavbar/page'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import drawer1 from '../../public/drawer-icon1.png'
import drawer2 from '../../public/drawer-icon2.png'
import cardIcon1 from '../../public/admin-card-icon1.png'
import cardIcon2 from '../../public/admin-card-icon2.png'
import cardIcon3 from '../../public/admin-card-icon3.png' 
import {getBookingBy, deletBooking, updateBooking} from '../api/router'
import moment from 'moment'
import Pagination from '@/components/pagination/page'
import { usePathname, useSearchParams, useRouter  } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'
import PaginationNew from '@/components/paginationNew/page'

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import BookingDetails from '@/components/bookingDetails/page'
import EditBooking from '@/components/editBooking/page'
import Toast from 'awesome-toast-component'

//export const revalidate = 3600
function Admin() {


   // const url = 'http://localhost:3000'
    // const fetcher = (url: string) => fetch(url).then(r => r.json())

  

 const dates = new Date();
    const futureDate = dates.getDate();
    dates.setDate(futureDate);
    const defaultDate = dates.toLocaleDateString('en-CA');
    const [date, setDate] = useState(defaultDate)
    const [datas, setDatas] = useState<any>([])
     const [totalDatas, setTotalDatas] = useState<any>([])
     const [isLoading, setIsLoading] = useState(false)
     const router = useRouter()
     const searchParams = useSearchParams();
  const pathName = usePathname();
  const {replace} = useRouter();
  const [id, setId] = useState(0)

  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')

  const querys = useQuery({ queryKey: ['bookings', date], queryFn: () => getBookingBy(date)})
  
   const { data, isLoading: isLoadings, isSuccess, error} = querys

    // useEffect(() => {
    //   const data = getBookingBy(date)
    //      data.then((data) => 
    //        // console.log(data)
    //        setDatas(data)
    //     ).then((error) => console.log(error))
    // }, [date])
{/* @ts-ignore:next-line */}
    // const handleSearch = useDebouncedCallback((search: string) => {
    //   setSearch(search);
  // const params = new URLSearchParams(searchParams);
  // if (search) {
  //   params.set('search', search);
  // } else {
  //   params.delete('search');
  // }
  // replace(`${pathName}?${params.toString()}`);
// }, 300)

// const { data, error } = useSWR(`/api?date=${date}`, fetcher)
const filterRevenue = totalDatas?.revenue?.filter((r: any) => r?.price !== 'Custom price').map((t:any) => t?.price);
 const filterdRevenue = filterRevenue?.reduce((a: any, b:any) => Number(a) + Number(b), 0)
// console.log(filterdRevenue)
 const queryClient = useQueryClient()

 const mutation = useMutation({
    mutationFn: deletBooking,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['bookings'] })
       new Toast('Bookings deleted successfully', {position: 'top'})
    },
    onError: (error) => {
      console.log(error)
    }
  })
const handleDelete = (id:any) => {
   mutation.mutate(id)

}

  return (
    <div className='admin-container relative'>
        <AdminNavbar setSearch={setSearch} search={search} />
        <div className='admin-body-container md:grid md:grid-cols-6'>
            <div className='flex items-center drawer-search-container max-md:mt-3 md:hidden'>
            <div className="drawer md:hidden w-2/6">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    <label htmlFor="my-drawer" className="btn  drawer-button"><svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg></label>
  </div> 
  <div className="drawer-side z-50">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-3/6 min-h-full drawer-container-sm text-base-content">
      <li className='text-white'><Link href=''><Image src={drawer1} className='w-4 mr-2' alt='icon'  />Dashboard</Link></li>
      <li className='text-white'><Link href=''><Image src={drawer2} className='w-4 mr-2' alt='icon'  />Availability</Link></li>
    </ul>
  </div>
</div>
 <div className='search-m-container md:hidden w-full'>
     <label className="input input-bordered flex items-center gap-2 bg-white">
      <svg width={12} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
     <input type="text" className="grow" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
     </label>
    </div>
</div>
  <div className='drawer-container-lg max-md:hidden pt-3'> 
      <ul className="menu p-4 h-full text-base-content">
      <li className='text-white'><Link className='text-white' href=''><Image src={drawer1} className='w-4 mr-2' alt='icon'  />Dashboard</Link></li>
      <li className='text-white'><Link className='text-white' href=''><Image src={drawer2} className='w-4 mr-2' alt='icon'  />Availability</Link></li>
    </ul>
    </div>
    <div className='admin-main-content-container col-span-5'>
     <h1 className='border-b-gray border-b-2 w-20 max-md:mt-5'>Dashboard</h1>
     <div className='admin-card-container flex md:gap-4 gap-2 mt-4'>
       <div className='admin-card bg-white flex items-center justify-center md:h-32'>
        <h2 className='admin-card-figure font-bold md:mb-4 md:text-xl lg:text-2xl'>{datas?.length}</h2>
        <p className='admin-card-text md:text-base'>New Bookings</p>
        <Image src={cardIcon1} className=' max-md:w-3 mt-2 admin-card-icon absolute md:-mt-12 md:mr-3 lg:mr-16' alt='icon' />
       </div>
        <div className='admin-card bg-white flex items-center justify-center md:h-32'>
        <h2 className='admin-card-figure font-bold md:mb-4 md:text-xl lg:text-2xl'>{totalDatas?.total}</h2>
        <p className='admin-card-text md:text-base'>Appointments</p>
        <Image src={cardIcon2} className='max-md:w-6 admin-card-icon absolute md:-mt-12 md:mr-3 lg:mr-16' alt='icon' />
       </div>
        <div className='admin-card bg-white flex items-center justify-center md:h-32'>
        <h2 className='admin-card-figure font-bold md:mb-4 md:text-xl lg:text-2xl'><span className='mr-1'>₦</span>{filterdRevenue}</h2>
        <p className='admin-card-text md:text-base'>Revenue</p>
        <Image src={cardIcon3} className='max-md:w-6 admin-card-icon absolute md:-mt-12 md:mr-3 lg:mr-16 ' alt='icon' />
       </div>
     </div>
     <h3 className='font-bold mt-5'>Today Bookings</h3>
     <div className='bookings-container bg-white grid md:grid-cols-3 mt-3'>
     <div className='bg-white'>
     <input type="date"  value={date} onChange={(e:any) => setDate(e.target.value)} className="btn bg-white" placeholder="" />
     </div>
     <div className='booking-list-container col-span-2'>
   <div className="w-full">
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className='bg-white'>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Address</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Service type</th>
        <th>Bedroom</th>
        <th>Bathroom</th>
        <th>Living Room</th>
        <th>Toilet</th>
        <th>Kitchen</th>
        <th className='w-20'>Note</th>
        <th>Price</th>
        <th>Booking date</th>
        <th>Time</th>
        <th>Location</th>
        <th>State</th>
        <th>Date posted</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    
    <tbody className='z-10'>
      {isLoadings ? <tr><td><div className='mt-10 mb-10 w-full flex items-center justify-center'><span className="loading loadin-icon loading-dots loading-mg text-center"></span></div></td></tr> :
      <>
      {data?.map((item: any) => 
      <tr className="bg-white" key={item?.id}>
        <th>
          <div className="avatar placeholder">
           <div className="bg-neutral text-neutral-content rounded-full w-10">
            {/* @ts-ignore:next-line */}
            <td><button className='btn btn-circle text-xs text-green-800'  onClick={()=> {document.getElementById('my_modal_3').showModal(), setId(item?.id) }}>View</button></td>
            {/* <span className="text-xs">{item?.name.slice(0,1).toUpperCase()}</span> */}
           </div>
          </div>
        </th>
        <td>{item?.name}</td>
        <td>{item?.address}</td>
        <td>{item?.email}</td>
        <td>{item.phone}</td>
        <td>{item?.serviceType}</td>
        <td>{item?.bedroom}</td>
        <td>{item?.bathroom}</td>
        <td>{item?.livingRoom}</td>
        <td>{item?.toilet}</td>
        <td>{item?.kitchen}</td>
        <td>{item?.moreInfo}</td>
        <td>{item?.price}</td>
        <td>{item?.bookingDate}</td>
        <td>{item?.time}</td>
        <td>{item?.location}</td>
        <td>{item?.state}</td>
        <td>{moment().fromNow(item?.createdAt)}</td>
         {/* @ts-ignore:next-line */}
        <td><button className='btn text-blue-600' onClick={()=> {document.getElementById('my_modal_1').showModal(), setId(item?.id) }}>Edit</button></td>
        <td><button className='btn text-red-600' onClick={() => handleDelete(item?.id)}>Delete</button></td>
      </tr>
      )}
       </>
    }
    </tbody>
  </table>
  </div>
</div>
     </div>
     </div>
<h3 className='font-bold mt-5'>All Bookings</h3>
 <div className="overflow-x-auto">
  <table className="table  mt-2">
    {/* head */}
    <thead className='bg-white'>
      <tr>
        <th></th>
        <th>Name</th>
        <th className='w-20'>Address</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Service type</th>
        <th>Bedroom</th>
        <th>Bathroom</th>
        <th>Living Room</th>
        <th>Toilet</th>
        <th>Kitchen</th>
        <th className='w-20'>Note</th>
        <th>Price</th>
        <th>Booking date</th>
        <th>Time</th>
        <th>Location</th>
        <th>State</th>
        <th>Date posted</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody className='z-10'>
       {isLoading ? <tr><td><div className='mt-10 mb-10 w-full flex items-center justify-center'><span className="loading loadin-icon loading-dots loading-mg text-center"></span></div></td></tr> :
      <>
      {totalDatas?.data?.map((item: any) => 
      <tr className="bg-white" key={item?.id}>
        <th>
          <div className="avatar placeholder">
           <div className="bg-neutral text-neutral-content rounded-full w-10">
            {/* @ts-ignore:next-line */}
            <td><button className='btn btn-circle text-xs text-green-800' onClick={()=> {document.getElementById('my_modal_3').showModal(), setId(item?.id) }}>View</button></td>
            {/* <span className="text-xs">{item?.name.slice(0,1).toUpperCase()}</span> */}
           </div>
          </div>
        </th>
        <td>{item?.name}</td>
        <td>{item?.address}</td>
        <td>{item?.email}</td>
        <td>{item.phone}</td>
        <td>{item?.serviceType}</td>
        <td>{item?.bedroom}</td>
        <td>{item?.bathroom}</td>
        <td>{item?.livingRoom}</td>
        <td>{item?.toilet}</td>
        <td>{item?.kitchen}</td>
        <td>{item?.moreInfo}</td>
        <td>{item?.price}</td>
        <td>{item?.bookingDate}</td>
        <td>{item?.time}</td>
        <td>{item?.location}</td>
        <td>{item?.state}</td>
        <td>{moment().fromNow(item?.createdAt)}</td>
        {/* @ts-ignore:next-line */}
        <td><button className='btn text-blue-600' onClick={()=> {document.getElementById('my_modal_1').showModal(), setId(item?.id) }}>Edit</button></td>
        <td><button className='btn text-red-600' onClick={() => handleDelete(item?.id)}>Delete</button></td>
      </tr>
      )}
      </>
       }
    </tbody>
  </table>
  <BookingDetails id={id} />
  <EditBooking id={id} />
</div>
 {/* <Pagination totalDatas={totalDatas} setTotalDatas={setTotalDatas} /> */}
     <PaginationNew setIsLoading={setIsLoading} totalDatas={totalDatas} setTotalDatas={setTotalDatas} page={page} setPage={setPage} search={search} />
     </div>
     </div>
    </div>
  )
}

export default Admin
