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
interface ProjectCardProps {
  project: IProject;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { id, name, status, startDate, endDate, description } = project;

  return (
    <Link key={id} href={`project/${id}/proposal`} className="h-fit">
      <Card className="flex flex-col w-fill cursor-pointer min-h-[198px] max-h-[198px] ">
        <CardHeader className="flex flex-row ">
          <div className="w-full">
            <CardTitle className="uppercase line-clamp-2 w-full">
              {name}
            </CardTitle>
            <div className="flex gap-2.5 items-center">
              <CardDescription className="text-nowrap">
                {moment(startDate, "YYYY-MM-DD HH:mm:ss Z").format("MMM Do")} -{" "}
                {moment(endDate, "YYYY-MM-DD HH:mm:ss Z").format("MMM Do")}
              </CardDescription>
              <Badge className="gap-1 h-fit w-fit" variant="outline">
                <span
                  className={cn("w-2 h-2 rounded", getStatusColor(status))}
                />
                {status}
              </Badge>
            </div>
          </div>
          <Button size="icon" variant="ghost">
            <Icons.moreVertical width={24} className="min-w-6" />
          </Button>
        </CardHeader>

        <CardContent>
          <div className="line-clamp-2">{description}</div>
        </CardContent>
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
