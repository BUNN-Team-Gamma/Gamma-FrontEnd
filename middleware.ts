import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  if (
    request.nextUrl.pathname.startsWith('/api/') ||
    request.nextUrl.pathname.startsWith('/_next/')
  ) {
    return NextResponse.next()
  }

  const token = request.cookies.get('userToken')?.value
  console.log(token)
  const allowedRoutes = ['/auth/login', '/auth/signup']
  const isRouteAllowed = allowedRoutes.some((prefix) => pathname.startsWith(prefix))

  // redirect to login if no token
  if (!token) {
    if (isRouteAllowed) {
      // check if path is allowed
      return NextResponse.next()
    }
    // if path is not allowed redirect to signin page
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }

  // redirect to home page if logged in
  if (isRouteAllowed && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }
}
 
export const config = {
  matcher: ['/dashboard/:path*'],
}