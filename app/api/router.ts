'use server'
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { cache } from 'react'


const prisma = new PrismaClient()

// export const GET = cache(async(request: NextRequest) => {

//   // const date = request.nextUrl.searchParams.get('date')
//   // console.log(date, request)

//     const data = await prisma.booking.findMany()
// //   const data = await res.json()

// if (!data) throw new Error('No data found!')
 
//   return data
// });

// getBookingBy
export const getBookingBy = cache(async(date: any) => {

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
const revenue = await prisma.booking.findMany({select: {price: true}})
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
 
return { data, hasNextPage: startIndex + LIMIT < total, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT), total, revenue: revenue}
//  { data, myCursor, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT), total }
});

 {/* @ts-ignore:next-line */}