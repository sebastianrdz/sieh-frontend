import { ThemeToggle } from "@/components/ThemeToggle";
import React from "react";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { englishRoleToSpanish } from "@/lib/utils";

export default async function SettingsPage() {
  const session = await getServerSession(options);

  return (
    <div>
      <h1 className="px-5 py-5">AJUSTES</h1>
      <section className="flex p-5 gap-2.5">
        <h2 className="w-[200px] font-bold">Perfil</h2>
        <span className="bg-primary bg min-w-0.5" />
        <div className="flex gap-5 flex-col">
          <div>
            <p>Nombre</p>
            <p className="font-bold">{session?.user?.name}</p>
          </div>
          <div>
            <p>Correo</p>
            <p className="font-bold">{session?.user?.name}</p>
          </div>
          <div>
            <p>Contrasena</p>
            <p className="font-bold">•••••</p>
          </div>
          <div>
            <p>Permisos</p>
            <div className="flex gap-2.5">
              {session?.user?.roles?.map((role: string, index: number) => {
                return (
                  <p key={index} className="font-bold">
                    {englishRoleToSpanish(role)}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="flex p-5 gap-2.5">
        <h2 className="w-[200px] font-bold">Preferencias</h2>
        <span className="bg-primary bg min-w-0.5" />
        <div className="flex gap-5 flex-col">
          <div>
            <p>Tematica</p>
            <ThemeToggle />
          </div>
          <div>
            <p>Notificaciones</p>
            <p className="font-bold">Desactivadas</p>
          </div>
        </div>
      </section>
    </div>
  );
}
