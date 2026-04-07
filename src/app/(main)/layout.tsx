import { Footer, Header } from "@/components";
import { BackToTop } from "@/components/ui/BackToTop";
import { ReactNode } from "react";


export default function HomeLayout({ children }: { children: ReactNode }) {
   return (
      <main>
         <Header />
         {children}
         <Footer />
         <BackToTop />
      </main>
   )
}  