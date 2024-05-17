'use server'
import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient()

export async function getBookingBy(date:any) {

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
        bookingDate: date
      },

     orderBy: {
    createdAt: 'desc'
  },
})
//   const data = await res.json()
 
  return data 
};

export async function getAllBooking({search, page, limit}:any) {

// console.log(search, page, limit)
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

 const LIMIT = 4;
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
return { data, myCursor, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT), total }
};

 {/* @ts-ignore:next-line */}