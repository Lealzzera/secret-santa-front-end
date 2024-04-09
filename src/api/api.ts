import { req } from "@/api/axios";

export const getUserEvent = async (idEvent: number, cpf: string) => {
	const response = await req.get(`/events/${idEvent}/search?cpf=${cpf}`);
	return response;
};
