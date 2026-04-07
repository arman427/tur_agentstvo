import { Hero, Popular, Services, SwiperWrapper, Testimonials } from "@/components";

export default function HomePage() {

   return (
      <div>
         <SwiperWrapper />
         <Hero />
         <Services />
         <Popular />
         <Testimonials />
      </div>
   )
}