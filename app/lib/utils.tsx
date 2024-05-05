import { z } from 'zod'
 
export const BookingFormSchema = z.object({
  name: z.string(),
  phone: z.string(),
  address: z.string(),
  serviceType: z.string(),
  propertyType: z.string(),
  bookingDate: z.string(), 
  bedroom: z.string(), 
  bathroom: z.string(), 
  livingRoom: z.string(), 
  toilet: z.string(), 
  kitchen: z.string(), 
  moreInfo: z.string(), 
  price: z.string(), 
   time: z.string(),
   email: z.string(),
})
 
export type FormState =
  | {
      errors?: {
  email?: string[]
  phone?: string[]
  serviceType?: string[]
  propertyType?: string[]
  address?: string[]
  name?: string[]
  bedrooms?: string[]
  bathrooms?: string[]
  liveRoom?: string[]
  toilet?: string[]
  moreInfo?: string[]
  kitchen?: string[]
  price?: string[]
  time?: string[]
  bookinDate?: string[]
      }
      message?: string
    }
  | undefined