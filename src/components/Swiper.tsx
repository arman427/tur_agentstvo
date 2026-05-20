'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay, Keyboard } from "swiper/modules"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

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
                     className="slider-img"
                     quality={100}
                     fill
                  />
                  <div className="absolute left-80 top-50 bg-white/5 max-w-2xl h-fit flex flex-col gap-10 text-left backdrop-blur-sm shadow-md shadow-black/20 p-6 rounded-3xl">
                     <div className="relative z-99">
                        <h3 className="uppercase text-4xl font-medium mb-3 swiper-title tracking-[1px]">{slide.title}</h3>
                        <p className="max-w-150 swiper-text">{slide.desc}</p>
                     </div>
                     <div>
                        <button className="bg-accent py-5 px-10 uppercase font-semibold transition-colors hover:bg-foreground hover:text-background rounded-full">Узнать больше</button>
                     </div>
                  </div>
               </div>
            </SwiperSlide>
         ))}

         <button className="button-prev-swiper absolute left-30 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/20 backdrop-blur-2xl rounded-full shadow-md hover:bg-accent transition-colors flex items-center justify-center text-black">
            <ChevronLeft size={30} />
         </button>

         <button className="button-next-swiper absolute right-30 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/20 backdrop-blur-2xl rounded-full shadow-md hover:bg-accent transition-colors flex items-center justify-center text-black">
            <ChevronRight size={30} />
         </button>
      </Swiper>
   )
}