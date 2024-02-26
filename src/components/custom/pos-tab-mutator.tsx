import { POSTab } from "@/constants/enums";
import { usePOSTab } from "@/hooks";
import { useEffect } from "react";

interface TabMutatorProps {
	tab: POSTab;
}

export default function POSTabMutator({ tab }: TabMutatorProps) {
	const [activeTab, setActiveTab] = usePOSTab((state) => [
		state.activeTab,
		state.setActiveTab,
	]);

	useEffect(() => {
		if (activeTab !== tab) {
			setActiveTab(tab);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [tab]);

	return <></>;
}
