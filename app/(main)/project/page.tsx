import { Icons } from "@/components/assets/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Input } from "postcss";

const projects = [
  {
    name: "Jumex",
    description: "Ene 17 - Mar 3",
  },
  {
    name: "Jumex",
    description: "Ene 17 - Mar 3",
  },
  {
    name: "Jumex",
    description: "Ene 17 - Mar 3",
  },
  {
    name: "Jumex",
    description: "Ene 17 - Mar 3",
  },
  {
    name: "Jumex",
    description: "Ene 17 - Mar 3",
  },
  {
    name: "Jumex",
    description: "Deploy your new project in one-click.",
  },
  {
    name: "Jumex",
    description: "Deploy your new project in one-click.",
  },
  {
    name: "Jumex",
    description: "Deploy your new project in one-click.",
  },
  {
    name: "Jumex",
    description: "Deploy your new project in one-click.",
  },
];

export default async function ProjectPage() {
  return (
    <div>
      <h1 className="px-5 py-5">PROYECTOS</h1>
      <section className="p-5">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button className="gap-1" variant="ghost">
              <p className="font-bold">Todos</p>
              <Icons.ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-36 ml-9">
            <DropdownMenuLabel>Filtro</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup className="font-bold">
              <DropdownMenuItem>
                <p>Activo</p>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <p>Terminado</p>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <p>Cotizacion</p>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </section>
      <section className="p-5 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {projects.map((project, index) => (
          <Card key={index} className="w-fill ">
            <CardHeader>
              <div className="flex gap-1">
                <CardTitle>{project.name}</CardTitle>
                <Badge className="gap-1" variant="outline">
                  <span className="w-2 h-2 bg-green-500 rounded" />
                  Activo
                </Badge>
              </div>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent></CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>Deploy</Button>
            </CardFooter>
          </Card>
        ))}
      </section>
    </div>
  );
}
