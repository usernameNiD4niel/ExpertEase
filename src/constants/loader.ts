import { getCustomer, getCustomers, getPOSTable } from "@/endpoints";
import Cookies from "js-cookie";
import { LoaderFunctionArgs, redirect } from "react-router-dom";

export async function appLoader() {
	const token = Cookies.get("access_token_cookie");
	if (!token) {
		return redirect("/login");
	}
	return null;
}

export async function servicesLoader({ request }: LoaderFunctionArgs) {
	const url = request.url.split("/");
	const customerId = url[1];

	return await getPOSTable(customerId, "services");
}

export async function productsLoader({ request }: LoaderFunctionArgs) {
	const url = request.url.split("/");
	const customerId = url[1];

	return await getPOSTable(customerId, "products");
}

export async function customerManagementLoader() {
	return await getCustomers();
}

export async function customerManagementListLoader({
	request,
}: LoaderFunctionArgs) {
	const url = request.url.split("/");
	const customerId = url[url.length - 1];

	return await getCustomer(customerId);
}
