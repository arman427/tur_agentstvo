'use client';

import { Container } from "./container";
import Link from "next/link";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { FOOTER_LINKS, FOOTER_PAYMENT, SOCIALS } from "@/constants";
import { cn } from "@/lib/utils";

export function Footer() {
   return (
      <footer className="pt-15 pb-3 bg-foreground text-background">
         <Container>
            <div className="flex items-start justify-between pb-10">
               <nav className="flex gap-15 text-[14px] text-white/50">
                  {FOOTER_LINKS.map((section, index) => (
                     <ul key={index} className="flex flex-col gap-2">
                        <h4 className="mb-3 text-[15px] text-background">{section.title}</h4>
                        {section.links.map((link) => (
                           <li key={link.label} className="transition-colors hover:text-background">
                              <a href={link.href}>{link.label}</a>
                           </li>
                        ))}
                     </ul>
                  ))}
               </nav>

               <div className="grid gap-2 text-[14px] text-white/50">
                  <div className="grid gap-1">
                     <p>Адрес: г. Волгоград, ул. Пушкина д.666</p>
                     <p>Телефон: +7 (961) 059 92-62</p>
                     <p>Email: babayananuta11@gmail.com</p>
                     <p>Режим работы: Пн-Пт: 10:00 – 19:00, Сб-Вс: по записи</p>
                  </div>

                  <span className="mt-3 text-[15px]">Наши соц. сети</span>
                  <TooltipProvider skipDelayDuration={0}>
                     <div className="flex gap-5 items-center">
                        {
                           SOCIALS.map((social) => (
                              <Tooltip key={social.name}>
                                 <TooltipTrigger>
                                    <a href={social.href} className="relative text-background transition-all group">
                                       <Image
                                          src={social.imageUrl}
                                          alt={social.name}
                                          width={22}
                                          height={22}
                                          className="brightness-0 invert"
                                       />
                                    </a>
                                 </TooltipTrigger>
                                 <TooltipContent side="bottom">
                                    <p className="text-background">{social.name}</p>
                                 </TooltipContent>
                              </Tooltip>
                           ))
                        }
                     </div>
                  </TooltipProvider>
               </div>
            </div>
         </Container>

         <div className="border-t border-white/10"></div>

         <Container>
            <div className="pt-5">
               <div className="flex items-center justify-between mb-10">
                  <Link
                     href="/"
                     className="text-3xl font-bold uppercase py-2"
                  >
                     Terra Travel
                  </Link>

                  <div className="flex gap-5">
                     {FOOTER_PAYMENT.map((icon) => (
                        <img
                           key={icon.url}
                           src={icon.url}
                           alt={icon.name}
                           width={50}
                           height={20}
                           className={cn('', {
                              'brightness-0': icon.name == 'Apple Pay'
                           })}
                        />
                     ))}
                  </div>
               </div>

               <div className="flex items-center justify-between text-white/50 text-[14px]">
                  <p>@ 2026 Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                  <p>Интернет-магазин разработан на <span className="text-white">Next.js</span></p>
               </div>
            </div>
         </Container>
      </footer>
   )
}