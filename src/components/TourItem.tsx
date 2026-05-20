import { PAGES } from "@/config/pages-config";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Tours } from "@/lib/schema";
import { formatDuration } from "@/utils/format-duration";


export function TourItem({ item }: { item: Tours }) {
   return (
      <div className="rounded-3xl border border-black/10 w-65 transition-all will-change-transform backface-hidden shadow-xl shadow-black/5 hover:border-black/30 hover:scale-98 hover:shadow-sm">
         <Link href={PAGES.PRODUCTS(item.id)}>
            <div className="w-full relative h-50">
               <Image
                  src={item.imageUrl!}
                  alt={item.title}
                  fill
                  sizes="500px"
                  className="object-cover rounded-t-3xl"
                  quality={70}
               />
            </div>

            <div className="p-4">
               <div className="flex items-center justify-between">
                  <span className="text-[20px] font-bold">{item.price} ₽</span>
                  <span className="py-0.5 px-1 bg-green-100 rounded-lg text-[12px] text-emerald-700">{item.rating}</span>
               </div>

               <div className="text-[12px] font-semibold mb-2 flex items-center gap-1">
                  <p>Длительность тура:</p>
                  <span>{item.duration} {formatDuration(item.duration)}</span>
               </div>

               <div className="flex items-end gap-1 mt-2">
                  <MapPin size={16} className="text-gray-400 shrink-0" />
                  <span className="text-[13px] leading-none">{item.title}</span>
               </div>
            </div>
         </Link>
      </div>
   )
}