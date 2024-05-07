 "use server"
 import { PrismaClient, Prisma } from '@prisma/client'
import { BookingFormSchema, FormState} from './lib/utils'
import { revalidatePath } from 'next/cache';


    const prisma = new PrismaClient()

export const postBooking = async (formstate:  FormState, formData: FormData) => {
//{name, address, phone, serviceType, email, time, propertyType, bookingDate, bedroom, bathroom, livingRoom, toilet, kitchen, moreInfo, price}

 const validatedFields = BookingFormSchema.safeParse({
    name: formData.get('name'),
    time: formData.get('time') ,
    email: formData.get('email'),
    address: formData.get('address'),
    location: formData.get('location'),
    state: formData.get('state'),
    phone: formData.get('phone'),
    serviceType: formData.get('serviceType'),
    bookingDate: formData.get('bookingDate'),
    bedroom: formData.get('bedroom') === null ? '0' : formData.get('bedroom'),
    bathroom: formData.get('bathroom') === null ? '0' : formData.get('bathroom'),
    livingRoom: formData.get('livingRoom') === null ? '0' : formData.get('livingRoom'),
    toilet: formData.get('toilet'),
    kitchen: formData.get('kitchen') === null ? '0' : formData.get('kitchen'),
    moreInfo: formData.get('moreInfo'),
    price: formData.get('price'),
  })

   if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
   }
  } 

   const {name, address, phone, serviceType, state, location, email, time, bookingDate, bedroom, bathroom, livingRoom, toilet, kitchen, moreInfo, price } = validatedFields.data
  
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
    bedroom: bedroom, 
    bathroom: bathroom, 
    livingRoom: livingRoom, 
    toilet: toilet, 
    kitchen: kitchen, 
    moreInfo, 
    price
  }

})

revalidatePath('/'); 

return {
  success: 'Booking completed successfully'
};
}
//  postBooking()
//  .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })