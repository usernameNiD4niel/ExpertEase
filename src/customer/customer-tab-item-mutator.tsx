import { CustomerItemTabs } from "@/constants/enums";
import { useCustomerItemTab } from "@/hooks";
import { useEffect } from "react";

interface CustomerTabItemMutator {
	tab: CustomerItemTabs;
}

export default function CustomerTabItemMutator({
	tab,
}: CustomerTabItemMutator) {
	const [activeTab, setActiveTab] = useCustomerItemTab((state) => [
		state.activeTab,
		state.setActiveTab,
	]);

	useEffect(() => {
		if (activeTab !== tab) {
			setActiveTab(tab);
		}
	}, []);
	return <></>;
}
