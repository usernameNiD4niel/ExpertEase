import { ProductsManagement } from "@/constants/types";
import { ColumnDef } from "@tanstack/react-table";

const column: ColumnDef<ProductsManagement>[] = [
	{
		accessorKey: "id",
		header: "ID",
	},
	{
		accessorKey: "product",
		header: () => <div className="md:ms-6">PRODUCT</div>,
		cell: ({ row }) => {
			return (
				<div className="md:ml-6 flex flex-col">
					<span className="font-semibold md:font-normal text-base md:text-sm">
						{row.getValue("product")}
					</span>
					<span className="md:hidden text-sm">
						{row.getValue("description")}
					</span>
					<span className="md:hidden text-sm">{row.getValue("category")}</span>
				</div>
			);
		},
	},
	{
		accessorKey: "description",
		header: "DESCRIPTION",
	},
	{
		accessorKey: "category",
		header: "CATEGORY",
	},
	{
		accessorKey: "price",
		header: "PRICE",
		cell: ({ row }) => {
			return (
				<div className="flex space-x-1 items-center">
					<span className="font-semibold md:font-normal">
						₱{row.getValue("price")}
					</span>
				</div>
			);
		},
	},
];

export default column;
