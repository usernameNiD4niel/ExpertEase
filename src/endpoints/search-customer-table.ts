import Cookies from "js-cookie";

export default async function searchCustomerTable<Customer>(
	searchQuery: string,
	column: string,
): Promise<Customer[]> {
	const access_token_cookie = Cookies.get("access_token_cookie");

	const response = await fetch(
		`${
			import.meta.env.VITE_BACKEND_URL
		}/api/customers/search?query=${searchQuery}&column=${column}`,
		{
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${access_token_cookie}`,
			},
			credentials: "include",
		},
	);

	if (response.ok) {
		const data = await response.json();
		return data.customers as Customer[];
	}

	return [];
}
