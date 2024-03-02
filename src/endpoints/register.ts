import { RegisterType } from "@/constants/types";

export default async function register(registerData: RegisterType) {
	console.log(`endpoint: ${import.meta.env.VITE_BACKEND_URL}/register`);

	console.log(`register data ::: ${JSON.stringify(registerData, null, 2)}`);

	const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/register`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(registerData),
	});

	const data = await response.json();

	if (response.ok) {
		return {
			success: true,
			message: data.message as string,
		};
	}

	console.log(`the error data ::: ${JSON.stringify(data, null, 2)}`);

	return {
		success: false,
		message:
			(data.message as string) ??
			"Cannot create your again, please try again later.",
	};
}
