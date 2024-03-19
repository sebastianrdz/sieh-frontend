import { z } from "zod"

export const projectSchema = z.object({
  id: z.string(),
  name: z.string(),
  status: z.enum(["Activo", "Terminado", "Cotizacion"]),
  startDate: z.string(),
  endDate: z.string(),
  description: z.string(),
})

export type IProject = z.infer<typeof projectSchema>