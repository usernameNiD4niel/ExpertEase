import { AvailableTabs, POSTab } from "@/constants/enums";
import POSTabMutator from "@/components/custom/pos-tab-mutator";
import TabMutator from "@/components/custom/tab-mutator";
import ListTable from "./table-data";
// import { useQuery } from "@tanstack/react-query";
// import getServices from "@/endpoints/get-services";
import MyCart from "@/components/custom/my-cart";
import { ProductsType } from "@/constants/types";
import { useLoaderData } from "react-router-dom";

export default function Products() {
	const products = useLoaderData() as ProductsType;

	return (
		<div className="p-4 md:p-10 pt-4">
			<POSTabMutator tab={POSTab.Product} />
			<TabMutator currentTab={AvailableTabs["Point of Sale"]} />

			{/* <ServiceTable /> */}
			<ListTable data={products.products} />

			<MyCart />
		</div>
	);
}
