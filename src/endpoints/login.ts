import { LoginType } from "@/constants/types";

export default async function login(loginData: LoginType) {
	const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/login`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(loginData),
	});

	const data = await response.json();
	if (response.ok) {
		return {
			success: true,
			message: data.message as string,
		};
	}

	return {
		success: false,
		message: (data.message as string) ?? "Cannot login please try again",
	};
}
