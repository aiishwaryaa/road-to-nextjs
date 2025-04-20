// Middleware is a function that runs between request and response.
// It can change, check, or stop the request — like checking if the user is logged in.
// In Next.js, we write it in a file called middleware.ts or middleware.js in the root folder.
// Where is it used?
// It is used for login checks, redirects, logging, user role access, etc.
// Example: If the user is not logged in, middleware can send them to the /login page.

import { NextResponse } from "next/server";

// This is the middleware function
export default function Middleware(request) {
    console.log("Middleware");

    // If we want to redirect all routes to the login page first
    // if (request.nextUrl.pathname !== '/login') {
    //     return NextResponse.redirect(new URL('/login', request.url))
    // }

    // If we want to redirect only specific routes
    return NextResponse.redirect(new URL('/login', request.url))
}

// This config tells which routes should use this middleware
export const config = {
    matcher: ["/aboutcollege/:path*", "/studentlist/:path*"]
}
