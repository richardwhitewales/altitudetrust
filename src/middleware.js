const { NextResponse } = require("next/server");

export default function middleware(req) {
    let verify = req.cookies.get("ALLoggedIn");
    let url = req.url;

    if (req.nextUrl.pathname.startsWith("/_next")) {
        return NextResponse.next();
    }

    if (!verify && url.includes("/dashboard")) {
        return NextResponse.redirect(new URL("/auth/login", url));
    }

    if (verify && url.includes("/auth")) {
        return NextResponse.redirect(new URL("/dashboard/user", url));
    }
}