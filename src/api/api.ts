import { req } from "@/api/axios";

export const getUserEvent = async (idEvent: number, cpf: string) => {
	try {
		const response = await req.get(`/events/${idEvent}/search?cpf=${cpf}`);
		return response.data;
	} catch (error) {
		return { error, status: 404 };
	}
};

export const getUserEventsByCPF = async (cpf: string | undefined) => {
	try {
		const response = await req.get(`/events-by-cpf/${cpf}`);
		return response.data;
	} catch (error) {
		return { error, status: 404 };
	}
};
