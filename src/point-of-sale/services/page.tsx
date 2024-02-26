import { AvailableTabs, POSTab } from "@/constants/enums";
import POSTabMutator from "@/components/custom/pos-tab-mutator";
import TabMutator from "@/components/custom/tab-mutator";

export default function Services() {
	return (
		<div className="p-10 pt-4">
			<POSTabMutator tab={POSTab.Service} />
			<TabMutator currentTab={AvailableTabs["Point of Sale"]} />
			test
			{/* <ServiceTable /> */}
		</div>
	);
}
