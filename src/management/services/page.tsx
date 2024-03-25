import TabMutator from "@/components/custom/tab-mutator";
import { AvailableTabs } from "@/constants/enums";
import ListTable from "./table-data";
import { servicesManagement } from "@/constants/objects";
import MyAddButton from "@/components/custom/my-add-button";
import { Outlet } from "react-router-dom";

export default function ManagementServices() {
	return (
		<>
			<div className="p-3 md:py-4 md:px-12 h-full">
				<TabMutator currentTab={AvailableTabs["Service Management"]} />
				<ListTable data={servicesManagement} />
				<MyAddButton
					endpoint="/management/services/add"
					text="Add Services"
					className="md:py-4 md:px-5"
				/>
			</div>
			<Outlet />
		</>
	);
}
