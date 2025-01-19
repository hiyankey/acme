import { prisma } from "../lib/db";
import { useUser } from "@clerk/nextjs";
async function createUserSession() {
	const { user } = useUser();
	const email = user?.primaryEmailAddress?.emailAddress;
	if (!email) {
		throw new Error("Email is required!");
	}
	const newUser = await prisma.user.create({
		data: {
			email,
		},
	});
	return newUser;
}

export async function GET() {
	try {
		return Response.json(await createUserSession());
	} catch (error) {
		return Response.json({ error }, { status: 500 });
	}
}
