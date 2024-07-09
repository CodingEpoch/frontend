import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function middleware(req) {
  const cookie = cookies(req);
  const token = cookie.get('token');

  if (!token) {
    return NextResponse.redirect(new URL('/auth', req.url)); // Redirect to auth page if not authenticated
  }

  return NextResponse.next(); // Continue to the requested page if authenticated
}

// Define the paths that the middleware should run on
export const config = {
  matcher: ['/'], // Adjust the matcher to include paths where you want to enforce authentication
};
