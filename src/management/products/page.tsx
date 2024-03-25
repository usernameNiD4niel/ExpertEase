import { productsManagement } from "@/constants/objects";
import ListTable from "./table-data";
import { Outlet } from "react-router-dom";
import MyAddButton from "@/components/custom/my-add-button";
import TabMutator from "@/components/custom/tab-mutator";
import { AvailableTabs } from "@/constants/enums";

export default function ProductsPage() {
	return (
		<>
			<div className="p-3 md:py-4 md:px-12 h-full">
				<TabMutator currentTab={AvailableTabs["Product Management"]} />
				<ListTable data={productsManagement} />
				<MyAddButton
					endpoint="/management/products/add"
					text="Add Products"
					className="md:py-4 md:px-5"
				/>
			</div>
			<Outlet />
		</>
	);
}
