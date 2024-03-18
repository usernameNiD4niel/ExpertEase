import { CustomersType } from "@/constants/types";
import Cookies from "js-cookie";

export default async function getCustomers() {
	const access_token_cookie = Cookies.get("access_token_cookie");

	console.log(`access token cookie ${access_token_cookie}`);

	const response = await fetch(
		`${import.meta.env.VITE_BACKEND_URL}/api/customer`,
		{
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${access_token_cookie}`,
			},
		},
	);

	if (response.ok) {
		const data = await response.json();
		return data as CustomersType;
	}

	return {} as CustomersType;
}
