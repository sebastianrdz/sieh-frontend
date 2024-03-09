// // import React from "react";

// // interface Props {
// //   className?: string;
// // }

// // const Login = (props: Props) => {
// //   return <div>Login</div>;
// // };

// // export default Login;

// "use client";
// import React, { useRef } from "react";
// import Link from "next/link";
// import { signIn } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

// type Props = {
//   className?: string;
//   callbackUrl?: string;
//   error?: string;
// };

// const Login = (props: Props) => {
//   const router = useRouter();
//   const userName = useRef("");
//   const pass = useRef("");
//   const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
// e.preventDefault();
// const res = await signIn("credentials", {
//   email: userName.current,
//   password: pass.current,
//   redirect: false,
// });

//     if (!res?.error) {
//       router.push(props.callbackUrl ?? "http://localhost:3000");
//     }
//   };
//   return (
//     <div className={props.className}>
//       <div className="bg-gradient-to-b  from-slate-50 to-slate-200 p-2 text-center text-slate-600">
//         Login Form
//       </div>
//       {!!props.error && (
//         <p className="bg-red-100 text-red-600 text-center p-2">
//           Authentication Failed
//         </p>
//       )}
//       <form onSubmit={onSubmit} className="p-2 flex flex-col gap-3">
//         <Input
//           name="username"
//           // labelText="User Name"
//           onChange={(e) => (userName.current = e.target.value)}
//         />
//         <Input
//           name="password"
//           type="password"
//           // labelText="Password"
//           onChange={(e) => (pass.current = e.target.value)}
//         />
//         <div className="flex items-center justify-center mt-2 gap-2">
//           <Button type="submit" className="w-28">
//             Sign In
//           </Button>
//           <Link
//             href={props.callbackUrl ?? "/"}
//             className="w-28 border border-red-600 text-center py-2 rounded-md text-red-600 transition hover:bg-red-600 hover:text-white hover:border-transparent active:scale-95"
//           >
//             Cancel
//           </Link>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Icons } from "./assets/icons";
import os from "os";

type Props = {
  className?: string;
  callbackUrl?: string;
  error?: string;
};

const formSchema = z.object({
  email: z.string().refine(
    (email) => {
      return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(
        email ?? ""
      );
    },
    { message: "Correo invalido" }
  ),
  password: z
    .string()
    .min(5, { message: "Contraseña debe tener al menos 5 caracteres" }),
});

export default function Login(props: Props) {
  const router = useRouter();
  const hostname = os.hostname();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const res = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });
    if (!res?.error) {
      router.push(
        props.callbackUrl ?? hostname === "localhost"
          ? "http://localhost:3000"
          : "https://sieh-frontend-dev.vercel.app"
      );
    }
  }

  return (
    <section className="grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 w-screen h-screen border place-items-center">
      <Icons.logo className=" text-primary w-full h-full max-w-[400px] max-h-[400px] min-w-[300px] min-h-[300px] p-20" />
      <div className="min-w-[200px] max-w-[400px] w-full p-5 space-y-4">
        <h1 className="text-3xl font-bold">Iniciar Sesión</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Correo</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="correo@correo.com"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contraseña</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="contraseña"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" variant="default" className="w-full">
              Ingresar
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
