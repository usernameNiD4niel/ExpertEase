import { Products } from "@/constants/types";
import { ColumnDef } from "@tanstack/react-table";

const column: ColumnDef<Products>[] = [
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
					<span>{row.getValue("product")}</span>
					<span className="md:hidden">{row.getValue("description")}</span>
					<span className="md:hidden">{row.getValue("category")}</span>
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
	},
];

export default column;
