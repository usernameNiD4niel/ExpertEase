import { productsManagement } from "@/constants/objects";
import ListTable from "./table-data";
import { Outlet } from "react-router-dom";

export default function ProductsPage() {
	return (
		<>
			<div className="py-5 px-3">
				<ListTable data={productsManagement} />
			</div>
			<Outlet />
		</>
	);
}
