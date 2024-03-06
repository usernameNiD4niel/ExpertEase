export default async function searchCustomerTable<Customer>(
	searchQuery: string,
): Promise<Customer[]> {
	const response = await fetch(
		`${
			import.meta.env.VITE_BACKEND_URL
		}/api/customers/search?query=${searchQuery}`,
		{
			headers: {
				"Content-Type": "application/json",
			},
		},
	);

	if (response.ok) {
		const data = await response.json();
		return data.customers as Customer[];
	}

	return [];
}
