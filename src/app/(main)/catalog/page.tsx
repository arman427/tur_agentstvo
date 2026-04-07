import { CatalogBody } from '@/components';
import { prisma } from '@/lib/prisma';

export default async function CatalogPage() {
   const toursData = await prisma.tour.findMany({
      orderBy: { id: 'asc' },
   });

   return (
      <>
         <CatalogBody items={toursData} />
      </>
   );
}
