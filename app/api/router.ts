'use server'
import { PrismaClient } from "@prisma/client";
import { cache } from 'react'


const prisma = new PrismaClient()

export const getBookingBy = cache(async(date:any,) => {

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
 
  return data 
});

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
const startIndex =(Number(page) - 1) * LIMIT;
const total = await prisma.booking.count()

const data = await prisma.booking.findMany({
   skip: startIndex, 
   take: LIMIT,
   where,

   orderBy: {
    createdAt: 'desc'
    }
})

const lastPostInResults = data[data.length -1] 
const myCursor = lastPostInResults?.id 
// const tag = searchParams.get('tag')
//   revalidateTag(tag)
// console.log(data)
 
return { data, hasNextPage: startIndex + LIMIT < total, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT), total}
//  { data, myCursor, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT), total }
});

 {/* @ts-ignore:next-line */}