import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import Login from "./authentication/login/page.tsx";
import Register from "./authentication/register/page.tsx";
// import ThemeProvider from "@/components/provider/theme-provider.tsx";
// import { Toaster } from "./components/ui/sonner";
import Analytics from "./analytics/page.tsx";
// import PointOfSalePage from "./point-of-sale/page.tsx";
// import Services from "./point-of-sale/services/page.tsx";
// import Module from "./point-of-sale/module/page.tsx";
// import CustomerPage from "./customer/page.tsx";
// import AddCustomer from "./customer/add/page.tsx";
// import CustomerList from "./customer/list/page.tsx";
// import Personal from "./customer/add/personal/page.tsx";

/**
 * const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route element={<Main />} path="/">
				<Route index element={<Root />} />
				<Route path="role-management" element={<RoleManagement />}>
					<Route index element={<Users />} />
					<Route path="role-access" element={<RoleAccess />} />
					<Route path="add" element={<AddRole />} />
					<Route path="modify-role/:role" element={<ModifyAccess />} />
				</Route>
				<Route path="user-management">
					<Route path=":user" element={<UserManagement />} />
				</Route>
				<Route path="supplier" element={<SupplierManagement />}>
					<Route index element={<List />} />
					<Route path="analytics" element={<Analytics />} />
					<Route path="add" element={<AddSupplier />}>
						<Route path="shipping" element={<Shipping />} />
						<Route path="trucking" element={<Trucking />} />
					</Route>
					<Route path=":route" element={<SupplierTableItem />} />
				</Route>
				<Route path="customer" element={<CustumerManagement />}>
					<Route index element={<CustomerList />} />
					<Route path="analytics" element={<CustomerAnalytics />} />
					<Route path="add" element={<CustomerAdd />}>
						<Route path="shipping" element={<CustomerShipping />} />
						<Route path="trucking" element={<CustomerTrucking />} />
					</Route>
				</Route>
				<Route path="sales-agent" element={<SalesAgentManagement />} />
				<Route
					path="inventory-officer"
					element={<InventoryOfficerManagement />}
				/>
				<Route path="inventory" element={<InventoryManagement />}>
					<Route index element={<Available />} />
					<Route path="expired" element={<Expired />} />
					<Route path="full-list" element={<FullList />} />
					<Route path="new-feature" element={<NewFeatures />} />
					<Route path="abcd" element={<Abcd />} />
					<Route path="add" element={<AddInventory />} />
					<Route path=":id" element={<InventoryTableItem />} />
				</Route>
				<Route path="account" element={<Account />} />
				<Route path="order-generator" element={<OrderGenerator />} />
			</Route>
			<Route path="login" element={<Index />} />
		</Route>,
	),
);
 */
const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route element={<App />} path="/">
				<Route index element={<Analytics />} />
			</Route>
			<Route path="login" element={<Login />} />
			<Route path="register" element={<Register />} />
		</Route>,
	),
);
// const router = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: <App />,
// 		children: [
// 			{
// 				path: "/",
// 				index: true,
// 				element: <Analytics />,
// 			},
// 			{
// 				path: "/point-of-sale",
// 				element: <PointOfSalePage />,
// 			},
// 			{
// 				path: "/point-of-sale/module/services",
// 				element: <Module />,
// 				children: [
// 					{
// 						index: true,
// 						element: <Services />,
// 					},
// 				],
// 			},
// 			{
// 				path: "/customer-management",
// 				element: <CustomerPage />,
// 				children: [
// 					{
// 						path: "list",
// 						index: true,
// 						element: <CustomerList />,
// 					},
// 				],
// 			},
// 			{
// 				path: "/customer-management/add",
// 				element: <AddCustomer />,
// 			},
// 			{
// 				path: "/customer-management/add/personal",
// 				element: <Personal />,
// 			},
// 		],

// 		//  loader: check if user is logged in --- if not 'redirect'
// 	},
// 	// Public
// 	{
// 		path: "/login",
// 		element: <Login />,
// 	},
// 	{
// 		path: "/register",
// 		element: <Register />,
// 	},
// ]);

createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
		{/* <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
			<Toaster />
		</ThemeProvider> */}
	</React.StrictMode>,
);
