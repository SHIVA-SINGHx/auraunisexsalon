import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const WHATSAPP_NUMBER = '919266711535'
export const PHONE_NUMBER = '+919266711535'
export const PHONE_DISPLAY = '+91 92667 11535'
export const WHATSAPP_MESSAGE = 'Hi! I would like to book an appointment at The Aura Unisex Salon.'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
export const PHONE_URL = `tel:${PHONE_NUMBER}`

export const BUSINESS_NAME = 'The Aura Unisex Salon'
export const BUSINESS_ADDRESS = 'SHOP 17A/2, First Floor, Main Market, above Vision Care, near Apollo Pharmacy, Shramik Kunj, Sector 110, Noida, Uttar Pradesh 201304'
export const BUSINESS_CITY = 'Noida'
export const BUSINESS_STATE = 'Uttar Pradesh'
export const BUSINESS_ZIP = '201304'
export const BUSINESS_COUNTRY = 'IN'
export const MAPS_EMBED_URL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.012345678!2d77.369200!3d28.505400!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMwJzE5LjQiTiA3N8KwMjInMDkuMSJF!5e0!3m2!1sen!2sin!4v1234567890'

export const OPENING_HOURS = [
  { day: 'Monday – Friday', hours: '10:00 AM – 8:00 PM' },
  { day: 'Saturday', hours: '9:00 AM – 9:00 PM' },
  { day: 'Sunday', hours: '10:00 AM – 7:00 PM' },
]
