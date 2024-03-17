import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
	createBrowserRouter,
	redirect,
	RouterProvider,
} from "react-router-dom";
import Login from "./authentication/login/page.tsx";
import Register from "./authentication/register/page.tsx";
import ThemeProvider from "@/components/provider/theme-provider.tsx";
import { Toaster } from "./components/ui/sonner";
import Analytics from "./analytics/page.tsx";
import PointOfSalePage from "./point-of-sale/page.tsx";
import Services from "./point-of-sale/services/page.tsx";
import Module from "./point-of-sale/module/page.tsx";
import CustomerPage from "./customer/page.tsx";
import CustomerList from "./customer/list/page.tsx";
import Personal from "./customer/add/personal/page.tsx";
import CustomerDetailsItems from "./customer/customer-details/customer-details-items.tsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import getCustomers from "./endpoints/get-customers.ts";
import getCustomer from "./endpoints/get-customer.ts";
import ModuleServices from "./point-of-sale/module/services/page.tsx";
import Products from "./point-of-sale/products/page.tsx";
import Cookies from "js-cookie";
import ModuleProducts from "./point-of-sale/module/products/page.tsx";
import CartPage from "./point-of-sale/cart/page.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		loader: async () => {
			const token = Cookies.get("access_token_cookie");
			if (!token) {
				return redirect("/login");
			}
			return null;
		},
		children: [
			{
				path: "/",
				index: true,
				element: <Analytics />,
			},
			{
				path: "/point-of-sale",
				element: <PointOfSalePage />,
			},
			{
				path: "/point-of-sale/module",
				element: <Module />,
				children: [
					{
						path: "services",
						element: <Services />,
					},
					{
						path: "products",
						element: <Products />,
					},
				],
			},
			{
				path: "/point-of-sale/module/services/:id",
				element: <ModuleServices />,
			},
			{
				path: "/point-of-sale/module/products/:id",
				element: <ModuleProducts />,
			},
			{
				path: "/point-of-sale/module/products/:id/cart",
				element: <CartPage />,
			},
			{
				path: "/customer-management",
				element: <CustomerPage />,
				children: [
					{
						path: "list",
						index: true,
						element: <CustomerList />,
						loader: async () => {
							return await getCustomers();
						},
					},
				],
			},
			// {
			// 	path: "/customer-management/add",
			// 	element: <AddCustomer />,
			// },
			{
				path: "/customer-management/add/personal",
				element: <Personal />,
			},
			{
				path: "/customer-management/list/:customerId",
				element: <CustomerDetailsItems />,
				loader: async ({ request }) => {
					const url = request.url.split("/");
					const customerId = url[url.length - 1];

					return await getCustomer(customerId);
				},
			},
		],

		//  loader: check if user is logged in --- if not 'redirect'
	},
	// Public
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/register",
		element: <Register />,
	},
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
			</QueryClientProvider>
			<Toaster />
		</ThemeProvider>
	</React.StrictMode>,
);
