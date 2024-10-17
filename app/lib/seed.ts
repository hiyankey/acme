import prisma from './db'

async function seedUsers() {
  await prisma.user.createMany({
    data: [
      {
        name: 'Alice',
        email: 'alice@email.com',
      },
      {
        name: 'Bob',
        email: 'bob@email.com',
      },
      {
        name: 'Charlie',
        email: 'charlie@email.com',
      },
      {
        name: 'Diana',
        email: 'diana@email.com',
      },
      {
        name: 'Eve',
        email: 'eve@email.com',
      },
    ],
  })
}

seedUsers()
