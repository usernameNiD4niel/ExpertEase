export default async function searchPOSServicesTable<TData>(
	searchQuery: string,
	property: string,
): Promise<TData[]> {
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
		return data[property] as TData[];
	}

	return [];
}
