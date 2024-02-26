import { AvailableTabs } from "@/constants/enums";
import { useNavigation } from "@/hooks";
import { useEffect } from "react";

interface TabMutatorProps {
	currentTab: AvailableTabs;
}

export default function TabMutator({ currentTab }: TabMutatorProps) {
	const [activeTab, setActiveTab] = useNavigation((state) => [
		state.activeTab,
		state.setActiveTab,
	]);

	useEffect(() => {
		if (activeTab !== currentTab) {
			setActiveTab(currentTab);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentTab]);

	return <></>;
}
