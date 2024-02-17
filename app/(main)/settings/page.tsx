import { ThemeToggle } from "@/components/ThemeToggle";
import React from "react";
import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";

async function SettingsPage() {
  const session = await getSession();
  console.log(session?.user);

  return (
    <div>
      <h2 className="text-bold font-bold text-xl px-5 py-5">AJUSTES</h2>
      <section className="flex p-5 gap-2.5">
        <p className="w-[200px] font-bold">Perfil</p>
        <span className="bg-primary bg min-w-0.5" />
        <div className="flex gap-5 flex-col">
          <div>
            <p>Nombre</p>
            <p className="font-bold">
              {session?.user ? session?.user.nickname : "indefinido*"}
            </p>
          </div>
          <div>
            <p>Correo</p>
            <p className="font-bold">
              {session?.user ? session?.user.email : "indefinido*"}
            </p>
          </div>
          <div>
            <p>Contrasena</p>
            <p className="font-bold">•••••</p>
          </div>
        </div>
      </section>
      <section className="flex p-5 gap-2.5">
        <p className="w-[200px] font-bold">Preferencias</p>
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

export default withPageAuthRequired(SettingsPage, { returnTo: "/settings" });
