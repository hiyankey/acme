"use server";
import { z } from "zod";
import { prisma } from "./db";
import { revalidatePath } from "next/cache";

const emailSchema = z.string().email();

export const handleJoinWaitlist = async (formData: FormData) => {
	const rawData = formData.get("email");
	const parsedEmail = emailSchema.safeParse(rawData);

	if (!parsedEmail.success) {
		throw new Error("Invalid email format");
	}
	const userEmail = await prisma.user.findUnique({
		where: {
			email: parsedEmail.data,
		},
	});
	revalidatePath("/");
};
