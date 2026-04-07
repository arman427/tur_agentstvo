'use client'

import Image from "next/image";
import { Line } from "./ui/Line";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/constants";

export function Testimonials() {
   return (
      <section className="py-20 bg-muted">
         <div className="text-center">
            <h2 className="text-3xl font-semibold uppercase mb-15">Отзывы</h2>
            <Swiper
               className="swiper-testimonials w-full"
               navigation={{
                  nextEl: ".button-next-testimonials",
                  prevEl: ".button-prev-testimonials",
               }}
               pagination={true}
               slidesPerView={1}
               autoplay={{
                  delay: 8000,
                  disableOnInteraction: false,
               }}
               loop={true}
               speed={800}
               modules={[Navigation, Autoplay]}
            >
               {
                  TESTIMONIALS.map((item) => (
                     <SwiperSlide
                        className="flex flex-col items-center"
                        key={item.id}
                     >
                        <p className="mb-5 font-light tracking-[0.4px] max-w-250 m-auto">{item.text}</p>
                        <Line className="w-10 h-0.5 mb-6" />
                        <h3 className="text-[18px] font-bold">{item.name}</h3>
                        <span className="italic text-[13px] mb-10">{item.job}</span>
                        <Image
                           src={item.imageUrl}
                           alt={item.name}
                           width={70}
                           height={70}
                           className="rounded-full m-auto"
                        />
                     </SwiperSlide>
                  ))
               }

               <button className="button-prev-testimonials absolute left-30 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/30 rounded-full shadow-md hover:bg-accent transition-colors flex items-center justify-center text-white">
                  <ChevronLeft size={40} />
               </button>

               <button className="button-next-testimonials absolute right-30 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/30 rounded-full shadow-md hover:bg-accent transition-colors flex items-center justify-center text-white backdrop-blur-md">
                  <ChevronRight size={40} />
               </button>
            </Swiper>
         </div>
      </section>
   )
}