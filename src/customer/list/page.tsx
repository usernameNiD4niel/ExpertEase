import CustomerTabMutator from "../customer-tab-mutator";
import { CustomerTabs } from "@/constants/enums";
import ListTable from "../list-table";
import column from "../list-column";
import { useLoaderData } from "react-router-dom";
import { CustomersType } from "@/constants/types";

export default function CustomerList() {
	const customers = useLoaderData() as CustomersType;

	return (
		<div className="p-3 md:py-4 md:px-12 h-full">
			<CustomerTabMutator tab={CustomerTabs.List} />
			<ListTable columns={column} data={customers.customers} />
		</div>
	);
}
