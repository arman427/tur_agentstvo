'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay, Keyboard } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-coverflow"

import Image from "next/image"
import { SLIDES } from "@/constants/slides-data"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function SwiperWrapper() {
   return (
      <Swiper
         simulateTouch={false}
         className="mySwiper w-full h-200"
         navigation={{
            nextEl: ".button-next-swiper",
            prevEl: ".button-prev-swiper",
         }}
         pagination={true}
         modules={[Navigation, Pagination, Autoplay, Keyboard]}
         slidesPerView={1}
         keyboard={true}
         loop={true}
         speed={800}
         autoplay={{
            delay: 8000,
            disableOnInteraction: false,
         }}
      >
         {SLIDES.map((slide) => (
            <SwiperSlide key={slide.id}>
               <div className="relative flex w-full h-full items-center justify-start">
                  <Image
                     src={slide.img}
                     alt={slide.title}
                     fill
                     className="slider-img"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/20"></div>
                  <div className="absolute left-80 top-50 bg-white/30 max-w-2xl h-fit flex flex-col gap-10 text-left backdrop-blur-sm shadow-md shadow-black/20 p-6 rounded-3xl">
                     <div className="relative z-99">
                        <h3 className="uppercase text-4xl font-bold mb-3 swiper-title italic tracking-[1px]">{slide.title}</h3>
                        <p className="max-w-150 swiper-text">{slide.desc}</p>
                     </div>
                     <div>
                        <button className="bg-accent py-5 px-10 uppercase font-semibold hover:bg-foreground hover:text-background">Узнать больше</button>
                     </div>
                  </div>
               </div>
            </SwiperSlide>
         ))}

         <button className="button-prev-swiper absolute left-30 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/80 rounded-full shadow-md hover:bg-accent transition-colors flex items-center justify-center text-white">
            <ChevronLeft size={50} />
         </button>

         <button className="button-next-swiper absolute right-30 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/80 rounded-full shadow-md hover:bg-accent transition-colors flex items-center justify-center text-white backdrop-blur-md">
            <ChevronRight size={50} />
         </button>
      </Swiper>
   )
}