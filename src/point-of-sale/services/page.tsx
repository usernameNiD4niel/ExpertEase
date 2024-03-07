import { AvailableTabs, POSTab } from "@/constants/enums";
import POSTabMutator from "@/components/custom/pos-tab-mutator";
import TabMutator from "@/components/custom/tab-mutator";
import ListTable from "./table-data";
import { useQuery } from "@tanstack/react-query";
import getServices from "@/endpoints/get-services";

export default function Services() {
	const { data } = useQuery({
		queryKey: ["services", "table", "pos"],
		queryFn: getServices,
	});
	return (
		<div className="p-10 pt-4">
			<POSTabMutator tab={POSTab.Service} />
			<TabMutator currentTab={AvailableTabs["Point of Sale"]} />

			{/* <ServiceTable /> */}
			<ListTable data={data?.services} />
		</div>
	);
}
