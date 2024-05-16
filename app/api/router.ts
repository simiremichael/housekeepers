'use server'
import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient()

export async function getBookingBy( date: any) {

 
    const data = await prisma.booking.findMany({
  where: {
    bookingDate: date,
  },
})
//   const data = await res.json()
 
  return data 
}