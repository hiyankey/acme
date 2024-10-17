import { NextResponse } from 'next/server'
import { seedUsers } from './app/lib/seed'

export const config = {
  matcher: '/api/users',
}

export async function middleware() {
  try {
    const users = await seedUsers()
    return NextResponse.json(users)
  } catch (error) {
    console.error('Error fetching users:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
