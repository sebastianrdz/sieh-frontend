"use client";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { IProject } from "../data/schema";
import moment from "moment";
import { Icons } from "@/components/assets/icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NewProjectDialog } from "./new-project-dialog";
import { Dispatch, SetStateAction, useState } from "react";
import { NewProjectAlertDialog } from "./new-project-alert-dialog";
interface ProjectCardProps {
  project: IProject;
  setData: Dispatch<SetStateAction<IProject[]>>;
}

export default function ProjectCard({ project, setData }: ProjectCardProps) {
  const { id, name, status, startDate, endDate, description } = project;
  const [open, setOpen] = useState<boolean>(false);
  const [openAlert, setOpenAlert] = useState<boolean>(false);

  return (
    <>
      <Card className="flex flex-col w-fill  min-h-[198px] max-h-[198px] ">
        <CardHeader className="flex flex-row ">
          <div className="w-full space-y-2.5">
            <CardTitle className="uppercase line-clamp-1 w-full">
              {name}
            </CardTitle>
            <CardDescription className="text-nowrap">
              {moment(startDate, "YYYY-MM-DD HH:mm:ss Z").format("MMM Do")} -{" "}
              {moment(endDate, "YYYY-MM-DD HH:mm:ss Z").format("MMM Do")}
            </CardDescription>
            <Badge className="gap-1 h-fit w-fit" variant="outline">
              <span className={cn("w-2 h-2 rounded", getStatusColor(status))} />
              {status}
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="ml-auto space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="ghost">
                <Icons.edit width={16} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="pointer-events-auto">
              <DropdownMenuLabel>Acciones</DropdownMenuLabel>
              <DropdownMenuItem onClick={() => setOpen(true)}>
                <Icons.edit width={16} className="mr-2" />
                Editar
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setOpenAlert(true)}
                className="text-red-500 focus:text-red-500"
              >
                <Icons.trash width={16} className="mr-2" />
                Eliminar
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link key={id} href={`project/${id}/proposal`} className="h-fit">
            <Button variant="outline">ver</Button>
          </Link>
        </CardFooter>
      </Card>

      <NewProjectAlertDialog
        open={openAlert}
        setOpen={setOpenAlert}
        data={project}
        setData={setData}
      />

      <NewProjectDialog
        open={open}
        setOpen={setOpen}
        data={project}
        setData={setData}
      />
    </>
  );
}

export const getStatusColor = (status: Status) => {
  switch (status) {
    case "Activo":
      return "bg-green-500";
    case "Terminado":
      return "bg-red-500";
    case "Cotizacion":
      return "bg-primary";
  }
};
