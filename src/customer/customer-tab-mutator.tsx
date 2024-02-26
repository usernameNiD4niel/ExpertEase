import { CustomerTabs } from "@/constants/enums";
import { useCustomerTab } from "@/hooks";
import { useEffect } from "react";

interface CustomerTabMutatorProps {
	tab: CustomerTabs;
}

export default function CustomerTabMutator({ tab }: CustomerTabMutatorProps) {
	const [activeTab, setActiveTab] = useCustomerTab((state) => [
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
