'use server'
import prisma from '@/lib/prisma-client/prisma';
import { cache } from 'react'


// export const GET = cache(async(request: NextRequest) => {

//   // const date = request.nextUrl.searchParams.get('date')
//   // console.log(date, request)

//     const data = await prisma.booking.findMany()
// //   const data = await res.json()

// if (!data) throw new Error('No data found!')
 
//   return data
// });

// getBookingBy
export const getBookingBy = async(date: any) => {

  // const date = request.nextUrl.searchParams.get('date')
  // console.log(date, request)

// let where = {}

// if (date) {
//      {/* @ts-ignore:next-line */}
//   where.bookingDate = date
// }
// if (search) {
     
//          {/* @ts-ignore:next-line */}
//      where.OR = [
//         {
//       state: { contains: search, mode: 'insensitive'}
//         },
//         {
//         location: { contains: search, mode: 'insensitive'}
//         },
//         {
//           name: { contains: search, mode: 'insensitive'}
//         }
//      ]     
// }

    const data = await prisma.booking.findMany({
      where: {
        bookingDate: date?.toString()
      },

     orderBy: {
    createdAt: 'desc'
  },
})
//   const data = await res.json()
if (!data) throw new Error('No data found!')
 
  return data 

};

// getAllBooking
export const getAllBooking = cache(async({search, page}:any) => {

  // console.log(search, page)
 
let where = {}


if (search) {
     
         {/* @ts-ignore:next-line */}
     where.OR = [
        {
      state: { contains: search, mode: 'insensitive'}
        },
        {
        location: { contains: search, mode: 'insensitive'}
        },
        {
          name: { contains: search, mode: 'insensitive'}
        }
     ]     
}


 const LIMIT = 2;
const startIndex = (Number(page) - 1) * LIMIT;
const total = await prisma.booking.count({where});
const revenue = await prisma.booking.findMany({
  where: {},
  select: {price: true}
  
});
const data = await prisma.booking.findMany({
   skip: startIndex, 
   take: LIMIT,
   where,

   orderBy: {
    createdAt: 'desc'
    }
})

// const lastPostInResults = data[data.length -1] 
// const myCursor = lastPostInResults?.id 
// const tag = searchParams.get('tag')
//   revalidateTag(tag)


 if (data.length < 1 || data === null || data === undefined) throw new Error('No data found!')

  if (data.length < 1) return
 return { data, hasNextPage: startIndex + LIMIT < total, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT), total, revenue: revenue}
//  { data, myCursor, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT), total }
});

 {/* @ts-ignore:next-line */}

 export const postBookings = async (request:any) => {
const {livingRoom, bedroom, state, location, bathroom, toilet, serviceType, price, time, bookingDate, kitchen, name, email, phone, address, moreInfo} = request

 await prisma.booking.create({
  data: {
    name,
    address,
    email,
    time,
    phone, 
    state,
    location,
    serviceType, 
    bookingDate, 
    bedroom, 
    bathroom, 
    livingRoom, 
    toilet, 
    kitchen, 
    moreInfo, 
    price
  }

})
 }

 export const getBooking = async(id: any) => {

 const data = await prisma.booking.findUnique({
  where: {
    id: id
  }
})

  return data;
 }

 export const updateBooking = async(request: any) => {
  // console.log(request)

  const {livingRoom, bedroom, state, location, bathroom, toilet, serviceType, price, time, bookingDate, kitchen, name, email, phone, address, moreInfo, id} = request
  await prisma.booking.update({
  where: {
    id: id,
  },
  data: {
     name,
    address,
    email,
    time,
    phone, 
    state,
    location,
    serviceType, 
    bookingDate, 
    bedroom, 
    bathroom, 
    livingRoom, 
    toilet, 
    kitchen, 
    moreInfo, 
    price
  },
})
 }

 export const deletBooking = async(id: any) => {

  // console.log(id)

 await prisma.booking.delete({
  where: {
    id: id,
  }
})

 }