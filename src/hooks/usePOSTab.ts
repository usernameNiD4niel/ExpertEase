import { POSTab } from "@/constants/enums";
import { create } from "zustand";

type State = {
	activeTab: POSTab;
};

type Actions = {
	setActiveTab: (activeTab: POSTab) => void;
};

const usePOSTab = create<State & Actions>((set) => ({
	activeTab: POSTab.Service,
	setActiveTab: (activeTab: POSTab) => set(() => ({ activeTab })),
}));

export default usePOSTab;
