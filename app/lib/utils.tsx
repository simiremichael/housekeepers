import { z } from 'zod'
 
export const BookingFormSchema = z.object({
  name: z.string({required_error: "Name is required"}),
  phone: z.string({required_error: "Phone is required"}),
  address: z.string({required_error: "Address is required"}),
  serviceType: z.string(),
  bookingDate: z.string({required_error: "Bookng is required"}), 
  bedroom: z.any(), 
  bathroom: z.any(), 
  livingRoom: z.any(), 
  state: z.any(), 
  location: z.any(),
  toilet: z.any(), 
  kitchen: z.any(), 
  moreInfo: z.string(), 
  price: z.string(), 
  time: z.string({required_error: "Time is required"}),
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
  bedroom?: any[]
  bathroom?: any[]
  liveRoom?: any[]
  toilet?: any[]
  moreInfo?: string[]
  kitchen?: any[]
  price?: string[]
  time?: string[]
  state?: string[]
  location?: string
  bookinDate?: string[]
      }
      message?: string
    }
  | any 