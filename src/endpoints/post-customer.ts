import { AddCustomerType } from "@/constants/types";

export default async function postCustomer(customerData: AddCustomerType) {
	const response = await fetch(
		`${import.meta.env.VITE_BACKEND_URL}/api/customer/add`,
		{
			headers: {
				"Content-Type": "application/json",
				"API-Key":
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcxMDUxMDY5NSwianRpIjoiMzA5NGYyOGMtN2E5ZS00MTdjLWEzMzAtNDU2NmNmMWE1ZWQ3IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6eyJ1c2VyX2lkIjo2LCJleHAiOiJTdW4sIDE0IEFwciAyMDI0IDEzOjUxOjM1IEdNVCJ9LCJuYmYiOjE3MTA1MTA2OTUsImV4cCI6MTcxMDUzOTQ5NX0.PF6RP1BHSF0PkQVcYBEmBvnDzTnv3DbTS89Kl227cHg",
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
