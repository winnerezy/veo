import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { BACKEND_URL } from "./lib";

export const middleware = async (req: NextRequest) => {
  const token = req.cookies.get("jwt")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const res = await fetch(`${BACKEND_URL}/api/v1/auth/verify-token`, {
    method: "POST",
    body: JSON.stringify({
      token,
    }),
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const isTokenValid: boolean = await res.json();

  if (!isTokenValid) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/home", "/settings", "/polls/:path*"],
};
