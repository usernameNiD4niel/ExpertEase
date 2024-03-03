import { AddCustomerType } from "@/constants/types";

export default async function patchCustomer(
	id: string,
	customerPatch: AddCustomerType,
) {
	const response = await fetch(
		`${import.meta.env.VITE_BACKEND_URL}/api/customer/${id}`,
		{
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(customerPatch),
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
