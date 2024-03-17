import { IconType } from "react-icons/lib";
import { AvailableTabs } from "./enums";

export type Theme = "dark" | "light" | "system";

export type ThemeProviderProps = {
	children: React.ReactNode;
	defaultTheme?: Theme;
	storageKey?: string;
};

export type ThemeProviderState = {
	theme: Theme;
	setTheme: (theme: Theme) => void;
};

export const initialState: ThemeProviderState = {
	theme: "system",
	setTheme: () => null,
};

export type SelectType = {
	value: string;
	label: string;
};

export type NavigationMenu = {
	label: string;
	link: string;
	tab: AvailableTabs;
};

export type ModuleTabType = {
	url: string;
	text: string;
	isActive: boolean;
};

export type RegisterType = {
	lastName: string;
	firstName: string;
	middleName: string;
	birthDate: string;
	gender: string;
	province: string;
	city: string;
	brgy: string;
	email: string;
	pin: string;
	mobileNumber: string;
	recoveryQuestion: string;
	recoveryAnswer: string;
	businessName: string;
	map: string;
};

export type LoginType = {
	mobileNumber: string;
	pin: string;
};

export type CustomerInformationType = {
	firstName: string;
	lastName: string;
	middleInitial: string;
	birthday: string;
	gender: string;
};

export type ContactInformationType = {
	province: string;
	municipality: string;
	brgy: string;
	mobileNumber: string;
};

export type AddCustomerType = {
	customerInformation: CustomerInformationType;
	contactInformation: ContactInformationType;
};

export type Customer = {
	id: string;
	fullName: string;
	address: string;
	mobileNumber: string;
};

export type CustomersType = {
	customers: Customer[];
	page_count: number;
	previous_page: number | null;
	next_page: number | null;
};

export type ServicesType = {
	services: Services[];
	page_count: number;
	previous_page: number | null;
	next_page: number | null;
};

export type Services = {
	id: string;
	service: string;
	description: string;
	price: string;
};

export type Products = {
	id: string;
	product: string;
	description: string;
	category: string; // variant, size and dimensions
	price: string;
};

export type DropdownItem = {
	text: string | JSX.Element;
	action?: () => void;
	Icon?: IconType;
};

export type CartProps = {
	times: string;
	title: string;
	subtitle: string;
	price: string;
	discount?: string;
};
