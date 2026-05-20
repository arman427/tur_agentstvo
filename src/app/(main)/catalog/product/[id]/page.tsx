import { Container } from "@/components";
import { TourForm } from "@/components/tour-form";
import { prisma } from "@/lib/prisma";
import { formatDuration } from "@/utils/format-duration";
import { generateTitle } from "@/utils/generate-title";
import { Clock, MapPin, PlaneTakeoff, Star } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function TourPage({ params }: { params: Promise<{ id: string }> }) {
   const { id } = await params;
   const item = await prisma.tour.findFirst({
      where: {
         id: Number(id)
      }
   })

   if (!item) {
      notFound();
   }

   return (
      <Container className="mt-10 mb-40">
         <div className="flex gap-10 items-stretch">
            <div className="w-150 flex flex-col">
               <div className="w-full flex-1 relative mb-3 min-h-[400px]">
                  <Image
                     src={item.imageUrl ?? ""}
                     alt=""
                     fill
                     className="object-cover rounded-2xl border border-black/10 shadow-xl shadow-black/10"
                  />
               </div>
               <div className="w-full bg-blue-500/5 border border-black/5 shadow-sm rounded-2xl flex items-center divide-x divide-black/10 py-6">
                  <div className="flex-1 flex items-center justify-center gap-2 px-4">
                     <Clock className="stroke-accent" />
                     <p>{item.duration} {formatDuration(item.duration)}</p>
                  </div>

                  <div className="flex-1 flex items-center justify-center gap-2 px-4">
                     <Star className="fill-accent stroke-accent" />
                     <p>{item.rating}</p>
                  </div>

                  <div className="flex-1 flex items-center justify-center gap-2 px-4">
                     <PlaneTakeoff className="stroke-accent" />
                     <p>Перелет включен</p>
                  </div>
               </div>
            </div>
            <div className="flex-1 min-w-0">
               <div className="flex items-start gap-1 text-accent/80 font-semibold mb-3">
                  <MapPin className="shrink-0" size={20} />
                  <h4>{item.title}</h4>
               </div>
               <h1 className="text-4xl font-bold font-playfair mb-8">{generateTitle(item.title)}</h1>
               <TourForm item={item} />
            </div>
         </div>
      </Container>
   )
}