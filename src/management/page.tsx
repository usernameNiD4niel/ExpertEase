import MyTab from "@/components/custom/my-tab";
import { TabType } from "@/constants/types";
import { Outlet } from "react-router-dom";

export default function ManagementPage() {
	const tabs: TabType[] = [
		{
			matcher: "services",
			text: "Services",
			to: "/management/services",
		},
		{
			matcher: "products",
			text: "Products",
			to: "/management/products",
		},
	];

	return (
		<section className="headingMargin md:mt-0">
			<MyTab tabs={tabs} />
			<Outlet />
		</section>
	);
}
