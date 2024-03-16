import fs from "fs"
import path from "path"
import { faker } from "@faker-js/faker"

const tasks = Array.from({ length: 100 }, () => ({
  id: `PE-${faker.number.int({ min: 1000, max: 9999 })}`,
  title: faker.hacker.phrase().replace(/^./, (letter) => letter.toUpperCase()),
  description: faker.lorem.paragraph(),
  price: faker.finance.amount(),
  stage: faker.helpers.arrayElement(["Etapa 1", "Etapa 2", "Etapa 3", "Etapa 4"]),
}))

export async function generateProposalElements() {
  fs.writeFileSync(
    path.join(__dirname, "proposalElements.json"),
    JSON.stringify(tasks, null, 2)
  )
  console.log(__dirname)
  console.log("✅ PrposalElements data generated at ", __dirname, "proposalElements.json")
}