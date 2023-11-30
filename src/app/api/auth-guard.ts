import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'

export async function authGuard(req: NextRequest) {
  const token = await getToken({ req })
  if (!token?.isAdmin) {
    return NextResponse.json({ message: 'unauthorized' }, { status: 401 })
  }
}
