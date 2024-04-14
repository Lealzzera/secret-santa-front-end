import getCookies from "@/actions/getCookies";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
	const cpf = await getCookies("cpf");
	if (!cpf) console.log(NextResponse.redirect(new URL("/", request.url)));
}
