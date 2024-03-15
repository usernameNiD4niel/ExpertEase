import { AddCustomerType } from "@/constants/types";
import Cookies from "js-cookie";

export default async function postCustomer(customerData: AddCustomerType) {
	const access_token_cookie = Cookies.get("access_token_cookie");

	console.log(`Bearer ${access_token_cookie}`);

	const response = await fetch(
		`${import.meta.env.VITE_BACKEND_URL}/api/customer/add`,
		{
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${access_token_cookie}`,
			},
			method: "POST",
			body: JSON.stringify(customerData),
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
		message: (data.message as string) ?? "Cannot create a customer data",
	};
}
