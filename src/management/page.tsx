import MyTab from "@/components/custom/my-tab";
import { TabType } from "@/constants/types";
import { Outlet } from "react-router-dom";

export default function ManagementPage() {
	const tabs: TabType[] = [
		{
			matcher: "products",
			text: "Products",
			to: "/management/products",
		},
		{
			matcher: "services",
			text: "Services",
			to: "/management/services",
		},
	];

	return (
		<section className="headingMargin md:mt-0">
			<MyTab tabs={tabs} />
			{/* <CustomerTabMutator tab={CustomerTabs.List} />
			<TabMutator currentTab={AvailableTabs["Customer Management"]} />
			<div className="w-full bg-black text-white flex gap-2">
				<CustomerTab />
			</div>
			<Outlet /> */}
			<Outlet />
		</section>
	);
}
