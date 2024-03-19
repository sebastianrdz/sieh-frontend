import { IProject } from "./schema";

export const projects: IProject[] = [
  {
    id: "1",
    name: "jumex",
    status: "Activo",
    startDate: new Date(),
    endDate: new Date(),
    description: "Deploy your new project in one-click.",
  },
  {
    id: "2",
    name: "cemex",
    status: "Activo",
    startDate: new Date(),
    endDate: new Date(),
    description: "Deploy your new project in one-click.",
  },
  {
    id: "3",
    name: "amazon",
    status: "Cotizacion",
    startDate: new Date(),
    endDate: new Date(),
    description: "Deploy your new project in one-click.",
  },
  {
    id: "4",
    name: "google",
    status: "Cotizacion",
    startDate: new Date(),
    endDate: new Date(),
    description: "Deploy your new project in one-click.",
  },
  {
    id: "5",
    name: "meta",
    status: "Terminado",
    startDate: new Date(),
    endDate: new Date(),
    description: "Deploy your new project in one-click.",
  },
];

export const filterDropdownValues = [
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
