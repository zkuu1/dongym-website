// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Jangan gunakan Prisma langsung di middleware
  // ...
  // 
}