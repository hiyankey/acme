import prisma from '@/app/lib/db'

async function seedUsers() {
  const users = await prisma.user.createMany({
    data: [
      { name: 'Delba', email: 'delba@email.com' },
      { name: 'Rauno', email: 'rauno@email.com' },
      { name: 'Emil', email: 'emil@email.com' },
      { name: 'Rauch', email: 'rauch@email.com' },
      { name: 'Daryl', email: 'daryl@email.com' },
    ],
    skipDuplicates: true,
  })

  return users
}
async function seedInboxes() {
  const users = await prisma.user.findMany()

  for (const user of users) {
    await prisma.inbox.create({
      data: {
        content: `Hi there, ${user.name}`,
        userId: user.id,
      },
    })
  }

  console.log('Inboxes seeded successfull')
}

export async function GET() {
  try {
    await Promise.all([seedInboxes(), seedUsers()])

    return Response.json({ message: 'Database seeded successfully' })
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}
