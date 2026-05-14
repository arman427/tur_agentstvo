'use client';

import { CONTACTS_DATA, HEADER_LINKS } from "@/constants";
import { Container } from "./container";
import Link from "next/link";
import { useScrollThreshold } from "@/hooks/useScrollThreshold";
import { cn } from "@/lib/utils";
import { AuthModal } from "./modals/auth-modal/auth-modal";
import { useEffect, useState } from "react";
import axios from "axios";
import { LogOutIcon, PackageCheck, SettingsIcon, UserRound } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useRouter } from "next/navigation";

export function Header() {
   const { isPassed } = useScrollThreshold(550);
   const [open, setOpen] = useState(false);
   const [user, setUser] = useState(null);
   const router = useRouter();

   useEffect(() => {
      axios.get('/api/auth/me')
         .then((res) => setUser(res.data))
         .catch(() => setUser(null));
   }, []);

   const handleLogOut = async () => {
      await axios.post('/api/auth/logout');
      setUser(null);
      router.refresh();
   };

   return (
      <>
         <header>
            <div className="border-b border-black/10">
               <Container className="flex items-center justify-between py-2">
                  <div className="flex gap-8 items-center">
                     {CONTACTS_DATA.map(({ icon: Icon, text: text, id, href }) => {
                        const isLink = Boolean(href);
                        const Tag = isLink ? 'a' : 'div';

                        return (
                           <Tag
                              key={id}
                              {...isLink ? { href } : {}}
                              className="flex gap-2 items-stretch text-foreground/30 text-[13px] hover:text-foreground transition-colors py-2">
                              <Icon size={15} className="shrink-0" />
                              <span>{text}</span>
                           </Tag>
                        )
                     }
                     )}
                  </div>

                  <div className="flex gap-6 items-center">
                     <a href="https://t.me/armanhik7" className="text-foreground/30 transition-colors hover:text-foreground">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-telegram" viewBox="0 0 16 16">
                           <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
                        </svg>
                     </a>
                     <a href="https://github.com/arman427" className="text-foreground/30 transition-colors hover:text-foreground">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                           <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                        </svg>
                     </a>
                  </div>
               </Container>
            </div>
            <div className="py-1">
               <Container className="flex items-center justify-between">
                  <Link href="/" className="italic text-3xl font-bold uppercase py-2">
                     Terra Travel
                  </Link>

                  <nav className="flex items-center">
                     {
                        HEADER_LINKS.map((link) => (
                           <Link key={link.text} href={link.href} className={`rounded-full text-[15px] py-3 px-4 transition-colors hover:text-accent`}>
                              {link.text}
                           </Link>
                        ))
                     }

                  </nav>

                  <AuthModal open={open} onClose={() => setOpen(false)} onLogin={(user) => setUser(user)} />
                  {
                     user ? (
                        <DropdownMenu modal={false}>
                           <DropdownMenuTrigger asChild>
                              <button className="py-2 px-4 rounded-full border border-accent/20 flex items-start gap-1 text-accent transition-colors hover:border-accent/70 group">
                                 <UserRound size={20} />
                                 <span className="text-[15px] text-accent/60 transition-colors group-hover:text-accent">Профиль</span>
                              </button>
                           </DropdownMenuTrigger>
                           <DropdownMenuContent className="bg-background">
                              <DropdownMenuItem>
                                 <SettingsIcon />
                                 Настройки
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                 <PackageCheck />
                                 Заказы
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem variant="destructive" onClick={handleLogOut}>
                                 <LogOutIcon />
                                 Выход
                              </DropdownMenuItem>
                           </DropdownMenuContent>
                        </DropdownMenu>
                     ) : (
                        <button onClick={() => setOpen(true)} className="text-[15px] border border-foreground/10 py-3 px-8 transition-colors hover:bg-accent hover:text-background active:translate-y-0.5">
                           Войти
                        </button>
                     )
                  }
               </Container>
            </div>
         </header>
         <div
            className={cn(
               'mt-3 fixed top-4 left-0 right-0 z-50 flex justify-center',
               'transition-transform duration-600 ease-in-out',
               isPassed
                  ? 'translate-y-0'
                  : '-translate-y-50'
            )}
         >
            <nav className="flex items-center backdrop-blur-xl bg-white/5 border border-white/10 rounded-full px-2 shadow-sm py-3 px-8">
               {HEADER_LINKS.map((link) => (
                  <Link
                     key={link.text}
                     href={link.href}
                     className="rounded-full text-[15px] py-2 px-4 transition-all hover:-translate-y-0.5 hover:text-accent"
                  >
                     {link.text}
                  </Link>
               ))}
            </nav>
         </div>
      </>
   )
}