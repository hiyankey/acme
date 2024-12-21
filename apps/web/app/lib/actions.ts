"use server"


import { revalidatePath } from "next/cache"
import prisma from "./db"
import z from "zod"

const CreateUserSchema = z.object({
    email: z.string().email({ message: 'Insert valid email' }),
    profile: z.object({
        name: z.string(),
        created_at: z.date()
    })
})
const DeleteUserSchema = z.object({
    id: z.coerce.number()
})

export async function createUser(formData: FormData) {
    const data = CreateUserSchema.parse({
        email: formData.get('email'),
        profile: {
            name: formData.get('name'),
            createdAt: new Date()
        }
    })
    await prisma.user.create({
        data: {
            email: data.email,
            profile: {
                create: {
                    name: data.profile.name,
                    createdAt: data.profile.createdAt
                }
            }
        }
    })
    await revalidatePath('/')

}
export async function deleteUser(formData: FormData) {
    const data = DeleteUserSchema.parse({
        id: formData.get('id'),

    })
    await prisma.user.delete({
        where: {
            id: +data.id as number,

        }
    })

    await revalidatePath('/')
}
