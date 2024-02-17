import { ThemeToggle } from "@/components/ThemeToggle";
import React from "react";
import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";

async function SettingsPage() {
  const session = await getSession();

  return (
    <div>
      <h1 className="px-5 py-5">AJUSTES</h1>
      <section className="flex p-5 gap-2.5">
        <h2 className="w-[200px] font-bold">Perfil</h2>
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

export default withPageAuthRequired(SettingsPage, { returnTo: "/settings" });
