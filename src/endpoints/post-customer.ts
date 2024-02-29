import { AddCustomerType } from "@/constants/types";

export default async function postCustomer(customerData: AddCustomerType) {
	const response = await fetch(
		`${process.env.REACT_VITE_BACKEND_URL}/api/customer/add`,
		{
			headers: {
				"Content-Type": "application/json",
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
