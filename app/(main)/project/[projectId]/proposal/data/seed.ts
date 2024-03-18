import { faker } from "@faker-js/faker"

export const tasks = Array.from({ length: 72 }, () => ({
  id: `PE-${faker.number.int({ min: 1000, max: 9999 })}`,
  title: faker.hacker.phrase().replace(/^./, (letter) => letter.toUpperCase()),
  description: faker.lorem.paragraph(),
  price: Number(faker.finance.amount()),
  stage: faker.helpers.arrayElement(["Etapa 1", "Etapa 2", "Etapa 3", "Etapa 4"]),
}))
