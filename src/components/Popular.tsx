import Image from "next/image";

export function Popular() {
   return (
      <section>
         <div className="grid-wrapper grid grid-cols-[1fr_700px_700px_1fr] items-center">
            <div className="col-start-2 col-end-3 p-10">
               <h2 className="text-3xl mb-4">Париж: вход только для влюбленных</h2>
               <p className="mb-2 text-foreground font-semibold text-[15px]">Путешествие с Flyaway — это лучший способ стать ближе к своей собственной планете. Мы уверены, что с нами у вас это получится лучше всего. Уже более десяти лет мы сближаем людей по всему миру.</p>
               <p className="text-[14px] text-gray-400 mb-5">Наша компания не только организовывает вам поездку в самые интересные уголки земного шара, но также даёт возможность вернуться туда самостоятельно, чтобы вновь встретиться со своими друзьями.</p>
               <button className="bg-accent text-white px-8 py-3 text-sm hover:bg-foreground">В корзину</button>
            </div>

            <div className="col-start-3 col-end-5 h-full">
               <Image
                  src="/parizPopular.png"
                  className="object-cover"
                  alt="Paris"
                  width={952}
                  height={600}
               />
            </div>

            <div className="col-start-1 col-end-3 h-full">
               <Image
                  src="/SanF.png"
                  className="object-cover"
                  alt="Paris"
                  width={955}
                  height={600}
               />
            </div>

            <div className="col-start-3 col-end-4 p-10">
               <h2 className="text-3xl mb-4">Золотые ворота в Сан-Франциско</h2>
               <p className="mb-1 font-semibold text-foreground text-[15px]">Наша старая баржа провезет вас от центра города до самой окраины. От гранитных набережных то песчаных берегов. Мягкий шелест волн, скрип досок и крики птиц создадут атмосферу покоя и расслабленности.</p>
               <p className="mb-3 text-gray-400 text-[15px]">Маршрут:</p>
               <ul className="mb-5 space-y-1 text-sm text-gray-500 text-[14px]">
                  <li>Пристань Надежды</li>
                  <li>Центральный канал</li>
               </ul>
               <button className="bg-accent text-white px-8 py-3 text-sm hover:bg-foreground">В корзину</button>
            </div>
         </div>
      </section >
   )
}