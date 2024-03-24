import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
import ModuleServices from "./point-of-sale/module/services/page.tsx";
import Products from "./point-of-sale/products/page.tsx";
import ModuleProducts from "./point-of-sale/module/products/page.tsx";
import CartPage from "./point-of-sale/cart/page.tsx";
import {
	appLoader,
	customerManagementListLoader,
	customerManagementLoader,
	productsLoader,
	servicesLoader,
} from "./constants/loader.ts";
import ManagementPage from "./management/page.tsx";
import ProductsPage from "./management/products/page.tsx";
import ManagementServices from "./management/services/page.tsx";
import ProductItem from "./management/products/product-item.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		loader: appLoader,
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
				path: "/point-of-sale/:customerId",
				element: <Module />,
				children: [
					{
						path: "services",
						element: <Services />,
						loader: servicesLoader,
					},
					{
						path: "products",
						element: <Products />,
						loader: productsLoader,
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
				path: "/point-of-sale/cart",
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
						loader: customerManagementLoader,
					},
				],
			},
			{
				path: "/customer-management/add/personal",
				element: <Personal />,
			},
			{
				path: "/customer-management/list/:customerId",
				element: <CustomerDetailsItems />,
				loader: customerManagementListLoader,
			},
			{
				path: "management",
				element: <ManagementPage />,
				children: [
					{
						path: "products",
						element: <ProductsPage />,
						children: [
							{
								path: "add",
								element: <ProductItem />,
							},
						],
					},
					{
						path: "services",
						element: <ManagementServices />,
					},
				],
			},
		],
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
