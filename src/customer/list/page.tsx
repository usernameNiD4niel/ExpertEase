import MyInput from "@/components/custom/my-input";
import CustomerTabMutator from "../customer-tab-mutator";
import { CustomerTabs } from "@/constants/enums";
import { AddService } from "@/components/icons";
import ListTable from "../list-table";
import column from "../list-column";
import { Link, useLoaderData } from "react-router-dom";
import { CustomersType } from "@/constants/types";

export default function CustomerList() {
	const customers = useLoaderData() as CustomersType;

	return (
		<div className="p-3 md:py-4 md:px-12 h-full">
			<CustomerTabMutator tab={CustomerTabs.List} />
			<div className="flex flex-col w-full justify-end items-end mb-4">
				<MyInput
					placeholder="Search Customer"
					className="w-full py-6"
					name=""
				/>
				<Link
					to={"/customer-management/add"}
					className="p-2 bg-transparent flex items-center justify-center gap-2 text-[#284B63] dark:text-slate-400">
					<span className="mt-[3px]">
						<AddService />
					</span>
					<span className="text-sm">ADD CUSTOMER</span>
				</Link>
			</div>

			<ListTable columns={column} data={customers.customers} />
		</div>
	);
}
