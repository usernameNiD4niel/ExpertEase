import { create } from "zustand";

type State = {
	searchQuery: string;
};

type Actions = {
	setSearchQuery: (searchQuery: string) => void;
};

const useSearchTable = create<State & Actions>((set) => ({
	searchQuery: "",
	setSearchQuery: (searchQuery: string) => set({ searchQuery }),
}));

export default useSearchTable;
