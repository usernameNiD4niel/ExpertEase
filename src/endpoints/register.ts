import { RegisterType } from "@/constants/types";

export default async function register(registerData: RegisterType) {
	const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/register`, {
		headers: {
			"Content-Type": "application/json",
		},
		method: "POST",
		body: JSON.stringify(registerData),
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
		message:
			(data.message as string) ??
			"Cannot create your again, please try again later.",
	};
}
