import { SERVICES } from "@/constants";
import { Container } from "./container";

export function Services() {
   return (
      <section className="bg-muted text-center pt-20 pb-40">
         <h2 className="text-3xl font-semibold uppercase mb-15">Услуги</h2>
         <Container className="grid grid-cols-3 gap-8">
            {SERVICES.map(({ icon: Icon, ...service }) => (
               <div key={service.id} className="bg-background max-w-100 h-100 p-5 shadow-xl shadow-black/10 flex flex-col items-center border-2 border-transparent duration-300 ease hover:border-b-accent">
                  <div className="bg-muted p-7 w-fit rounded-full flex items-center justify-center">
                     <Icon size={60} />
                  </div>
                  <h4 className="uppercase font-bold my-5 text-xl">{service.title}</h4>
                  <span className="font-semibold text-xl">{service.price}</span>
                  <p className="text-black text-[14px] mb-5">{service.text}</p>
                  <button className="bg-foreground py-2 px-6 text-background hover:bg-accent">{service.button}</button>
               </div>
            ))}
         </Container>
      </section>
   )
}