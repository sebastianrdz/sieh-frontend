import { z } from "zod"

export const proposalElementSchema = z.object({
  id: z.string(),
  description: z.string(),
  price: z.number(),
  stage: z.string(),
})

export type IProposalElement = z.infer<typeof proposalElementSchema>
