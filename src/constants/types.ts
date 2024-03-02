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

export type ListTableType = {
	name: string;
	location: string;
	mobileNumber: string;
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
	barangay: string;
	mobileNumber: string;
};

export type AddCustomerType = {
	customerInformation: CustomerInformationType;
	contactInformation: ContactInformationType;
};
