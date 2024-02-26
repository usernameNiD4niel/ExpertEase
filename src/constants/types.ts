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
