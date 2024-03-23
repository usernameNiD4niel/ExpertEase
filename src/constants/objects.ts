import {
	CartProps,
	Products,
	ProductsManagement,
	SelectType,
	Services,
} from "./types";

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
		discount: "0",
	},
	{
		description: "Check-up with laboratory analysis",
		id: "2",
		price: "100.00",
		service: "Laboratory Analysis",
		discount: "50",
	},
	{
		description: "Overnight stay-in",
		id: "3",
		price: "500.00",
		service: "Stay-in",
		discount: "0",
	},
];

// ! Delete this
const productsItems: Products[] = [
	{
		description: "Just a regular check-up",
		id: "1",
		price: "100.00",
		category: "Variant/Size/Dimension",
		product: "Coca-cola",
		discount: "10",
		unit: "Piece",
	},
	{
		description: "Check-up with laboratory analysis",
		id: "2",
		price: "100.00",
		category: "Variant/Size/Dimension",
		product: "Amino Acid Tablet",
		discount: "0",
		unit: "Box",
	},
	{
		description: "Overnight stay-in",
		id: "3",
		price: "500.00",
		category: "Variant/Size/Dimension",
		product: "Royal",
		discount: "0",
		unit: "Piece",
	},
];

// ! Delete this
const productsManagement: ProductsManagement[] = [
	{
		description: "Just a regular check-up",
		id: "1",
		price: "100.00",
		category: "Variant/Size/Dimension",
		product: "Coca-cola",
	},
	{
		description: "Check-up with laboratory analysis",
		id: "2",
		price: "100.00",
		category: "Variant/Size/Dimension",
		product: "Amino Acid Tablet",
	},
	{
		description: "Overnight stay-in",
		id: "3",
		price: "500.00",
		category: "Variant/Size/Dimension",
		product: "Royal",
	},
];

// ! Delete this
const orderSummary: CartProps[] = [
	{
		price: "45",
		subtitle: "Variant/size/dimension",
		times: "1",
		title: "Regular Check-up",
		discount: "5",
	},
	{
		price: "45",
		subtitle: "Variant/size/dimension",
		times: "3",
		title: "Laboratory Analysis",
	},
	{
		price: "45",
		subtitle: "Variant/size/dimension",
		times: "1",
		title: "Coke in can",
		discount: "20",
	},
];

export {
	items,
	servicesItems,
	productsItems,
	orderSummary,
	productsManagement,
};
