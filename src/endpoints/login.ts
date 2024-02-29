import { LoginType } from "@/constants/types";

export default async function login(loginData: LoginType) {
	console.log("asdsad", import.meta.env.VITE_BACKEND_URL);

	const response = await fetch(
		`https://vetshop-service.gi2fod26lfct0.ap-southeast-1.cs.amazonlightsail.com/login`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(loginData),
		},
	);

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
