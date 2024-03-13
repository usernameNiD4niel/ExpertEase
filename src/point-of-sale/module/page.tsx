import POSTabMutator from "@/components/custom/pos-tab-mutator";
import TabMutator from "@/components/custom/tab-mutator";
import Tabs from "@/components/custom/tabs";
import { AvailableTabs, POSTab } from "@/constants/enums";
import { Outlet } from "react-router-dom";

export default function Module() {
	return (
		<section className="headingMargin md:mt-0">
			<POSTabMutator tab={POSTab.Service} />
			<TabMutator currentTab={AvailableTabs["Point of Sale"]} />
			<div className="w-full flex gap-2 bg-black text-white">
				{/* Tab */}
				<Tabs />
			</div>
			<Outlet />
		</section>
	);
}
