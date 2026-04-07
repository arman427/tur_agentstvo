import { Mail, MapPin, Phone } from "lucide-react";

export const CONTACTS_DATA = [
   {
      id: 1,
      icon: Phone,
      text: '+7 (961) 059 92-62',
      href: 'tel:+79610599262'
   },
   {
      id: 2,
      icon: Mail,
      text: 'babayananuta11@gmail.com',
      href: 'mailto:babayananuta11@gmail.com'
   },
   {
      id: 3,
      icon: MapPin,
      text: 'г. Москва, ул. Пушкинская, д. 1',
      href: ''
   },
] as const;