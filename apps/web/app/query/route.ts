import prisma from "../lib/db"

async function getUsers() {
    const users = await prisma.user.findMany({
        include: {
            profile: true
        }
    })

    return users
}

export async function GET() {
    try {

        return Response.json(await getUsers())
    } catch (error) {
        return Response.json({ error }, { status: 500 })
    }

}