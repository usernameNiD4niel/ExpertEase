import { SelectType, Services } from "./types";

const items: SelectType[] = [
	{
		label: "Male",
		value: "Male",
	},
	{
		label: "Female",
		value: "Female",
	},
	{
		label: "Male-LGBT",
		value: "Male-LGBT",
	},
	{
		label: "Female-LGBT",
		value: "Female-LGBT",
	},
	{
		label: "Prefer not to say",
		value: "Prefer not to say",
	},
];

// ! Delete this
const servicesItems: Services[] = [
	{
		description: "Just a regular check-up",
		id: "1",
		price: "100.00",
		service: "Regular Check-up",
	},
	{
		description: "Check-up with laboratory analysis",
		id: "2",
		price: "100.00",
		service: "Laboratory Analysis",
	},
	{
		description: "Overnight stay-in",
		id: "3",
		price: "500.00",
		service: "Stay-in",
	},
];

export { items, servicesItems };
