import { z } from "zod"

const broker = z.object({
    id: z.number(),
    name: z.string()
})

export const brokers = z.array(broker);