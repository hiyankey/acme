import { prisma } from "../lib/db";

async function getUserEmail() {
	const user = await prisma.user.findUnique({
		where: {
			email: "hi@email.xyz",
		},
	});
	return user?.email;
}

export async function GET() {
	try {
		return Response.json(await getUserEmail());
	} catch (error) {
		return Response.json({ error }, { status: 500 });
	}
}
