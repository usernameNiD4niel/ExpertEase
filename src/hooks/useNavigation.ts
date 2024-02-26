import { AvailableTabs } from "@/constants/enums";
import { create } from "zustand";

type State = {
	activeTab: AvailableTabs;
};

type Actions = {
	setActiveTab: (activeTab: AvailableTabs) => void;
};

const useNavigation = create<State & Actions>((set) => ({
	activeTab: AvailableTabs["Analytics"],
	setActiveTab: (activeTab: AvailableTabs) => set(() => ({ activeTab })),
}));

export default useNavigation;
