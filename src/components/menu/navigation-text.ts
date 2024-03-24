import { AvailableTabs } from "@/constants/enums";
import { NavigationMenu } from "@/constants/types";

const navigationText: NavigationMenu[] = [
	{ label: "Analytics", link: "/", tab: AvailableTabs.Analytics },
	// ? Because the POS button is not a link
	{
		label: "Point of Sale",
		link: "/point-of-sale",
		tab: AvailableTabs["Point of Sale"],
	},
	{
		label: "Pet History",
		link: "/pet-history",
		tab: AvailableTabs["Pet History"],
	},
	{
		label: "Customer Management",
		link: "/customer-management/list",
		tab: AvailableTabs["Customer Management"],
	},
	{
		label: "Product Management",
		link: "/management/products",
		tab: AvailableTabs["Product Management"],
	},
	{
		label: "Service Management",
		link: "/management/services",
		tab: AvailableTabs["Service Management"],
	},
	{
		label: "Attendance Management",
		link: "/attendance-management",
		tab: AvailableTabs["Attendance Management"],
	},
	{
		label: "Transaction Details",
		link: "/transaction-details",
		tab: AvailableTabs["Transaction Details"],
	},
	{
		label: "Account",
		link: "/account",
		tab: AvailableTabs.Account,
	},
];

export default navigationText;
