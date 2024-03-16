import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ProjectCardProps {
  project: IProject;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { id, name, status, date } = project;

  return (
    <Link key={id} href={`project/${name}/proposal`} className="h-fit">
      <Card className="w-fill cursor-pointer h-[150px]">
        <CardHeader>
          <div className="flex gap-1 align-middle">
            <CardTitle className="uppercase">{name}</CardTitle>
            <Badge className="gap-1" variant="outline">
              <span className={cn("w-2 h-2 rounded", getStatusColor(status))} />
              {status}
            </Badge>
          </div>
          <CardDescription>{date}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
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
