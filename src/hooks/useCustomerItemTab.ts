import { CustomerItemTabs } from "@/constants/enums";
import { create } from "zustand";

type State = {
	activeTab: CustomerItemTabs;
};

type Actions = {
	setActiveTab: (activeTab: CustomerItemTabs) => void;
};

const useCustomerItemTab = create<State & Actions>((set) => ({
	activeTab: CustomerItemTabs.Profile,
	setActiveTab: (activeTab: CustomerItemTabs) => set(() => ({ activeTab })),
}));

export default useCustomerItemTab;
