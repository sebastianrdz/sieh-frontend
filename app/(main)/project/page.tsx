"use client";
import { Icons } from "@/components/assets/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import Link from "next/link";
import ProjectCard from "./project-card";

const projects: IProject[] = [
  {
    id: "1",
    name: "jumex",
    status: "Activo",
    date: "Ene 17 - Mar 3",
    description: "Deploy your new project in one-click.",
  },
  {
    id: "2",
    name: "cemex",
    status: "Activo",
    date: "Ene 17 - Mar 3",
    description: "Deploy your new project in one-click.",
  },
  {
    id: "3",
    name: "amazon",
    status: "Cotizacion",
    date: "Ene 17 - Mar 3",
    description: "Deploy your new project in one-click.",
  },
  {
    id: "4",
    name: "google",
    status: "Cotizacion",
    date: "Ene 17 - Mar 3",
    description: "Deploy your new project in one-click.",
  },
  {
    id: "5",
    name: "meta",
    status: "Terminado",
    date: "Ene 17 - Mar 3",
    description: "Deploy your new project in one-click.",
  },
];

const filterDropdownValues: IFilterDropdownValue[] = [
  {
    name: "Todo",
  },
  {
    name: "Activo",
  },
  {
    name: "Terminado",
  },
  {
    name: "Cotizacion",
  },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string>("Todo");
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
              {filterDropdownValues.map(
                (value: IFilterDropdownValue, index) => {
                  return (
                    <DropdownMenuItem
                      key={index}
                      onClick={() => setFilter(value.name)}
                    >
                      <p>{value.name}</p>
                    </DropdownMenuItem>
                  );
                }
              )}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </section>

      <section className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 overflow-scroll">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
        <Card className="w-fill cursor-pointer h-[150px] shadow-none border-dashed">
          <CardDescription className="h-full font-bold flex flex-col justify-center items-center">
            Nuevo Proyecto
            <Icons.plus />
          </CardDescription>
        </Card>
      </section>
    </>
  );
}
