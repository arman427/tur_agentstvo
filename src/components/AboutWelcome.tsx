import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"

gsap.registerPlugin(SplitText)

export function AboutWelcome() {
   useGSAP(() => {
      let titleSplit = new SplitText('.about-title', { type: 'words,chars' })

      gsap.from(titleSplit.chars, {
         opacity: 0,
         scaleX: -1,
         rotation: -45,
         transformOrigin: "center",
         yPercent: -200,
         duration: 1,
         ease: "back",
         stagger: 0.1
      })

      gsap.from('.about-text', {
         opacity: 0,
         yPercent: 100,
         duration: 1.5,
         ease: "back",
         delay: 0.5
      })
      gsap.from('.about-button', {
         opacity: 0,
         yPercent: 100,
         duration: 2,
         ease: "back",
         delay: 0.5
      })
   }, [])

   return (
      <section>
         <div className="text-center m-auto max-w-250 mt-70 mb-50">
            <h1 className="uppercase font-bold text-8xl italic about-title">О нас</h1>
            <p className="text-black/80 mt-3 about-text">Ваш проводник в мир незабываемых впечатлений В TERRA TRAVEL мы верим, что путешествие — это не просто поездка из пункта А в пункт Б. Это возможность открыть для себя новые горизонты, познакомиться с удивительными культурами и создать воспоминания, которые останутся с вами на всю жизнь.</p>
            <a href="#gridSection" className="inline-block bg-accent py-5 px-10 mt-5 text-[20px] transition-colors hover:text-background hover:bg-foreground about-button rounded-full">Почему мы?</a>
         </div>
      </section>
   )
}