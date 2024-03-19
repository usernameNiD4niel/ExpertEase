import { AddCustomerType } from "@/constants/types";
import Cookies from "js-cookie";

export default async function getCustomer(id: string) {
	const access_token_cookie = Cookies.get("access_token_cookie");

	const response = await fetch(
		`${import.meta.env.VITE_BACKEND_URL}/api/customer/${id}`,
		{
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${access_token_cookie}`,
			},
			credentials: "include",
		},
	);

	if (response.ok) {
		const data: AddCustomerType = await response.json();
		return data;
	}

	return {} as AddCustomerType;
}
