import { z } from 'zod'
 
export const BookingFormSchema = z.object({
  name: z.string(),
  phone: z.string(),
  address: z.string(),
  serviceType: z.string(),
  bookingDate: z.string(), 
  bedroom: z.any(), 
  bathroom: z.any(), 
  livingRoom: z.any(), 
  toilet: z.any(), 
  kitchen: z.any(), 
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
  address?: string[]
  name?: string[]
  bedrooms?: any[]
  bathrooms?: any[]
  liveRoom?: any[]
  toilet?: any[]
  moreInfo?: string[]
  kitchen?: any[]
  price?: string[]
  time?: string[]
  bookinDate?: string[]
      }
      message?: string
    }
  | undefined