import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  url.pathname = "/triibeindex";
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: "/index",
};
