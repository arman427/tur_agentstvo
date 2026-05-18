export const dynamic = "force-dynamic";

import { CatalogBody } from '@/components';
import { findPizzas, GetSearchParams } from '@/utils/find-pizzas';

export default async function CatalogPage({ searchParams }: { searchParams: GetSearchParams }) {
   const params = await searchParams;
   const toursData = await findPizzas(params);

   return (
      <>
         <CatalogBody items={toursData} />
      </>
   );
}
