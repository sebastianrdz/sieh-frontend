import { fa, faker } from "@faker-js/faker"
import { IProject } from "./schema"

export const projects: IProject[] = Array.from({ length: 10 }, () => ({
  id: `PR-${faker.number.int({ min: 1000, max: 9999 })}`,
  name: faker.company.name(),
  status: faker.helpers.arrayElement(["Activo" , "Terminado" , "Cotizacion"]),
  startDate: faker.date.recent(),
  endDate: faker.date.future({years: 1}),
  description: faker.lorem.paragraph(),
}))
