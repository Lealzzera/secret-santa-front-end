import axios from "axios";

export const req = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
	headers: {
		"Content-Type": "application/json",
	},
});
