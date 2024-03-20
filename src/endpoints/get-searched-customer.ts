import { Customer } from "@/constants/types";
import Cookies from "js-cookie";

export default async function getSearchedCustomer(name: string) {
	const access_token_cookie = Cookies.get("access_token_cookie");

	const response = await fetch(
		`${import.meta.env.VITE_BACKEND_URL}/api/pos?customer=${name}`,
		{
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${access_token_cookie}`,
			},
			credentials: "include",
		},
	);

	if (response.ok) {
		const data = await response.json();
		return data.customer as Customer;
	}

	return {} as Customer;
}
