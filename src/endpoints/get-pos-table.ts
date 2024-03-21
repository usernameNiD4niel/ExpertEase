import Cookies from "js-cookie";

// * customerId = customer tagged
// * module = services or products
// * TData = ServicesType or ProductsType

export default async function getPOSTable<TData>(
	customerId: string,
	module: string,
) {
	const access_token_cookie = Cookies.get("access_token_cookie");

	const response = await fetch(
		`${import.meta.env.VITE_BACKEND_URL}/api/pos/${module}/${customerId}`,
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
		return data as TData;
	}

	return {} as TData;
}
