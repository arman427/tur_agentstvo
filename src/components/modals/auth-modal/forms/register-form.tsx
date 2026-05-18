import { Input } from "@/components/ui/input";
import { useForm } from 'react-hook-form';
import { formRegisterSchema, TFormRegisterValues } from "./schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { toast } from "react-hot-toast";
import { IMaskInput } from 'react-imask';

interface Props {
   className?: string
   onClose: () => void
   onLogin: (user: any) => void
}

export function RegisterForm({ className, onClose, onLogin }: Props) {
   const form = useForm<TFormRegisterValues>({
      resolver: zodResolver(formRegisterSchema),
      defaultValues: {
         fullName: "",
         email: "",
         phone: "",
         password: "",
      }
   });

   const onSubmit = async (data: TFormRegisterValues) => {
      try {
         const response = await axios.post('/api/auth/register', data);
         toast.success("Вы успешно зарегистрировались");
         onLogin(response.data.user);
         onClose();
      } catch (error) {
         if (axios.isAxiosError(error)) {
            const message = error.response?.data.error || "Ошибка при регистрации";
            toast.error(message);
         } else {
            toast.error("Неизвестная ошибка");
         }
      }
   }

   return (
      <div>
         <h1 className="text-2xl font-bold mb-3">Начните свое путешествие</h1>
         <p className="text-[#5d4543]">Создайте учетную запись, чтобы получить доступ к эксклюзивным туристическим предложениям.</p>

         <form className="mt-5 grid gap-5" onSubmit={form.handleSubmit(onSubmit)}>
            <div>
               <label htmlFor="" className="mb-10">Полное имя</label>
               <Input type="text" placeholder="Иван Иванов" className="placeholder:text-gray-400 placeholder:text-base h-13 text-lg" {...form.register("fullName")} />
               {form.formState.errors.fullName && <p className="text-red-500 text-sm">{form.formState.errors.fullName.message}</p>}
            </div>
            <div>
               <label htmlFor="" className="">E-Mail</label>
               <Input type="email" placeholder="ivanivanov123@gmail.com" className="placeholder:text-gray-400 placeholder:text-base h-13 text-lg" {...form.register("email")} />
               {form.formState.errors.email && <p className="text-red-500 text-sm">{form.formState.errors.email.message}</p>}
            </div>
            <div>
               <label htmlFor="" className="">Номер телефона</label>
               <IMaskInput mask="+{7} (000) 000-00-00" placeholder="+7 (999) 999-99-99" className="placeholder:text-gray-400 placeholder:text-base h-13 text-lg h-9 w-full min-w-0 rounded-md px-3 py-1 shadow-xs transition-all outline-none border border-black/20 bg-transparent focus-visible:border-gray-500 focus-visible:ring-[1px] focus-visible:ring-gray-500 disabled:pointer-events-none disabled:opacity-50" onAccept={(value) => form.setValue("phone", String(value), { shouldValidate: true })} />
               {form.formState.errors.phone && <p className="text-red-500 text-sm">{form.formState.errors.phone.message}</p>}
            </div>
            <div>
               <label htmlFor="" className="">Пароль</label>
               <Input type="password" placeholder="********" className="placeholder:text-gray-400 placeholder:text-base h-13 text-lg" {...form.register("password")} />
               {form.formState.errors.password && <p className="text-red-500 text-sm">{form.formState.errors.password.message}</p>}
            </div>

            <button type="submit" className="bg-accent h-13 text-background text-lg active:translate-y-0.5">Создать аккаунт</button>
         </form>
      </div>
   );
}