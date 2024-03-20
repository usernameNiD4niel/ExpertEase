import Cookies from "js-cookie";

export default async function searchPOSServicesTable<TData>(
	searchQuery: string,
	property: string, // services or products
): Promise<TData[]> {
	const access_token_cookie = Cookies.get("access_token_cookie");

	const response = await fetch(
		`${
			import.meta.env.VITE_BACKEND_URL
		}/api/pos/${property}/search?query=${searchQuery}`,
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
		return data[property] as TData[];
	}

	return [];
}
