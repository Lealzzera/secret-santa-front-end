"use server";
import { cookies } from "next/headers";

export default async function setCookies(key: string, value: string) {
	cookies().set(key, value, {
		httpOnly: true,
		secure: true,
		maxAge: 60 * 60 * 24,
	});
}
