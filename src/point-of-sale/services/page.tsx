import { AvailableTabs, POSTab } from "@/constants/enums";
import POSTabMutator from "@/components/custom/pos-tab-mutator";
import TabMutator from "@/components/custom/tab-mutator";
import ListTable from "./table-data";
import MyCart from "@/components/custom/my-cart";
import { useLoaderData } from "react-router-dom";
import { ServicesType } from "@/constants/types";

export default function Services() {
	const services = useLoaderData() as ServicesType;

	return (
		<div className="p-4 md:p-10 pt-4">
			<POSTabMutator tab={POSTab.Service} />
			<TabMutator currentTab={AvailableTabs["Point of Sale"]} />

			{/* <ServiceTable /> */}
			<ListTable data={services.services} />

			<MyCart />
		</div>
	);
}
