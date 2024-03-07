import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getAllProjects } from "@/services/projects";
import Link from "next/link";

interface ProjectProps {
  params: { projectId: string };
}

export default function Project({ params }: ProjectProps) {
  return (
    <section>
      <div className="p-5 flex items-center gap-2.5 font-bold uppercase">
        <Link href="/projects">Proyectos</Link>
        <h3>/</h3>
        <h1>{params.projectId}</h1>
      </div>
      <Tabs defaultValue="cotizacion" className="">
        <TabsList className=" w-full justify-start border-b-4 border-primary bg-transparent h-[50px]">
          <TabsTrigger value="cotizacion">Cotizacion</TabsTrigger>
          <TabsTrigger value="tareas">Tareas</TabsTrigger>
          <TabsTrigger value="expediente">Expediente</TabsTrigger>
          <div className="border flex ml-auto gap-2.5">
            <Button variant="outline">Cotizacion</Button>
            <Button variant="outline">Nuevo Apartado</Button>
            <Button variant="outline">Exportar</Button>
          </div>
        </TabsList>
        <div className="px-5">
          <TabsContent value="cotizacion">Cotizacion</TabsContent>
          <TabsContent value="tareas">Tareas</TabsContent>
          <TabsContent value="expediente">Expediente</TabsContent>
        </div>
      </Tabs>
    </section>
  );
}
