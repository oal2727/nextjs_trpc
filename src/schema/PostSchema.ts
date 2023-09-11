import { z } from "zod"

export const postSchema = z.object({
	title: z.string().min(1, { message: "Este campo es requerido" }),
	content: z.string().min(1, { message: "Este campo es requerido" }),
})


export type ICreatePostSchema = z.infer<typeof postSchema>;