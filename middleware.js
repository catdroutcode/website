// middleware.ts

import { NextResponse } from 'next/server';

// The country to block from accessing the secret page
const BLOCKED_COUNTRY = 'RU';

// Trigger this middleware to run on the `/secret-page` route
export const config = {
  matcher: '/',
};

export function middleware(req, NextRequest) {
  // Extract country. Default to null if not found.
  const country = (req.geo && req.geo.country);

  // Specify the correct route based on the requests location
  if (country === BLOCKED_COUNTRY) {
    req.nextUrl.pathname = '/404';
  } else {
    req.nextUrl.pathname = `/`;
  }

  // Rewrite to URL
  return NextResponse.rewrite(req.nextUrl);
}

console.log("sus")