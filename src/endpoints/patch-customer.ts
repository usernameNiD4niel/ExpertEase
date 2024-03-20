import { AddCustomerType } from "@/constants/types";
import Cookies from "js-cookie";

export default async function patchCustomer({
	id,
	customerPatch,
}: {
	id: string;
	customerPatch: AddCustomerType;
}) {
	const access_token_cookie = Cookies.get("access_token_cookie");

	const response = await fetch(
		`${import.meta.env.VITE_BACKEND_URL}/api/customer/${id}`,
		{
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${access_token_cookie}`,
			},
			body: JSON.stringify(customerPatch),
			credentials: "include",
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
		message:
			(data.message as string) ??
			"Cannot update the customer, please try again",
	};
}
