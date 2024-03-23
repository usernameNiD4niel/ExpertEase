import { productsManagement } from "@/constants/objects";
import ListTable from "./table-data";

export default function ProductsPage() {
	return (
		<div className="py-5 px-3">
			<ListTable data={productsManagement} />
		</div>
	);
}
