import { Input } from "@/components/ui/input";
import { useForm } from 'react-hook-form';
import { formLoginSchema, TFormLoginValues } from "./schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { toast } from "react-hot-toast";
import Image from "next/image";

interface Props {
   className?: string
   onClose: () => void
   onLogin: (user: any) => void
}

export function LoginForm({ className, onClose, onLogin }: Props) {
   const form = useForm<TFormLoginValues>({
      resolver: zodResolver(formLoginSchema)
   });

   const onSubmit = async (data: TFormLoginValues) => {
      try {
         const response = await axios.post('/api/auth/login', data);
         toast.success("Вы успешно вошли");
         onLogin(response.data.user);
         onClose();
      } catch (error) {
         toast.error("Ошибка при входе. Попробуйте снова.");
         console.error(error);
      }
   }

   return (
      <div>
         <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold mb-3 w-60">Введите свою почту, чтобы войти.</h1>
            <Image
               src="/E-Mail.svg"
               alt="logo"
               width={70}
               height={70}
            />
         </div>

         <form className="mt-5 grid gap-5" onSubmit={form.handleSubmit(onSubmit)}>
            <div>
               <label htmlFor="" className="">E-Mail</label>
               <Input type="email" placeholder="ivanivanov123@gmail.com" className="placeholder:text-gray-400 placeholder:text-base h-13 text-lg" {...form.register("email")} />
               {form.formState.errors.email && <p className="text-red-500 text-sm">{form.formState.errors.email.message}</p>}
            </div>
            <div>
               <label htmlFor="" className="">Пароль</label>
               <Input type="password" placeholder="********" className="placeholder:text-gray-400 placeholder:text-base h-13 text-lg" {...form.register("password")} />
               {form.formState.errors.password && <p className="text-red-500 text-sm">{form.formState.errors.password.message}</p>}
            </div>

            <button type="submit" className="bg-accent h-13 text-background text-lg active:translate-y-0.5">Войти</button>
         </form>
      </div>
   );
}