import { AddCustomerType } from "@/constants/types";

export default async function postCustomer(customerData: AddCustomerType) {
	const response = await fetch(
		`${import.meta.env.VITE_BACKEND_URL}/api/customer/add`,
		{
			headers: {
				"Content-Type": "application/json",
				Authorization:
					"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcxMDUxMDY5NSwianRpIjoiYTBiNDZjZjUtODg5Yy00ZjExLTllM2YtMWY3MjMwOTY4OTcyIiwidHlwZSI6InJlZnJlc2giLCJzdWIiOnsidXNlcl9pZCI6NiwiZXhwIjoiU3VuLCAxNCBBcHIgMjAyNCAxMzo1MTozNSBHTVQifSwibmJmIjoxNzEwNTEwNjk1LCJleHAiOjE3MTMxMDI2OTV9.tMYke3nPJ2nanI7HQbJ5Sh7uKiCNQjkBNHEOHELRiTc",
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
