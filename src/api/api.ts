import { req } from "@/api/axios";

export const getUserEvent = async () => {
	const response = await req.get("/events/9/search?cpf=24577800001");
	return response;
};
