"use server";

import { cookies } from "next/headers";

export default async function getCookies(key: string) {
	return cookies().get(key);
}
