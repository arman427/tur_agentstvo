class PagesConfig {
   PRODUCTS(id: number) {
      return `/catalog/product/${id}`
   }
}

export const PAGES = new PagesConfig();