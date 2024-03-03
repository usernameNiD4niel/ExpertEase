import { AddCustomerType } from "@/constants/types";

export default async function getCustomer(id: string) {
	const response = await fetch(
		`${import.meta.env.VITE_BACKEND_URL}/api/customer/${id}`,
		{
			headers: {
				"Content-Type": "application/json",
			},
		},
	);

	if (response.ok) {
		const data: AddCustomerType = await response.json();
		return data;
	}

	return {} as AddCustomerType;
}
