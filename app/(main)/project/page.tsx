"use client";
import { Icons } from "@/components/assets/icons";
import { Card, CardDescription } from "@/components/ui/card";
import { useEffect, useState } from "react";
import ProjectCard from "./components/project-card";
import { IProject } from "./data/schema";
import { NewProjectDialog } from "./components/new-project-dialog";
import { projects } from "./data/seed";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string>("Todo");
  const [open, setOpen] = useState<boolean>(false);
  const [filteredProjects, setFilteredProjects] =
    useState<IProject[]>(projects);

  useEffect(() => {
    const temp: IProject[] = projects.filter((project) => {
      if (filter === "Todo") return true;
      else return project.status === filter;
    });
    setFilteredProjects(temp);
  }, [filter]);

  return (
    <>
      <section className="px-5 py-2.5">
        <Select onValueChange={setFilter} defaultValue={"Todo"}>
          <SelectTrigger className="w-fit gap-2.5">
            <SelectValue placeholder="Seleciona una status" />
          </SelectTrigger>
          <SelectContent side="bottom">
            {["Todo", "Activo", "Terminado", "Cotizacion"].map((stage) => (
              <SelectItem key={stage} value={`${stage}`}>
                {stage}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </section>

      <section className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            setData={setFilteredProjects}
          />
        ))}
        <Card
          onClick={() => setOpen(true)}
          className="w-fill cursor-pointer min-h-[198px] max-h-[198px]  shadow-none border-dashed"
        >
          <CardDescription className="h-full font-bold flex flex-col justify-center items-center">
            Nuevo Proyecto
            <Icons.plus />
          </CardDescription>
        </Card>
      </section>

      <NewProjectDialog
        open={open}
        setOpen={setOpen}
        setData={setFilteredProjects}
      />
    </>
  );
}
