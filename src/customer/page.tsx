import CustomerTab from "@/customer/customer-tab";
import CustomerTabMutator from "@/customer/customer-tab-mutator";
import TabMutator from "@/components/custom/tab-mutator";
import { AvailableTabs, CustomerTabs } from "@/constants/enums";
import { Outlet } from "react-router-dom";

export default function CustomerPage() {
	return (
		<section>
			<CustomerTabMutator tab={CustomerTabs.List} />
			<TabMutator currentTab={AvailableTabs["Customer Management"]} />
			<div className="w-full bg-black text-white flex gap-2">
				{/* Tab */}
				<CustomerTab />
			</div>
			<Outlet />
		</section>
	);
}
