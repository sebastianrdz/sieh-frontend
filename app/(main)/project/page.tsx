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

const getStatusColor = (status: Status) => {
  switch (status) {
    case "Activo":
      return "bg-green-500";
    case "Terminado":
      return "bg-red-500";
    case "Cotizacion":
      return "bg-primary";
  }
};

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
    <div>
      <h1 className="px-5 py-5">PROYECTOS</h1>
      <section className="p-5">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="w-36 flex justify-start">
              <Button className="gap-1 shadow-lg" variant="outline">
                <p className="font-bold">{filter}</p>
                <Icons.ChevronDown />
              </Button>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-36">
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

      <section className="p-5 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {filteredProjects.map((project) => (
          <Link key={project.id} href={`project/${project.name}/proposal`}>
            <Card className="w-fill cursor-pointer min-h-[150px]">
              <CardHeader>
                <div className="flex gap-1 align-middle">
                  <CardTitle className="uppercase">{project.name}</CardTitle>
                  <Badge className="gap-1" variant="outline">
                    <span
                      className={`w-2 h-2 ${getStatusColor(
                        project.status
                      )} rounded`}
                    />
                    {project.status}
                  </Badge>
                </div>
                <CardDescription>{project.date}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
        <Card className="w-fill cursor-pointer min-h-[150px] shadow-none border-dashed">
          <CardDescription className="h-full font-bold flex flex-col justify-center items-center">
            Nuevo Proyecto
            <Icons.Plus />
          </CardDescription>
        </Card>
      </section>
    </div>
  );
}
