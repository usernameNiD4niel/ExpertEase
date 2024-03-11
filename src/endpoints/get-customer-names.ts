export default async function getCustomerNames() {
	const response = await fetch(
		`${import.meta.env.VITE_BACKEND_URL}/api/customers/names`,
		{
			headers: {
				"Content-Type": "application/json",
			},
		},
	);

	if (response.ok) {
		const data = await response.json();
		return data.customers as string[];
	}

	return [];
}
