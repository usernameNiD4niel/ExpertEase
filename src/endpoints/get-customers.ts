import { CustomersType } from "@/constants/types";

export default async function getCustomers() {
	const response = await fetch(
		`${import.meta.env.VITE_BACKEND_URL}/api/customer`,
		{
			headers: {
				"Content-Type": "application/json",
			},
		},
	);

	if (response.ok) {
		const data = await response.json();
		return data as CustomersType;
	}

	return {} as CustomersType;
}
