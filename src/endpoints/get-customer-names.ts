import Cookies from "js-cookie";

export default async function getCustomerNames() {
	const access_token_cookie = Cookies.get("access_token_cookie");

	const response = await fetch(
		`${import.meta.env.VITE_BACKEND_URL}/api/customers/names`,
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
		return data.customers as string[];
	}

	return [];
}
