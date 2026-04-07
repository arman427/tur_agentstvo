// import { Tours } from "@/lib/schema";
import { CatalogFilters } from "./CatalogFilters";
import { Container } from "./container";
import { TourItem } from "./TourItem";

export async function CatalogBody({ items }: { items: any }) {

   return (
      <Container className="my-20">
         <div className="flex gap-20">
            {/* Фильтры */}
            <div className="w-80">
               <CatalogFilters />
            </div>

            {/* Список туров */}
            <div className="grid grid-cols-3 gap-5">
               {items.map((tour: any) => (
                  <TourItem
                     key={tour.id}
                     item={tour}
                  />
               ))}
            </div>
         </div>
      </Container>
   )
}
