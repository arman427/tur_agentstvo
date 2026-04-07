'use client'

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { SplitText } from "gsap/SplitText";
import Image from "next/image";
import { useEffect } from "react";

gsap.registerPlugin(SplitText)
gsap.registerPlugin(ScrollTrigger)

export function AboutGrid() {
   useGSAP(() => {
      let titleSplit = new SplitText('.aboutGrid-title', { type: 'words,chars' })

      gsap.from(titleSplit.chars, {
         scrollTrigger: {
            trigger: '.aboutGrid-title',
            start: "top 80%",
         },
         opacity: 0,
         scaleX: -1,
         rotation: -45,
         transformOrigin: "center",
         yPercent: -200,
         duration: 1,
         ease: "back",
         stagger: 0.1,
      })
   }, [])

   useEffect(() => {
      if (window.location.hash) {
         history.replaceState(null, '', ' ')
         window.scrollTo({
            top: 0,
            behavior: 'smooth'
         })
      }
   }, [])

   return (
      <>
         <h1 className="scroll-mt-35 uppercase font-bold text-8xl italic aboutGrid-title text-center mt-101 mb-3" id="gridSection">Почему мы?</h1>
         <section className="grid grid-cols-1 lg:grid-cols-[1fr_min(1000px,45%)_1fr] gap-2 overflow-hidden w-full px-3 mb-50">
            <div className="col-start-1 col-end-2 w-full h-100 flex flex-col items-center justify-center text-center bg-link-hover p-10 font-semibold border border-black/5">
               <h3 className="text-4xl font-bold italic uppercase">Индивидуальный подход</h3>
               <p className="text-[14px] max-w-90 mt-3">Мы не предлагаем шаблонных решений. Каждый тур разрабатывается с учетом ваших пожеланий, бюджета и интересов.</p>
            </div>
            <div className="row-span-2 w-full h-100 lg:h-full relative">
               <Image
                  src="/benefits-img.png"
                  alt="Bali"
                  fill
                  className="object-cover shadow-2xl shadow-black/30"
               />
            </div>
            <div className="col-start-3 col-end-4 w-full h-100 flex flex-col items-center justify-center text-center bg-link-hover p-10 border border-black/5">
               <h3 className="text-4xl font-bold italic uppercase">Профессионализм и опыт</h3>
               <p className="text-[14px] max-w-90 mt-3 font-semibold">Наша команда — это эксперты, влюбленные в свое дело. Мы лично проверяем отели и маршруты, чтобы гарантировать вам высочайший уровень комфорта.</p>
            </div>
            <div className="col-start-1 col-end-2 w-full h-100 flex flex-col items-center justify-center text-center bg-link-hover p-10 font-semibold border border-black/5">
               <h3 className="text-4xl font-bold italic uppercase">Поддержка 24/7</h3>
               <p className="text-[14px] max-w-90 mt-3">Мы всегда на связи. Где бы вы ни находились, наши специалисты готовы оперативно помочь в любой ситуации через удобные каналы связи.</p>
            </div>
            <div className="col-start-3 col-end-4 w-full h-100 flex flex-col items-center justify-center text-center bg-link-hover p-10 border border-black/5">
               <h3 className="text-4xl font-bold italic uppercase">Прозрачность и&nbsp;надежность</h3>
               <p className="text-[14px] max-w-90 mt-3 font-semibold">Наш офис расположен в самом центре Москвы по адресу: ул. Пушкинская, д. 1. Мы ценим доверие наших клиентов и гарантируем прозрачность всех условий договора.</p>
            </div>
         </section>
      </>
   )
}