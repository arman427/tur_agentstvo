import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "../../ui/dialog";
import { VisuallyHidden } from "radix-ui";
import { RegisterForm } from "./forms/register-form";
import { LoginForm } from "./forms/login-form";

interface Props {
   className?: string;
   open: boolean;
   onClose: () => void;
   onLogin: (user: any) => void
}

export function AuthModal({ className, open, onClose, onLogin }: Props) {
   const [type, setType] = useState<"login" | "register">("login");

   const handleToggle = () => {
      setType((prev) => (prev === "login" ? "register" : "login"));
   };

   const handleClose = () => {
      onClose();
   };

   return (
      <Dialog open={open} onOpenChange={handleClose}>
         <DialogContent
            className="w-140 bg-white p-10 border-none"
            aria-describedby={undefined}
         >
            {type === "login" ? (
               <LoginForm onClose={handleClose} onLogin={onLogin} />
            ) : (
               <RegisterForm onClose={handleClose} onLogin={onLogin} />
            )}

            <button
               onClick={handleToggle}
               className=""
               type="button"
            >
               {type === "login" ? "Нет аккаунта? Создать аккаунт" : "Уже есть аккаунт? Войти"}
            </button>




            <VisuallyHidden.Root>
               <DialogTitle></DialogTitle>
            </VisuallyHidden.Root>
         </DialogContent>
      </Dialog>
   );
}