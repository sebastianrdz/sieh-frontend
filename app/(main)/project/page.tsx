"use client";
import { Icons } from "@/components/assets/icons";
import { Button } from "@/components/ui/button";
import { Card, CardDescription } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import ProjectCard from "./components/project-card";
import { IProject } from "./data/schema";
import { filterDropdownValues } from "./data/data";
import { NewProjectDialog } from "./components/new-project-dialog";
import { projects } from "./data/seed";

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
      <h1 className="p-5">PROYECTOS</h1>
      <section className="p-5">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="flex justify-start">
              <Button className="gap-1 shadow-lg" variant="outline">
                <p className="font-bold">{filter}</p>
                <Icons.chevronDown />
              </Button>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-36">
            <DropdownMenuGroup>
              {filterDropdownValues.map((value, index) => {
                return (
                  <DropdownMenuItem
                    key={index}
                    onClick={() => setFilter(value.name)}
                  >
                    <p>{value.name}</p>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </section>

      <section className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 overflow-scroll">
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
