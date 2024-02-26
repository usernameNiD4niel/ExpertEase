import { CustomerTabs } from "@/constants/enums";
import { create } from "zustand";

type State = {
	activeTab: CustomerTabs;
};

type Actions = {
	setActiveTab: (activeTab: CustomerTabs) => void;
};

const useCustomerTab = create<State & Actions>((set) => ({
	activeTab: CustomerTabs.List,
	setActiveTab: (activeTab: CustomerTabs) => set(() => ({ activeTab })),
}));

export default useCustomerTab;
